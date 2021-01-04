import React, {useEffect, useState} from 'react';
import {TouchWithoutFeedback,Dimensions,Input,Button,TextInput, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/home.js';
import SavedBridges from './src/components/savedBridges.js';
import Splash from './src/components/splash.js';

const Drawer = createDrawerNavigator();

export default function App() { 
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
    <Drawer.Navigator initialRouteName = 'Splash'>
      {/*<Drawer.Screen options = {{drawerLabel: ()=>null, drawerIcon:()=>null}} name = 'Splash' component = {Splash}/>*/}
      <Drawer.Screen name = 'Home'  component = {Home}/>
      <Drawer.Screen name = "Saved" component = {SavedBridges} />
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
