import React, {useEffect, useState,} from 'react';
import {TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View,Image} from 'react-native';

const previewContainer = function({identifier, goToDetailed}) {
    const id = identifier? identifier.id : 0;
    return (
    
    //On press with lead to the detailed page
    <TouchableOpacity onPress = {()=>goToDetailed(true)} style = {styles.previewContainer}>
            <View style = {styles.image}>
                {/*icon goes here*/}
                {/*<Image></Image>*/}
            </View>
            <View style = {styles.text}>
                <Text style = {styles.header} >Structure #: {id}</Text>
                <Text style = {styles.header} >Type of Structure:</Text>
                <Text style = {styles.header} >Last Inspection Date:</Text>
            </View>
    </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    previewContainer : {
        position:'absolute',
        width: '90%',
        height: '15%',
        backgroundColor: 'white',
        bottom: '8%',
        left: '5.3%',
        borderRadius: 10,
        flex:1,
        flexDirection: 'row',
      },
      image: {
        position: 'relative',
        width: '30%',
        borderRightWidth: 1,
      },
      text: {
        position: 'relative',
      },
      header: {
        fontWeight:'bold'
      }
  
});


export default previewContainer;