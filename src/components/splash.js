import React, {useEffect, useState,} from 'react';
import {ScrollView,TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacityBase, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Splash = function() {
    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>navigation.navigate('Home'),1500);
    },[])
    
    return (
        <View style = {styles.container}>
            <Image style = {{height: 200, width: 380,}} source = {require('../../assets/logo.png')}/>
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

export default Splash;