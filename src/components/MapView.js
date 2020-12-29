import MapView, {Marker, Callout} from 'react-native-maps';
import {Dimensions,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useEffect, useState,} from 'react';

const Map = function ({receivedData}) {
    const dataArray = receivedData.length !== 0? receivedData: [{'latitude':37.8197222,'longitude':-122.478888}]
    console.log(receivedData)
    //Received data from Flaks api
    //const dataArray = 
    //receivedData === null? [{'latitude':37.725170,'longitude':-122.438336}] : [{'latitude':receivedData.latitude,'longitude': receivedData.longitude}]
    //let mapRef = null;

    useEffect(()=>{
        //check data array change, if so navigate to the location
        mapRef.fitToCoordinates(
            dataArray
        ,
            {
              edgePadding: {top: 200, right:50, bottom:200,left:50}
            }
        )
    })

    return (
    <MapView
          ref = {(ref) => {mapRef = ref}}
          style = {styles.map}
          initialRegion={{
          //Location of Golden Gate Bridge
          latitude: 37.8197222,
          longitude: -122.4788889,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}
          //onPress = {e=>console.log("Pressed:" , e.nativeEvent)}
        //  onRegionChange = {e=>{
        //    setLongDelta(e.longitudeDelta);
        //    setLatDelta(e.latitudeDelta);
        //  }}
          //onRegionChangeComplete = {e=>console.log('Region changed', e.nativeEvent)}

        //  onLayout = {()=>mapRef.fitToCoordinates(
        //    //Headers should be latitude and longitude
        //        dataArray
        //    ,
        //    {
        //      edgePadding: {top: 200, right:50, bottom:200,left:50}
        //    }
        //  )}
        
        >
        {dataArray.map((point,index)=>{
            //Create tooltip description
            const title = "Bridge" + index;
            const code = "County Code: " + point['County Code'];
            const name = "County Name: " + point['county_names'];
            const type = "Structural Type: " + point['StrType'];
            const material = "Structural Material: " + point['Str Material'];
            const design = "Structural Design: " + point['Str Design'];
            const text = name + "\n" + code+ "\n" + type + "\n" + material + "\n"+ design;
            return (
            <Marker 
                coordinate = {{latitude:point.latitude, longitude:point.longitude}}
                key = {index}
            >
                <Callout>
                    <Text style = {{fontSize:16, fontWeight: 'bold'}}>{title}</Text>
                    <Text>{text}{'\n'}</Text>
                    {/*Link to detailed page*/}
                    <TouchableOpacity>
                        <Text style = {{color:'blue'}}>See more details</Text>
                    </TouchableOpacity>
                </Callout>
            </Marker>
                )
        })}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    }
  });

export default Map;