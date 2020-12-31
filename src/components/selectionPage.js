import {TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacityBase } from 'react-native';
import React, {useEffect, useState,} from 'react';

const selectionPage = function({data,searchValue,fetchData,checkOnPress}) {
    const countyNames = require('../../data/geocodes.json');

    //POST api route test method
    var post_route = "http://192.168.86.61:5000/testData";
    const post_search = function(url,search) {
        const requestOptions = {
          method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'location': search})
        }
        fetch(url, requestOptions)
        //response is in json string or Python object string
            .then(response => response.json())
            .then(data => {
                fetchData(data);
            });
      }

    //Run each item in the data array thru regex test, and display only those who passed
    const renderData = function({item}) {
            return(
                <TouchableOpacity 
                    onPress = {()=>{
                    post_search(post_route,item['CountyName']);
                    checkOnPress(false);
                    }}>
                    <Text style = {{width:300,fontSize: 25,borderWidth:1, marginTop:10}}>
                        {item['CountyName']}
                    </Text>
                </TouchableOpacity>
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
                {searchValue?
                    <FlatList 
                        keyExtractor = {item => item['CountyName']}
                    renderItem = {renderData} 
                data = {filteredData(searchValue)} />
                :null}
            </View>
    
        )


    };


const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: '80%',
        borderWidth:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

  });

export default selectionPage;

