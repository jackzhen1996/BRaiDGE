import React, {useEffect, useState} from 'react';
import {Dimensions,Button, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  const [time,setTime] = useState(0);
  const [showMap,setMap] = useState(false);

  //useEffect(() => {
  //  //On PC, replace IP with address with IPv4
  //  //Format :'IP'/'MY_API'
  //  fetch('http://192.168.86.59:5000/time').then(res => res.json()).then(data => {
  //    setTime(data.time);
  //  });
  //}, []);

  return (
    <View style = {styles.container}>
       <MapView
          style = {styles.map}
          initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}
        />
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
