import React, {useEffect, useState, useRef} from 'react';
import {TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NewBridge from '../../assets/newSheet.tsx';

const abcHome = function() {
    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
           <View style = {{borderBottomColor:'#E9E8E8', borderBottomWidth:1,width: '92%', marginBottom:'6%'}}>
                <Text style = {{fontSize:40, textAlign:'left',width:'100%',fontWeight: 'bold', marginTop: '10%',paddingBottom:'4%',}}>ABC Score Sheet</Text>
            </View>
            <TouchableOpacity style = {styles.createNew} onPress = {()=>navigation.navigate('scoresheet')}>
                <View style = {{flex:2, paddingLeft:30,paddingTop:20}}><NewBridge/></View>
                <View style = {{flex:7}}>
                    <Text style = {{fontSize:30,fontWeight:'bold'}}>Create</Text>
                    <Text style = {{fontSize:18}}>An ABC score sheet for a new bridge project</Text>
                </View>
            </TouchableOpacity>
            <View style = {{width: '92%', marginTop: '6%'}}>
                <View style = {{borderBottomColor:'#E9E8E8', borderBottomWidth:1}}>
                    <Text style = {{fontSize:30, fontWeight: 'bold',paddingBottom: '4%'}} >Saved Scoresheets</Text>
                </View>
                <View style = {{display:'flex', flexDirection:'row', width: '100%', marginTop: '6%'}}>
                    <Text style = {{flex:7, fontSize: 20, fontWeight: '600'}}>Project Name</Text>
                    <Text style = {{flex:2, fontSize: 20, fontWeight: '600'}}>Date</Text>
                </View>
                <View style = {{width: '100%',}}>
                    <TouchableOpacity style = {styles.previewBox}>
                        <View style = {{flex:0.5,borderTopLeftRadius:13,borderBottomLeftRadius:13, backgroundColor:"#257FF2"}}></View>
                        <Text style = {{fontWeight: 'bold',flex: 5, padding: "5%",fontSize:15,}}>02 - 1H590 Portugeese Creek Bridge and Cade Creek Bridge</Text>
                        <Text style = {{flex: 3,paddingTop: '2%',textAlign: 'center',height:'50%', alignSelf:'center',fontSize:15}}>1/10/2021</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    previewBox : {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: '100%', 
        marginTop: '6%', 
        display:'flex', 
        flexDirection:'row',
        borderRadius: 13,
        backgroundColor: '#fff',

        //backgroundColor:'#F8F8F8',
    },
    createNew: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        height: 135, 
        width: 380, 
        display:'flex',
        flexDirection:'row',
        backgroundColor: '#fff',
        borderRadius: 13,
        paddingTop: '5%'

    }

})


export default abcHome;