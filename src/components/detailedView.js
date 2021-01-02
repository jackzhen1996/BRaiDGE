import React, {useEffect, useState,} from 'react';
import {ScrollView,TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacityBase } from 'react-native';
import Modal from 'react-native-modal';

const detailedView = function({setModal,showModal,data}) {
    //Use useeffect to fetch required data in this view
        //POST api route test method
    
    
    const dataFields = 
    ["Structure Number #", 'Structure Type','Last Inspection Date','Identification and Location',
    'Structural Type and Materials','Dimensions and Clearance', 'Inspection', 'Condition Rating and Evaluation'
     ,'Load Rating and Posting', 'Traffic and Roadway Data', 'Dimensions and Clearance'];

    //Map out all data fields
    //const mappedFields = dataFields.map((field,index)=>(
    //    <TouchableOpacity key = {index}>
    //        <Text style = {{fontSize:23}}>
    //            {field}
    //        </Text>
    //    </TouchableOpacity>
    //));

    const mapData = function(obj) {
        let result = [];
        for (const [key,value] of Object.entries(obj[0])) {
            result.push(
                <Text>{key} : {value}</Text>
            )
        }
        return result;
    }

    return (
        <View>
            <Modal style = {{margin:0,backgroundColor:'white'}} isVisible = {showModal}>
                <ScrollView contentContainerStyle = {{flex:1, justifyContent:'center',alignItems:'center'}}>
                    {/*Required data fields*/}
                    {data?mapData(data):null}
                    <Button title = 'Back' onPress = {()=>setModal(false)}/>
                </ScrollView>
            </Modal>
        </View>
    )
}

export default detailedView