import React, {useEffect, useState,} from 'react';
import {ScrollView,TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacityBase } from 'react-native';
import Modal from 'react-native-modal';
import ArrowDown from '../../assets/arrowDown.tsx';
import ArrowUp from '../../assets/arrowUp.tsx';

const detailedView = function({setModal,showModal,data}) {
    //Use useeffect to fetch required data in this view
        //POST api route test method

    const fakeData= {
        'Identification and Location' : [
            {'item1:': 'abc'},
            {'item2:': 'abc'},
            {'item3:': 'abc'},
        ],
        'Structure Type and Materials': [
            {'item1:': 'abc'},
            {'item2:': 'abc'},
            {'item3:': 'abc'},
        ],
        'Dimensions and Clearances': [],
        'Inspection': [],
        'Conditions Rating and Evaluation': [],
        'Load Rating and Posting': [],
        'Traffic and Roadway Data': []
    }

    //Maps out drop downs for each category
    const mapData = function(data) {
        const result = [];
        for (const item in fakeData) {
            const [show,showInfo] = useState(false);
            result.push(
                <View>
                    <TouchableOpacity onPress = {()=>showInfo(!show)} style = {{display:'flex', flexDirection:'row'}}>
                        <Text style = {{width:'80%', fontSize:18}}>{item}</Text>
                        {show? <ArrowUp width = {28} height = {28}/> : <ArrowDown width = {28} height = {28}/>}
                    </TouchableOpacity>
                    <View style = {{marginBottom:'2%'}}>
                        {show &&  data[item].map((item,index)=>{
                            const key = Object.keys(item)[0];
                            return (
                                <Text style = {{fontSize:15}} key = {index}>{key} : {item[key]}</Text>
                            )
                        })}
                    </View>
                </View>
            )
        }
        return result;
    }
    
    
    
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

    //const mapData = function(obj) {
    //    let result = [];
    //    for (const [key,value] of Object.entries(obj[0])) {
    //        result.push(
    //            <Text>{key} : {value}</Text>
    //        )
    //    }
    //    return result;
    //}

    return (
        <View>
            <Modal style = {{margin:0,backgroundColor:'white'}} isVisible = {showModal}>
                <ScrollView contentContainerStyle = {{borderWidth:1,flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>Detail Page view</Text>
                <Button title = 'Back' onPress = {()=>setModal(false)}/>
                {mapData(fakeData)}
                {/*<TouchableOpacity onPress = {()=>showInfo(!show)} style = {{display:'flex', flexDirection:'row'}}>
                    <Text style = {{width:'70%'}}>Identification and Location</Text>
                    <Text>more info</Text>
                </TouchableOpacity>*/}
                    {/*Required data fields*/}
                    {/*{data?mapData(data):null}*/}
                </ScrollView>
            </Modal>
        </View>
    )
}

export default detailedView