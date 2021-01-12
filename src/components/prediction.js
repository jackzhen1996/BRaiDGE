import React, {useEffect, useState, useRef} from 'react';
import {TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {GET_PREDICTION} from './actions/session_actions.js';

const fields = [
    {"desc": "Number of Spans in Main Unit (45)", "ph": "Example: 7"},
    {"desc": "Lanes on the Structure (28A)", "ph" : "Example: 4"},
    {"desc" : "Lanes under the Structure (28B)", "ph" : "Example: 0"},
    {"desc" : "Average Daily Traffic (29)", "ph" : "Example: 770"},
    {"desc" : "Scour Critical Bridges Code ( 113)" , "ph" : "Example: 0 or 1 only"},
    {"desc" : "Length of Maximum Span, ft (48)" , "ph" : "Example: 50"},
    {"desc" : "Inspection Frequencym, months (91)", "ph" : "Example: 12 or 24 only"}
    ]

 const prediction = function() {
    const dispatch = useDispatch()
    //const test = useSelector(state=>state.session.markerObject);

    const mapFields = fields.map((field,index)=>(
        <TouchableOpacity key = {index} style = {styles.inputContainer}>
            <Text style = {{fontSize: 20, fontWeight:'bold'}}>{field.desc}</Text>
            <TextInput placeholder = {field.ph} style = {{borderBottomWidth:1, borderBottomColor:'black', width: '70%', height: 40, textAlign:'center',fontSize:15,}}/>
        </TouchableOpacity>
    ))    


    return (
        <View style = {styles.container}>
            <View style =  {{borderBottomColor:'#E9E8E8', borderBottomWidth:1,width: '100%',display:'flex'}}>
                <Text style = {{fontSize:40, textAlign:'center',width:'100%',fontWeight: 'bold', marginTop: '10%',paddingBottom:'1%',}}>Bridge Type Predictor</Text>
                <Text style = {{fontSize: 18, width: '95%', alignSelf:'center'}}>This will be a description of what the bridge type predictor will do</Text>
            </View>
            <ScrollView contentContainerStyle = {styles.scroll}>
                {mapFields}
                <TouchableOpacity onPress = {()=>dispatch({type: GET_PREDICTION, payload: "form"})} style = {{marginTop: '10%',height: 45, width: 165, backgroundColor: "#257FF2", borderRadius: 30, justifyContent:'center', alignItems:'center', alignSelf:'center'}}><Text style = {{fontSize:18,color: 'white'}}>Make Prediction</Text></TouchableOpacity>
            </ScrollView>

        </View>
    )
 }

 const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scroll: {
        width:Dimensions.get('window').width,
        paddingBottom: '35%'
    },

    inputContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 13, 
        height: 90, 
        width: '90%', 
        alignSelf:'center',
        marginTop: '10%',
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor: '#fff',

    }
 });

 export default prediction;