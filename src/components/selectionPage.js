import {TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacityBase, LayoutAnimation, Animated } from 'react-native';
import React, {useEffect, useState,useContext, useRef} from 'react';
import MapPin from '../../assets/map-pin.tsx'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {GET_LOCANDBASICINFO} from "./actions/session_actions.js";
import * as Animatable from 'react-native-animatable';

const AnimateTouchable = Animatable.createAnimatableComponent(TouchableOpacity);

const selectionPage = function({searchValue,checkOnPress, setSelected}) {
    const dispatch = useDispatch();
    const countyNames = require('../../data/geocodes.json');
    let countyContext;
    //POST api route test method
    var post_route = "https://braige-app.herokuapp.com/testData";
    const post_search = function(url,search) {
        axios.post(url, {'location': search})
            .then(response => dispatch({type: GET_LOCANDBASICINFO, data: response.data}))
      }

    //Run each item in the data array thru regex test, and display only those who passed


    const renderData = function({item}) {
            return(
                <AnimateTouchable
                    animation = "zoomIn"
                    duration = {500}
                    useNativeDriver
                    onPress = {()=>{
                        LayoutAnimation.configureNext( LayoutAnimation.create(
                            170,
                            LayoutAnimation.Types.keyboard,
                            LayoutAnimation.Properties.opacity
                          ));
            
                    setSelected(item['CountyName']);
                    post_search(post_route,item['CountyName']);
                    checkOnPress(false);
                    }}
                    style = {{flex:1,flexDirection:'row', borderBottomColor:'#E9E8E8',borderBottomWidth:1, height:45, justifyContent:'space-around'}}
                    >

                    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}><MapPin/></View>
                    <Text style = {{width:'85%',fontSize: 18, padding:'2.5%', textAlign:'left', }}>
                        {item['CountyName']}
                    </Text>
                </AnimateTouchable>
            )
        }
    
    const filteredData = function(value) {
        if (!searchValue) {
            return [];
        } 
        const regex = new RegExp(`^${value}`,'i');
        return countyNames.filter(item=>regex.test(item['CountyName']));
    }

        return (
            <View style = {styles.container}>
                {/*Display data here*/}
                <View style = {styles.list}>
                {searchValue?
                    <FlatList 
                    keyExtractor = {item => item['CountyName']}
                    renderItem = {renderData} 
                data = {filteredData(searchValue)} />
                :null}
                </View>
            </View>
    
        )


    };


const styles = StyleSheet.create({
    container: {
        position:'absolute',
        zIndex: 1,
        height: '100%',
        width:'100%',
        //borderWidth:1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      list : {
          marginTop: '24%',
          width:'93%',
        //  borderWidth: 1
      }

  });

export default selectionPage;

