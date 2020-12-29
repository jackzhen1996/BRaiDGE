import React, {useEffect, useState,} from 'react';
import {TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacityBase } from 'react-native';
import Modal from 'react-native-modal';

const detailedView = function({setModal,showModal}) {
    //Use useeffect to fetch required data in this view
    
    const dataFields = 
    ["Structure Number #", 'Structure Type','Last Inspection Date','Identification and Location',
    'Structural Type and Materials','Dimensions and Clearance', 'Inspection', 'Condition Rating and Evaluation'
     ,'Load Rating and Posting', 'Traffic and Roadway Data', 'Dimensions and Clearance'];

    //Map out all data fields
    const mappedFields = dataFields.map((field,index)=>(
        <TouchableOpacity key = {index}>
            <Text style = {{fontSize:23}}>
                {field}
            </Text>
        </TouchableOpacity>
    ));

    return (
        <View>
            <Modal style = {{margin:0,backgroundColor:'white'}} isVisible = {showModal}>
                <View style = {{flex:1, justifyContent:'center',alignItems:'center'}}>
                    {/*Required data fields*/}
                    {mappedFields}
                    <Button title = 'Back' onPress = {()=>setModal(false)}/>
                </View>
            </Modal>
        </View>
    )
}

export default detailedView