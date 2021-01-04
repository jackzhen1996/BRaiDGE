import React, {useEffect, useState,} from 'react';
import {ScrollView,TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacityBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Splash = function() {
    const navigation = useNavigation();

    //useEffect(()=>{
    //    setTimeout(()=>navigation.navigate('Home'),2000);
    //},[])
    
    return (
        <View style = {styles.container}>
            <Text>Welcome!</Text>
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