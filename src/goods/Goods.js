import React, { Component } from 'react'
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	Image,
	TextInput,
	ScrollView,
} from 'react-native';;

const styles = StyleSheet.create({
box:{
    width:'40%',
    height:'30%',
	margin:10,
	backgroundColor:'white'
},
box2:{
    width:60,
    height:30,
},
txt:{
    textAlign:'center'
}

});
export default class Goods extends Component {
    render() {
        return (
            <SafeAreaView style={{width:'100%',height:'100%'}}>
				<ScrollView>				
				{/* TextInput 受控组件 */}
				<View style={{
					backgroundColor:'#cfcfcf',
					justifyContent:'space-evenly',
					flexDirection:'row-reverse',
					margin:20,
					borderRadius:10,
				}}>
					<Image style={{width:30,height:30,marginTop:10,}} source={require('../assets/search.png')} />
					<TextInput 
						placeholder="请输入商品名称"
						placeholderTextColor='gray'
						style={{               
							width:'70%',
							height:50							
						}}
					/>
				</View>
			                                      
                {/* flex 布局 */}
				{/* 在 rn 中，组件 默认设置了 flex 属性，默认主轴是 竖轴 */}
				{/* justifyContent:定义主轴对齐方式 */}
				{/* alignItems:定义交叉轴对齐方式 */}
                <View style={{
					flexDirection:'row',
					justifyContent:"space-evenly",
					flexWrap:'wrap',				                   
				}}>
					<View style={styles.box2}>
						<Text style={styles.txt}>综合</Text>
					</View>
					<View style={styles.box2}>
						<Text style={styles.txt}>销量</Text>
					</View>
					<View style={styles.box2}>
						<Text style={styles.txt}>新品</Text>
					</View>
					<View style={styles.box2}>
						<Text style={styles.txt}>价格</Text>
					</View>
					<View style={styles.box2}>
						<Text style={styles.txt}>信用</Text>
					</View>
				</View>

				<View style={{
					height:700,
					flexDirection:'row',
					justifyContent:"space-evenly",
					flexWrap:'wrap',
					backgroundColor:'rgb(244,244,244)'
				}}>
					<View style={styles.box}>
					<Image style={{width:'70%',height:'60%',marginTop:20,
						marginLeft:'15%' ,marginRight:'15%',marginBottom:10
					
					}} source={require('../assets/corn.jpg')}/>
						<Text style={{fontSize:12,marginLeft:10,marginRight:10,}}>oshi上好佳玉米卷20包膨化休闲食品</Text>
                        <Text style={{fontSize:14,marginLeft:10,marginTop:5,color:'red'}}>36.00</Text>
					</View>
					<View style={styles.box}>
                    <Image style={{width:'70%',height:'60%',marginTop:20,
						marginLeft:'15%' ,marginRight:'15%',marginBottom:10}} source={require('../assets/chips.jpg')}/>
						<Text style={{fontSize:12,marginLeft:10,marginRight:10,}}>oshi上好佳玉米卷20包膨化休闲食品</Text>
                        <Text style={{fontSize:14,marginLeft:10,marginTop:5,color:'red'}}>36.00</Text>
					</View>
					<View style={styles.box}>
                    <Image style={{width:'70%',height:'60%',marginTop:20,
						marginLeft:'15%' ,marginRight:'15%',marginBottom:10}} source={require('../assets/corn.jpg')}/>
						<Text style={{fontSize:12,marginLeft:10,marginRight:10,}}>oshi上好佳玉米卷20包膨化休闲食品</Text>
                        <Text style={{fontSize:14,marginLeft:10,marginTop:5,color:'red'}}>36.00</Text>
					</View>
					<View style={styles.box}>
                    <Image style={{width:'70%',height:'60%',marginTop:20,
						marginLeft:'15%' ,marginRight:'15%',marginBottom:10}} source={require('../assets/chips.jpg')}/>
						<Text style={{fontSize:12,marginLeft:10,marginRight:10,}}>oshi上好佳玉米卷20包膨化休闲食品</Text>
                        <Text style={{fontSize:14,marginLeft:10,marginTop:5,color:'red'}}>36.00</Text>
					</View>
					<View style={styles.box}>
                    <Image style={{width:'70%',height:'60%',marginTop:20,
						marginLeft:'15%' ,marginRight:'15%',marginBottom:10}} source={require('../assets/corn.jpg')}/>
						<Text style={{fontSize:12,marginLeft:10,marginRight:10,}}>oshi上好佳玉米卷20包膨化休闲食品</Text>
                        <Text style={{fontSize:14,marginLeft:10,marginTop:5,color:'red'}}>36.00</Text>
					</View>
					<View style={styles.box}>
                    <Image style={{width:'70%',height:'60%',marginTop:20,
						marginLeft:'15%',marginRight:'15%',marginBottom:10}} source={require('../assets/chips.jpg')}/>
						<Text style={{fontSize:12,marginLeft:10,marginRight:10,}}>oshi上好佳玉米卷20包膨化休闲食品</Text>
                        <Text style={{fontSize:14,marginLeft:10,marginTop:5,color:'red'}}>36.00</Text>
					</View>
				</View>				
				</ScrollView>		
			</SafeAreaView>
        )
    }
}
