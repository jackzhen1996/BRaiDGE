import MapView from 'react-native-maps';
import {Dimensions,Input,Button,TextInput, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import React, {useEffect, useState, useMemo, useRef} from 'react';
import DetailView from './detailedView.js';
import Marker from './Marker.js';
import SelectionPage from './selectionPage.js';
import Preview from './previewContainer.js';


const Map = function ({receivedData, passToSelectionPage}) {
    //Everything that are passed from App and seachbar
    const {checkOnPress,searchValue,fetchData,selectionView} = passToSelectionPage;

    //Switch for going to detailed page
    const [detailed,goToDetailed] = useState(false);

    //Data from fetching api containing coordinates and preview info
    const dataArray = receivedData? receivedData: null;

    //Callback object from pressing on a marker
    const [markerObject, getMarkerObject] = useState(null);

    //fetch data from preview triggered api call to get full-page view
    const [fullPageData, fetchFullPage] = useState(null);

    //Received data from Flaks api
    //const dataArray = 
    //receivedData === null? [{'latitude':37.725170,'longitude':-122.438336}] : [{'latitude':receivedData.latitude,'longitude': receivedData.longitude}]
    //let mapRef = null;

    console.log('hello')

    const mapData = function(dataArray) {
      if (!dataArray) {
        return null;
      }
        return dataArray.map((point,index)=>{
            //Create tooltip description
            const title = "Bridge " + index;
            const code = "County Code: " + point['County Code'];
            const name = point['county_names'];
            const material = "Structural Material: " + point['Str Material'];
            const design = "Structural Design: " + point['Str Design'];
            const text = name + "\n" + code   + "\n" + material + "\n"+ design;
            return (
                <Marker getMarkerObject = {getMarkerObject} title = {title} text = {text} goToDetailed = {goToDetailed} point = {point} key = {index}/>
            )
        })
    }


    //Not sure if memo is working
    const memoData = useMemo(()=>mapData(dataArray), [dataArray]);
    

    useEffect(()=>{
        //check data array change, if so navigate to the location
        
        mapRef.fitToCoordinates(
            dataArray? dataArray: [{'latitude':41.67887697778792,'longitude':-123.70054077152597},{'latitude':33.190311010731094,'longitude':-116.22217549450625} ]
        ,
            {
              edgePadding: {top: 200, right:50, bottom:200,left:50},
              animated: true
            }
        )
    },[dataArray])
    

    return (
      <View>
        {selectionView &&
          <SelectionPage checkOnPress = {checkOnPress} fetchData = {fetchData} searchValue = {searchValue}/>
        }      
      {/*Exit preview on pressing on map NOT WORKING*/}
      <TouchableWithoutFeedback onPress = {()=>getMarkerObject(null)}>
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
          <DetailView data = {fullPageData} setModal = {goToDetailed} showModal = {detailed} />
          </MapView>
        </TouchableWithoutFeedback>
        {/*Map re-rendering causes the text bugs, place the rendering of the preview outside of the map*/}
        {markerObject &&
          <Preview fetchData = {fetchFullPage} goToDetailed = {goToDetailed} identifier = {markerObject} />
        } 
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
   
  });

export default React.memo(Map);