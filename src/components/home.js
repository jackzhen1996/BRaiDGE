import React, {useEffect, useState} from 'react';
import {TouchWithoutFeedback,Dimensions,Input,Button,TextInput, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MapView from './MapView.js';
import DropDown from './dropDownSearch.js';


const home = function() {  
    const [selectionView, switchView] = useState(false);
    const [searchValue,setValue] = useState(null);
    const [selectedValue, setSelected] = useState(null);

    const passToSelectionPage = {
    'checkOnPress': switchView,
    'searchValue': searchValue,
    'selectionView': selectionView,
    'setSelected': setSelected,
    };

    return (
        <View style = {styles.container}>
        <MapView passToSelectionPage = {passToSelectionPage}/>
        <TouchableWithoutFeedback onPress = {()=>Keyboard.dismiss()}>
          <DropDown selected = {selectedValue} searchingFor = {setValue} checkOnPress = {switchView} isFocused = {selectionView}/> 
        </TouchableWithoutFeedback>
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