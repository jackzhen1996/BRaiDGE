import React, {useEffect, useState,} from 'react';
import {Dimensions,Button, StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function App() {
  const [showMap,setMap] = useState(false);
  const [longDelta,setLongDelta] = useState(0);
  const [latDelta,setLatDelta] = useState(0);

  //test data: about 100 rows 
  var data = require('./data/new_data_latlong_JSON.json');

  //useEffect(() => {
    //On PC, replace IP with address with IPv4
    //Format :'IP'/'MY_API'
    //fetch('http://192.168.86.59:5000/time').then(res => res.json()).then(data => {
    //  setTime(data.time);
    //});
  //}, []);

  return (
    <View style = {styles.container}>
       <MapView
          style = {styles.map}
          initialRegion={{
          //Location of Golden Gate Bridge
          latitude: 37.8197222,
          longitude: -122.4788889,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}

          //onPress = {e=>console.log("Pressed:" , e.nativeEvent)}
          onRegionChange = {e=>{
            setLongDelta(e.longitudeDelta);
            setLatDelta(e.latitudeDelta);
          }}
          //onRegionChangeComplete = {e=>console.log('Region changed', e.nativeEvent)}
        
        >
        {data.map((point,index)=>(
          <Marker 
            coordinate = {{latitude:point.lat_deg, longitude:point.long_deg}}
            title = {'' + index}
          />
        ))}
        </MapView>
        <Text style = {{fontSize: 20,position:"absolute", bottom:50}}>
          LongDelta: {longDelta.toFixed(4)}  , LatDelta: {latDelta.toFixed(4)} {'\n'}
          X-miles : {longDelta.toFixed(4)*69}
        </Text>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
