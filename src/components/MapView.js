import MapView from 'react-native-maps';
import {Dimensions,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import DetailView from './detailedView.js';
import Marker from './Marker.js';


const Map = function ({receivedData}) {
    const [detailed,goToDetailed] = useState(false);
    const dataArray = receivedData? receivedData: [{'latitude':37.8197222,'longitude':-122.478888}];
    //Received data from Flaks api
    //const dataArray = 
    //receivedData === null? [{'latitude':37.725170,'longitude':-122.438336}] : [{'latitude':receivedData.latitude,'longitude': receivedData.longitude}]
    //let mapRef = null;

    const mapData = function(dataArray) {
        return dataArray.map((point,index)=>{
            //Create tooltip description
            const title = "Bridge" + index;
            const code = "County Code: " + point['County Code'];
            const name = point['county_names'];
            const material = "Structural Material: " + point['Str Material'];
            const design = "Structural Design: " + point['Str Design'];
            const text = name + "\n" + code   + "\n" + material + "\n"+ design;
            return (
                <Marker goToDetailed = {goToDetailed} point = {point} key = {index}/>
            )
        })
    }

    const memoData = useMemo(()=>mapData(dataArray), [dataArray]);

    useEffect(()=>{
        //check data array change, if so navigate to the location
        
        mapRef.fitToCoordinates(
            dataArray
        ,
            {
              edgePadding: {top: 200, right:50, bottom:200,left:50},
              animated: false
            }
        )
        console.log('moving to new location')
    },[dataArray])

    return (
    <MapView
          ref = {(ref) => {mapRef = ref}}
          loadingEnabled = {true}
          style = {styles.map}
        //  initialRegion={{
        //  //Location of Golden Gate Bridge
        //  latitude: 37.8197222,
        //  longitude: -122.4788889,
        //  latitudeDelta: 0.0922,
        //  longitudeDelta: 0.0421,
        //  }}
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
        {/*<Marker point = {{'latitude':37.725170,'longitude':-122.438336}}/>*/}
        {memoData}
        <DetailView setModal = {goToDetailed} showModal = {detailed} />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    }
  });

export default React.memo(Map);