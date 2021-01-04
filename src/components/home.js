import React, {useEffect, useState} from 'react';
import {TouchWithoutFeedback,Dimensions,Input,Button,TextInput, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MapView from './MapView.js';
import DropDown from './/dropDownSearch.js';


const home = function() {  
    
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

    const [selectionView, switchView] = useState(false);

    //Mid-point variables
    //Pass setValue into Dropdown to catch value entered, 
    //pass searchValue into SelectionPage to run regex test and display results
    const [searchValue,setValue] = useState(null);
    //coordinates in this test is the county name
    const [coordinates, fetchCoordinates] = useState(null);

    //const rawCountyData = require('./data/lat_long_allcounties.json');
    //const filteredData = rawCountyData.filter(data=>data['county_names'] === coordinates)

    const passToSelectionPage = {
    'checkOnPress': switchView,
    'fetchData': fetchCoordinates,
    'searchValue': searchValue,
    'selectionView': selectionView
    };

    return (
        <View style = {styles.container}>
        <MapView receivedData = {coordinates} passToSelectionPage = {passToSelectionPage}/>
        <TouchableWithoutFeedback onPress = {()=>Keyboard.dismiss()}>
          <DropDown searchingFor = {setValue} checkOnPress = {switchView} isFocused = {selectionView}/> 
        </TouchableWithoutFeedback>
        {/*{selectionView && <SelectionPage checkOnPress = {switchView} fetchData = {fetchCoordinates} searchValue = {searchValue}/>  }*/}
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
  

export default home;