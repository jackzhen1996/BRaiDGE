import {TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacityBase } from 'react-native';
import React, {useEffect, useState,} from 'react';

const selectionPage = function({data,searchValue,fetchData,checkOnPress}) {

    var post_route = "http:192.168.86.61:5000/search";
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

    //  const onTextChange = function(value) {
    //    let suggestion = [];
    //    if (value.length > 0) {
    //        const regex = new RegExp(`^${value}`,'i');
    //        setSuggestion(dataArray.sort().filter(v=>v.test(regex)));
    //    }

    //}

    const renderData = function({item}) {
        const regex = new RegExp(`^${searchValue}`,'i');
        if (regex.test(item.location)){
            return(
                <TouchableOpacity 
                    onPress = {()=>{
                    post_search(post_route,item.location);
                    checkOnPress(false);
                    }}>
                    <Text style = {{width:300,fontSize: 25,borderWidth:1, marginTop:10}}>
                        {item.location}
                    </Text>
                </TouchableOpacity>
            )
        }
    }
    return (
        <View style = {styles.container}>
            {/*Display data here*/}
            <FlatList 
            keyExtractor = {item => item.location}
            renderItem = {renderData} 
            data = {data} />
            {/*<Text>selection page</Text>*/}
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

