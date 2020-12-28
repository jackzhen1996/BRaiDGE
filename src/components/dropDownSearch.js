import {Dimensions,Input,Button,TextInput, StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState,} from 'react';

const DropDown = function({checkOnPress,isFocused,data,searchingFor}) {
    //onTextChange checks for matched results
    const dataArray = [];
    for(const prop in data) {
        dataArray.push(data[prop]);
    }

    //const onTextChange = function(value) {
    //    let suggestion = [];
    //    if (value.length > 0) {
    //        const regex = new RegExp(`^${value}`,i);
    //        suggestion = dataArray.sort().filter(v=>regex.test(v));
    //    }

    //}
    
    return (
        <View style = {{position:'absolute',top:50, display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
            {isFocused? <Button title = 'Go back' onPress = {()=>checkOnPress(false)}/> : null}
            <TextInput 
            clearButtonMode = 'always' 
            style = {{fontSize: 22,height:40,borderWidth:1,backgroundColor:'white',width:'90%'}}
            clearTextOnFocus = {true}
            placeholder = 'Enter county name'
            onFocus = {()=>checkOnPress(true)}
            onChangeText = {(value)=>searchingFor(value)}
            />
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

  });

export default DropDown;

