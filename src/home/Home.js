import React, { Component } from 'react'
import { View,  Text, Image,
     Dimensions , StyleSheet ,TextInput, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button'
const {width} = Dimensions.get('window').width
export default class Home extends Component {
    render() {
        return (
            <ScrollView style={{width:'100%',height:'100%'}}>
                <View>
                    <View style={{backgroundColor:'red',flexDirection:'row',justifyContent:'center',
                                    alignItems:'center'
                    }}>
                        <View style={{
                            opacity:0.8,
                            backgroundColor:'#cfcfcf',
                            flexDirection:'row',
                            justifyContent:'space-evenly',
                            alignItems:'center',                          
                            borderRadius:50,
                            width:'75%',
                            height:40,
                            margin:10
                        }}>
                             <Image style={{width:25,height:25,color:'white'}} source={require('../Img/search.png')} />
                            <TextInput 
                                placeholder="请输入搜索的关键字"
                                placeholderTextColor='white'
                                
                                style={{  
                                    width:'60%' ,   
                                    height:50,
                                    fontSize:16                                        						
                                }}
                            />
                           
                        </View>
                        <Image style={{width:30,height:30,color:'white'}} source={require('../Img/shopcar.png')} />
                    </View>
                    
                    <View style={styles.container}>
                        <Swiper style={styles.wrapper} 
                        autoplay={true}
                        >
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../Img/bg1.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../Img/bg2.png')} />
                        </View>
                
                        </Swiper>
                    </View>

                    <View style={{backgroundColor:'white' ,flexDirection:'row',marginTop:10,alignItems:'center'}}>
                        <View style={{height:70,width:70,backgroundColor:'pink',marginLeft:20,alignItems:'center',
                                        justifyContent:'center',borderRadius:50,margin:7
                        }}>
                            <Image source={require('../Img/lbg1.png')}/>
                            
                        </View>
                        <Text style={{marginLeft:'23%',fontSize:20}}>居家维护</Text>
                        <Image source={require('../Img/left.png')}  style={{marginLeft:'28%',fontSize:16}}/>
                    </View>
                    <View style={{backgroundColor:'white' ,flexDirection:'row',marginTop:10,alignItems:'center'}}>
                        <View style={{height:70,width:70,backgroundColor:'yellow',marginLeft:20,alignItems:'center',
                                        justifyContent:'center',borderRadius:50,margin:7
                        }}>
                            <Image source={require('../Img/lbg2.png')}/>
                            
                        </View>
                        <Text style={{marginLeft:'23%',fontSize:20}}>住宿优惠</Text>
                        <Image source={require('../Img/left.png')}  style={{marginLeft:'28%',fontSize:16}}/>
                    </View>
                    <View style={{backgroundColor:'white' ,flexDirection:'row',marginTop:10,alignItems:'center'}}>
                        <View style={{height:70,width:70,backgroundColor:'green',marginLeft:20,alignItems:'center',
                                        justifyContent:'center',borderRadius:50,margin:7
                        }}>
                            <Image source={require('../Img/lbg3.png')}/>
                            
                        </View>
                        <Text style={{marginLeft:'23%',fontSize:20}}>出行接送</Text>
                        <Image source={require('../Img/left.png')}  style={{marginLeft:'28%',fontSize:16}}/>
                    </View>
                    <View style={{backgroundColor:'white' ,flexDirection:'row',marginTop:10,alignItems:'center'}}>
                        <View style={{height:70,width:70,backgroundColor:'blue',marginLeft:20,alignItems:'center',
                                        justifyContent:'center',borderRadius:50,margin:7
                        }}>
                            <Image source={require('../Img/lbg4.png')}/>
                            
                        </View>
                        <Text style={{marginLeft:'23%',fontSize:20}}>E 族活动</Text>
                        <Image source={require('../Img/left.png')}  style={{marginLeft:'28%',fontSize:16}}/>
                    </View>
                    <View style={{width:width,alignItems:'center',marginTop:30}}>
                            <Button 
                            onPress={()=>{}}
                            style={styles.btn}
                        >发布需求</Button>
                    </View>
                    
                 </View>
                 </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
      },     
      slide: {
        width:'100%',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
     image:{
         width:'100%',
     },
     btn:{
         height:50,
         width:300,
         backgroundColor:'red',
         color:'white',
         borderRadius:6,
         textAlignVertical: 'center',
     }
})
