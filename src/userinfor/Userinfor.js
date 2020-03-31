import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Text,
    Image,
    FlatList,
    TouchableOpacity,
    AsyncStorage,
    ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImageCropPicker from 'react-native-image-crop-picker';
const styles = StyleSheet.create({
    box:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        height:200
    },
    good:{
        width:'33%',
        height:80,
        justifyContent:'center',
        alignItems:'center'
    },
    good3:{
        marginLeft:'66%',
        marginTop:-80,
        width:'33%',
        height:80,
        justifyContent:'center',
        alignItems:'center'
    }
})

const goods = [
    {
        title: '账户管理',
        img: require('../Img/accont.png')
    },
    {
        title: '收货地址',
        img: require('../Img/address.png')
    },
    {
        title: '我的信息',
        img: require('../Img/msg.png')
    },
    {
        title: '我的订单',
        img: require('../Img/order.png')
    },
    {
        title: '我的二维码',
        img: require('../Img/erweima.png')
    },
    {
        title: '我的积分',
        img: require('../Img/number.png')
    },
    {
        title: '我的收藏',
        img: require('../Img/collect.png')
    },
]

const goods2 = [
    {   
        key:'1',
        title:'居家维修保养',
        img: require('../Img/weixiu.png')
    },
    {   
        key:'2',
        title:'出行接送',
        img: require('../Img/car.png')
    },
    {   
        key:'3',
        title:'我的受赠人',
        img: require('../Img/person.png')
    },
    {   
        key:'4',
        title:'我的住宿优惠',
        img: require('../Img/zhusu.png')
    },
    {   
        key:'5',
        title:'我的活动',
        img: require('../Img/activity.png')
    },
   
]


export default class Userinfor extends Component {
    constructor(){
        super();
        state = {          
            imageUrl:'',
            
        }
    }
    takephoto = ()=>{
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            this.setState({imageUrl:{uri:image.path}})
          });
    } 
    storeData = async ()=>{
        await AsyncStorage.setItem('imageUrl',this.state.imageUrl,
            ()=>{console.log('store success')}
        )
    }
    getData = ()=>{
        AsyncStorage.getItem('imageUrl')
        .then((res)=>console.log(res));
    }
    exit =()=>{
        AsyncStorage.removeItem('user');
        Actions.login();
        
    }
    render() {
        return (
            <ScrollView style={{width:'100%',height:'100%'}}>
           <View>             
               <View style={styles.box}>
               <TouchableOpacity onPress={()=>{this.takephoto()}}>
                    <Image source={(require('../Img/photo.png'))} />
                </TouchableOpacity>
                    <Text style={{color:'white',fontSize:18}} >BINNU  DHILLON</Text>                  
               </View>

               <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                   <Image source={require('../Img/my.png')} style={{margin:8}}/>
                   <Text>     我的个人中心</Text>
               </View>

               <FlatList 
                    style={{backgroundColor: 'white',
                        marginTop:2 
                    }}
                    data={goods}
                    numColumns={3}
                    renderItem={({item})=>(
                        <View style={styles.good}>
                            <Image 
                                resizeMode="contain"
                                source={item.img}
                                style={{width:30 ,height:30}}
                            />
                            <Text
                                style={{marginTop: 5}}
                            
                            >{item.title}</Text>   
                        </View>
                    )}
                />

                <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',
                            marginTop:4
                }}>
                   <Image source={require('../Img/ezu.png')} style={{margin:8}}/>
                   <Text>     E族活动
                   </Text>
               </View>
               <FlatList 
                    style={{backgroundColor: 'white',
                        
                    }}
                    data={goods2}
                    numColumns={3}
                    renderItem={({item})=>(
                        <View style={styles.good} key={item.key}>
                            <Image 
                                resizeMode="contain"
                                source={item.img}
                                style={{width:30 ,height:30}}
                            />
                            <Text
                                style={{marginTop: 5}}
                            
                            >{item.title}</Text>   
                        </View>    
                    )
                }      
                />
                    
                       
                    <TouchableOpacity  style={styles.good3} onPress={()=>Actions.public()}>
                            <Image 
                                        resizeMode="contain"
                                        source={require('../Img/fabu.png')}
                                        style={{width:30 ,height:30}}                                     
                                    />
                                    <Text
                                        style={{marginTop: 5}}                                  
                                    >我的发布</Text>                                     
                    </TouchableOpacity>



                <TouchableOpacity 
                style={{
                    width: '50%',
                    height: 40,
                    backgroundColor: 'blue',
                    marginTop: 3,
                    marginLeft:'25%',
                    marginRight:'25%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.exit}>
                <Text>退出登录</Text>
                </TouchableOpacity>

           </View>
           </ScrollView>
        )
    }
}
