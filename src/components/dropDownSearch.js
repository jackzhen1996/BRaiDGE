import {Image,Dimensions,Input,Button,TextInput, StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {useEffect, useState,} from 'react';
import { useNavigation } from '@react-navigation/native';


const DropDown = function({checkOnPress,isFocused,searchingFor}) {
    //onTextChange checks for matched results
    const navigation = useNavigation();

    return (
        <View style = {{height: '5%',width:'100%',position:'absolute',top:50, display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
            <View style = {{backgroundColor:'white',borderRadius: 20,width:'80%', borderWidth:1,flexDirection:'row'}}>
            {/*<Image source = {require('../../assets/menu.svg')}/>*/}
            <Button onPress = {()=>navigation.openDrawer()} title = 'Menu'/>
            <TextInput 
                clearButtonMode = 'always' 
                style = {{borderRadius: 15,width: '80%',fontSize: 18,height:40,backgroundColor:'white',}}
                clearTextOnFocus = {true}
                placeholder = 'Enter county name'
                //Navigates to SelectionPage
                onFocus = {()=>checkOnPress(true)}
                //SelectionPage catches this value by callback function
                onChangeText = {(value)=>searchingFor(value)}
            />
            </View>
            {isFocused?
             <Button title = 'Cancel' onPress = {
                 ()=>{
                     checkOnPress(false);
                     Keyboard.dismiss();
                    }

                }/> 
            : 
                null
            }

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
      searchBar: {
          
      }

  });

export default DropDown;

