import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Text,
    ToastAndroid,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
const RootUrl='https://cnodejs.org/api/v1/topics?limit=15&page='
const styles = StyleSheet.create({
    head:{
        height:50,
        backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }  ,
    msg:{
        marginLeft:10,
        marginRight:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    title:{
        width:'55%',
        fontSize:16,
        marginTop:15,
    },
    time:{
        fontSize:16,
        paddingTop:15,
        position:'absolute',
        marginLeft:'60%'
    },
    state:{
        fontSize:16,
        marginTop:15,
    },
    state2:{
        fontSize:16,
        marginTop:15,
        color:'red'
    },
    bt:{
        height:30,
        width:90,
        backgroundColor:'red',
        borderRadius:35,
        color:'white',
    }
    
})
export default class Public extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            pages:1,       
        }
    }
    componentDidMount(){
        fetch(RootUrl+this.state.pages)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
        
    }
    componentDidUpdate(preProps,prevState){
        if(this.state.pages != prevState.pages){
            fetch(RootUrl+this.state.pages)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    add = ()=>{
        this.setState({
            pages:this.state.pages+1
        })
    }
    next= ()=>{
        if(this.state.pages>1){
            this.setState({
                pages:this.state.pages-1
            })
        }else{
            ToastAndroid.show('当前界面为第一页', ToastAndroid.TOP);
        }

    }
    
    render(){
        return(
            <ScrollView style={{
                width:'100%',
                height:'100%'
            }}>
                <View style={styles.head}>
                   <Icon 
                        style={{marginLeft:20}}
                   name='chevron-left' color='white' size={20} onPress={()=>Actions.pop()}/> 
                   <Text style={{fontSize:20,color:'white'}} >我的发布</Text>
                   <Text style={{fontSize:30,marginRight:20,color:'white'}}>···</Text>
                </View>

                {this.state.data.map((item)=>(
                    <View style={styles.msg}>
                       
                        <Text style={styles.title}>
                            {item.title.length<15?item.title:item.title.substr(0,13)+'...'}
                        </Text>
                        <Text style={styles.time}>{item.create_at.substr(0,10)}</Text>
                        {Math.random()<0.6?<Text style={styles.state}>已回复</Text>:<Text style={styles.state2}>待回复</Text>}
                    </View>
                ))}

                <View style={{flexDirection:'row',justifyContent:'space-between' ,margin:30,alignItems:'center',}}>
                    <Button onPress={()=>this.next()} style={styles.bt}>
                        上一页
                    </Button>
                    <Text style={{fontSize:18}}>第{this.state.pages}页</Text>
                    <Button onPress={()=>this.add()} style={styles.bt}>
                        下一页
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

