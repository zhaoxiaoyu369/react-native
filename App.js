import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Login from './src/common/Login'
import Userinfor from './src/userinfor/Userinfor';
import SwiperPage from './src/common/SwiperPage';
import Register from './src/common/Register'
import Public from './src/common/Public'



console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}

	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene == 'home'){
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
					
				}
				else if(Actions.currentScene == 'login')
				{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}	
				}
				
				else{
					Actions.pop();
					return true;
				}
				
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="gray"
								tabBarStyle={{backgroundColor:'white'}}
							>
								{/* 首页 */}
								<Scene key='homePage'
									title='首页'
									icon={
										({focused})=><Icon 
											color={focused?'green':'gray'} 
											name="home"
										/>
                                    }
                                    hideNavBar={true}
                                    
								>
								<Scene key='home' 
										component={Home}
									/>	
								</Scene>
								{/* 商品分类 */}
								<Scene key='goodsPage'
									title='商品分类'
									icon={
										({focused})=><Icon 
											color={focused?'green':'gray'} 
											name="file"
										/>
									}
									hideNavBar={true}
									
									
								>
								<Scene key="goods" component={Goods}/>	
								</Scene>
								{/* 用户中心 */}
								<Scene 
									key='userPage'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'green':'gray'} 
											name='home'/>
										}
									title="个人中心"
									hideNavBar={true}
									component={Userinfor}
								/>
								
							</Tabs>
						</Scene>
					</Drawer>
				</Lightbox>
				<Scene key='public' component={Public} hideNavBar={true}/>						
				<Scene initial={!isLogin} key="login" component={Login} />
				<Scene  key="register" component={Register} />
			</Modal>		
			</Overlay>
		</Router>
	);
};

export default App;