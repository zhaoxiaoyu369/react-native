import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, Alert} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    register = ()=>{
      if(this.state.username !='' && this.state.pwd !=''){
        myFetch.post('/register',{
          username:this.state.username,
          pwd:this.state.pwd}
      ).then(res=>{
         if(res.data.sign=='1'){
           Alert.alert('账户已存在');
         }
         else if(res.data.sign=='2') {
          Alert.alert('连接错误');
         }
         else{
           AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
              Actions.login();
            })
         }
         console.log(res.data)
              
      })
      }
      else{Alert.alert('输入项有空')}
      
  }
  login=()=>{
    Actions.login();
  } 
    render() {
        return (
            <View style={{flex:1,justifyContent: 'center'}}>
            <View
              style={{ alignItems: 'center'}}>
              <View
                style={{
                  width: '80%',
                  marginRight: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Icon name="user" color="red"/>
                <TextInput placeholder="用户名" 
                    onChangeText={this.userhandle}
                />
              </View>
              <View
                style={{
                  width: '80%',
                  marginRight: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Icon name="user" color="red"/>
                <TextInput 
                    onChangeText={this.pwdhandle}
                    placeholder="密码" 
                    secureTextEntry={true}
                />
              </View>
                <TouchableOpacity 
                    style={{
                        width: '80%',
                        height: 40,
                        backgroundColor: '#ccc',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={this.register}>
                    <Text>注册</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        width: '80%',
                        height: 40,
                        backgroundColor: '#ccc',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={this.login}>
                    <Text>已有账号前往登陆</Text>
                </TouchableOpacity>
            </View>
          </View> 
        )
    }
}
