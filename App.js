import React, {useEffect, useState} from 'react';
import {TouchWithoutFeedback,Dimensions,Input,Button,TextInput, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem , DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Home from './src/components/home.js';
import ABC from './src/components/abcForm.js';
import SavedBridges from './src/components/savedBridges.js';
import Splash from './src/components/splash.js';
import SearchIcon from './assets/search.tsx';
import HeartIcon from './assets/heart.tsx';
import BackArrow from './assets/backArrow.tsx';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

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
  //const navigation = useNavigation()
  //var data = require('./data/new_data_latlong_JSON.json');

  

  //Test routes

  //useEffect(() => {
    //On PC, replace IP with address with IPv4
    //Format :'IP'/'MY_API'
  //  fetch('http:192.168.86.61:5000/time').then(res => res.json()).then(data => {
  //    setSearch(data.time)
  //  });
  //  console.log(search)
  //}, []);

  //const [selectionView, switchView] = useState(false);

  //Mid-point variables
  //Pass setValue into Dropdown to catch value entered, 
  //pass searchValue into SelectionPage to run regex test and display results
  //const [searchValue,setValue] = useState(null);
  //coordinates in this test is the county name
  //const [coordinates, fetchCoordinates] = useState(null);

  //const rawCountyData = require('./data/lat_long_allcounties.json');
  //const filteredData = rawCountyData.filter(data=>data['county_names'] === coordinates)

// const passToSelectionPage = {
//  'checkOnPress': switchView,
//  'fetchData': fetchCoordinates,
//  'searchValue': searchValue,
//  'selectionView': selectionView
// };

  return (
    <NavigationContainer>
    <Drawer.Navigator drawerContent = {(props)=><DrawerContent {...props}/>}initialRouteName = 'Splash'>
      {/*<Drawer.Screen options = {{drawerLabel: ()=>null, drawerIcon:()=>null}} name = 'Splash' component = {Splash}/>*/}
      <Drawer.Screen options = {{drawerIcon:()=><SearchIcon/>, drawerLabel:()=><Text style = {{fontSize:20, fontWeight: '600'}}>Search</Text>}} name = 'Home'  component = {Home}/>
      <Drawer.Screen 
      options = {{
        //headerLeft:()=><TouchableOpacity onPress = {()=>navigation.navigate('Home')} style = {{marginLeft: 10}}><BackArrow /></TouchableOpacity>,
        headerStyle:{shadowOffset:{height:0},height:'10%',},headerTitle: null,headerShown: true,drawerIcon:()=><HeartIcon/>, drawerLabel: ()=><Text style = {{fontSize:20, fontWeight: '600' }}>Saved</Text>}} name = "Saved" component = {SavedBridges} />
      <Drawer.Screen options = {{headerStyle:{shadowOffset:{height:0},height:'10%'},headerTitle: null,headerShown: true,drawerIcon:()=><HeartIcon/>, drawerLabel: ()=><Text style = {{fontSize:20, fontWeight: '600' }}>ABC Score Sheet</Text>}} name = "ABC Score Sheet" component = {ABC} />
    </Drawer.Navigator>
  </NavigationContainer>
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
