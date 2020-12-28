import React, {useEffect, useState,} from 'react';
import {Dimensions,Input,Button,TextInput, StyleSheet, Text, View } from 'react-native';
import MapView from './src/components/MapView.js';
import DropDown from './src/components/dropDownSearch.js';
import SelectionPage from './src/components/selectionPage.js';

export default function App() {
  const [showMap,setMap] = useState(false);
  const [longDelta,setLongDelta] = useState(0);
  const [latDelta,setLatDelta] = useState(0);
  const [search,setSearch] = useState(null);
 
  //var data = require('./data/new_data_latlong_JSON.json');
  var data = require('./data/autoComplete_test.json')

  //Test routes
  var post_route = "http:192.168.86.61:5000/search";
  var get_route = "http:192.168.86.61:5000/time"

  //useEffect(() => {
    //On PC, replace IP with address with IPv4
    //Format :'IP'/'MY_API'
  //  fetch('http:192.168.86.61:5000/time').then(res => res.json()).then(data => {
  //    setSearch(data.time)
  //  });
  //  console.log(search)
  //}, []);

  const [selectionView, switchView] = useState(false);

  //Mid-point variables
  //Pass setValue into Dropdown to catch value entered, 
  //pass searchValue into SelectionPage to run regex test and display results
  const [searchValue,setValue] = useState(null);
  //coordinates in this test is the county name
  const [coordinates, fetchCoordinates] = useState(null);

  const rawCountyData = require('./data/lat_long_allcounties.json');
  const filteredData = rawCountyData.filter(data=>data['county_names'] === coordinates)
  const filteredJSON = filteredData.map((json)=>{
    return {'latitude' : json.latitude, 'longitude': json.longitude}
  })


  return (
    <View style = {styles.container}>
      {selectionView?
        <SelectionPage checkOnPress = {switchView} fetchData = {fetchCoordinates} searchValue = {searchValue} data = {data}/> 
        :
        <MapView receivedData = {filteredJSON}/>
      }
      <DropDown searchingFor = {setValue} data = {data} checkOnPress = {switchView} isFocused = {selectionView}/> 
      </View>
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
