/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  View,
  TextInput,
  ToastAndroid,
  ScrollView,
} from 'react-native';

import Swiper from 'react-native-swiper';
export default class PartyBuild extends Component {
   /**
     * 初始化数据
     * @param props
     */
    constructor(props) {
        super(props);
        //基本都是些固定写法
        //第一步
        var ds = new ListView.DataSource({rowHasChanged: ((r1, r2) => r1 !== r2)});
        this.state = {
            //数据源
            //第二步
            dataSource: ds.cloneWithRows([
                '1', '2', '3', '4', '5', '6', '7', '8', '9', 'lala', 'dada', 'cc', 'pp'
            ])
        }
    }
  render() {
  var {width, height} = require('Dimensions').get('window');
  return (
  <ScrollView>
    <View style={styles.container}>
    <View style={
        {flexDirection:'row',
        flex: 0,
        height:150,
        }
        }>

      <Swiper height={150}
      >
        {this.renderImg()}
      </Swiper>
    </View>
    <View style={
      {flexDirection:'row',
      flex: 0,
      }
      }>
      <Text style={styles.welcome}>
        精选课程
      </Text>
      <Text style={styles.instructions}
      onPress={() => {
        ToastAndroid.show('点击了更多按钮', ToastAndroid.SHORT);}}>
        更多>
      </Text>
    </View>
    <View style={
      {flexDirection:'row',
      flex: 0,
      alignItems: 'center',
      }
      }>
      <View style={{width: (width/2)-20, margin: 10,}}>
        <Image
          source={{uri:'http://7xt0mt.com1.z0.glb.clouddn.com/content1.png'}}
          style={{width: ((width/2)-20), height: (((width/2)-20)*0.55),}}
          />
        <Text>
          学习习近平总书记关于全面从严治党的重要论述
        </Text>
      </View>
      
      <View style={{width: (width/2), margin: 10,}}>
        <Image
          source={{uri:'http://7xt0mt.com1.z0.glb.clouddn.com/content2.png'}}
          style={{width: ((width/2)-20), height: (((width/2)-20)*0.55),}}
          />
        <Text>
          学习习近平总书记关于全面从严治党的重要论述
        </Text>
      </View>
    </View>
    
    <View style={
      {flexDirection:'row',
      flex: 0,
      }
      }>
      <Text style={styles.welcome}>
        热门推荐
      </Text>
      <Text style={styles.instructions}
      onPress={() => {
        ToastAndroid.show('点击了更多按钮', ToastAndroid.SHORT);}}>
        更多>
      </Text>
    </View>
    
      <View style={{paddingTop: 20, flex: 1}}>

                <ListView style={{width: width}}
                    //第三步 设置数据源
                    dataSource={this.state.dataSource}
                    // 写法一
                    // renderRow={(rowData) => <Text style={{height: 150, fontSize: 20}}>测试数据{rowData}</Text>}
                    //写法二
                    //第四步渲染每行数据也就是对每行数据的布局样式
                    renderRow={this.renderRow}
                >
        
        </ListView>
            </View>
    
    </View>
    </ScrollView>
    ); 
    }
  
  /**
     *
     * @param rowData       数据源
     * @param sectionID     组ID
     * @param rowID         行ID
     * @returns {XML}
     */
    renderRow(rowData, sectionID, rowID) {
        return (
      <View style={styles.rightViewStyle}>
        <Image
          source={{uri:'http://7xt0mt.com1.z0.glb.clouddn.com/banner1.jpg'}}
          style={styles.imageStyle}
          />
        <View style={{flexDirection:'column', flex: 1,}}>
          <Text style={{marginTop:15,fontSize: 20,}} >
          朝阳区举办党史知识竞赛 满满的正能量
          </Text>
          <View style={{marginBottom:20,flexDirection:'row', flex: 1,alignItems :'flex-end',}}>
            <Text style={{margin:0,color: '#989898',}}>
            时长：01:04:55
            </Text>
            
            <View 
            style={{flexDirection:'row',
                flex: 1,
                justifyContent :'flex-end',
                marginRight:5,
                }}
            >


            <Text style={{margin:20,color: '#989898',}}>
              301
            </Text>
            <Image  
              source={{uri:'http://7xt0mt.com1.z0.glb.clouddn.com/eye.png'}}
              style={{
                width:20,
                height:20,
                margin:20,
                }}
              >
              </Image>


              <Text style={{margin:20,color: '#989898',}}>
              118
            </Text>
            <Image
              source={{uri:'http://7xt0mt.com1.z0.glb.clouddn.com/favorite.png'}}
              style={{
                width:15,
                height:15,
                margin:20,
                }}
              >
</Image>
            
            </View>
            
            
          </View>
          
        </View>
      </View>
           
        )
    }
  
    renderImg(){
    var images=[
    'http://7xt0mt.com1.z0.glb.clouddn.com/banner1.jpg',
    'http://7xt0mt.com1.z0.glb.clouddn.com/banner2.jpg',
    'http://7xt0mt.com1.z0.glb.clouddn.com/banner3.jpg',
    'http://7xt0mt.com1.z0.glb.clouddn.com/banner4.jpg',
    ];
    
    var imageViews=[];
        for(var i=0;i<images.length;i++){
      imageViews.push(
                <Image
        key={i}
        style={{flex:1}}
        source={{uri:images[i]}}
        >
          <TextInput style={
            {
            margin:0,
            height:30,
            fontSize: 15,
            color: '#ffffff',
            padding:0,
            opacity:0.5,
            backgroundColor: '#000000',
            }}
          underlineColorAndroid={'transparent'}
          textAlign='center'
          autoFocus={false}
          numberOfLines={1}
          placeholderTextColor={'#ffffff'}
          placeholder='学习习近平总书记关于全面从严治党的重要论述'/>
        </Image>
            );
        }
        return imageViews;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
  flex: 1,
  color: '#2f2f2f',
    margin: 10,
  },
  instructions: {
  fontSize: 10,
    color: '#969696',
  flex: 0,
  textAlign: 'right',
  margin: 15,
  },
  rightViewStyle:{        
    flexDirection:'row',
  flex: 1,  
    borderBottomColor:'#CCCCCC',//cell的分割线       
    borderBottomWidth:1    
  },
  imageStyle:{        
    width:100,        
    height:100,        
    margin:20,
  },
  button: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },  
});
AppRegistry.registerComponent('PartyBuild', () => PartyBuild);
