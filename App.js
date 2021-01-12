import React, {useEffect, useState} from 'react';
import {TouchWithoutFeedback,Dimensions,Input,Button,TextInput, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem , DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import configStore from "./src/components/store/store.js";
import Home from './src/components/home.js';
import SavedBridges from './src/components/savedBridges.js';
import Prediction from './src/components/prediction.js';
import ABCStack from './src/components/formStack.js';
import Splash from './src/components/splash.js';
import SearchIcon from './assets/search.tsx';
import HeartIcon from './assets/heart.tsx';
import Dots from './assets/prediction.tsx';
import BackArrow from './assets/backArrow.tsx';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Clipboard from './assets/clipboard.tsx';
import { Logs } from 'expo'
Logs.enableExpoCliLogging()

const Drawer = createDrawerNavigator();
const store= configStore();

const DrawerContent = function(props) {
  return (
    <DrawerContentScrollView {...props}>
        <Image resizeMode = 'contain' style = {{width: 200, height: 100, flex:1, marginLeft: '14%'}} source = {require('./assets/logo-small.png')}/>
        <DrawerItemList {...props}>
        {/*use this to add additonal routes*/}
        </DrawerItemList>
    </DrawerContentScrollView>
  )
}


export default function App() { 

  return (
    <NavigationContainer>
      <Provider store = {store}>
        {/*<PersistGate loading = {null} persistor = {persistor}>*/}
        <Drawer.Navigator drawerContent = {(props)=><DrawerContent {...props}/>}initialRouteName = 'Splash'>
          {/*<Drawer.Screen options = {{drawerLabel: ()=>null, drawerIcon:()=>null}} name = 'Splash' component = {Splash}/>*/}
          <Drawer.Screen options = {{drawerIcon:()=><SearchIcon/>, drawerLabel:()=><Text style = {{fontSize:20, fontWeight: '600'}}>Search</Text>}} name = 'Home'  component = {Home}/>
          <Drawer.Screen 
          options = {{
            headerStyle:{shadowOffset:{height:0},height:'6%',},headerTitle: null,headerShown: true,drawerIcon:()=><HeartIcon/>, drawerLabel: ()=><Text style = {{fontSize:20, fontWeight: '600' }}>Saved</Text>}} name = "Saved" component = {SavedBridges} />
          <Drawer.Screen options = {{headerLeft:()=>null,headerStyle:{shadowOffset:{height:0},height:'6%',paddingTop:10} , headerTitle: null,headerShown: true,drawerIcon:()=><Clipboard/>, drawerLabel: ()=><Text style = {{fontSize:20, fontWeight: '600' }}>ABC Score Sheet</Text>}} name = "ABCStack" component = {ABCStack} />
          <Drawer.Screen options = {{headerShown: true, headerTitle:null,drawerIcon:()=><Dots/>, drawerLabel:()=><Text style = {{fontSize:20, fontWeight: '600' }}>Prediction</Text>}}name = "Prediction" component = {Prediction}/>
        </Drawer.Navigator>
        {/*</PersistGate>*/}
      </Provider>
  </NavigationContainer>
  )
  }

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
