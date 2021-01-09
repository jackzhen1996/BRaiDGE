import {TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacityBase, ScrollView } from 'react-native';
import React, {useEffect, useState,} from 'react';
import Preview from './previewContainer.js';

const savedBridges = function() {
    const inSavedPage = true;
    
    const renderItem = function({item}) {
        return (
            <Preview savedPage = {item.savePage} identifier = {item.identifier}/>
        )
    }
    return (
        <View style = {styles.container}>
           <View style = {{borderBottomColor:'#E9E8E8', borderBottomWidth:1, width: '92%'}}>
                <Text style = {{fontSize:35, textAlign:'left',width:'100%',fontWeight: 'bold', marginTop: '10%',paddingBottom:'4%'}}>Saved Structures</Text>
            </View>
             <ScrollView contentContainerStyle = {{marginTop: '5%',  width: '100%',  paddingBottom:'20%',}}>
                    <Preview savePage = {inSavedPage} identifier = {{'id':'123','kind':'123','type':'123' }}/>
                    <Preview savePage = {inSavedPage} identifier = {{'id':'123','kind':'123','type':'123' }}/>
            </ScrollView>
            {/*<View style = {{borderWidth:1,width: '100%', height: '100%',}}>
                <FlatList keyExtractor = {item=>item.identifier} renderItem = {renderItem} data = {[{'savePage': inSavedPage, identifier : "'id':'123','kind':'123','type':'123'"}]}/>
            </View>*/}
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
  });
  
export default savedBridges;