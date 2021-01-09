import {Marker, Callout} from 'react-native-maps';
import React, {useState} from 'react';
import {Text, TouchableOpacity } from 'react-native';
import Svg from '../../assets/cc.tsx';

const useMarker = function({point,text,title,getMarkerObject,getPreview}) {
    console.log(point)
    //var post_route = "http://192.168.86.61:5000/getPreview";
    //var [postData,setData] = useState(null);
    //const post_search = function(url,search) {
    //    const requestOptions = {
    //      method: 'POST',
    //        headers: { 'Content-Type': 'application/json' },
    //        body: JSON.stringify({'latitude': search})
    //    }
    //    fetch(url, requestOptions)
    //    //response is in json string or Python object string
    //        .then(response => response.json())
    //        .then(data => {
    //            getPreview(data);
    //        });
    //  }
    const materialMap = {
        '0 - Other': {
            'color': 'black',
            'name' : 'O'
        },
        '1 - Concrete': {
            'color': '#FF8E14',
            'name' : 'C'
        },
        '2 - Concrete Continuous': {
            'color' : '#FF8E14',
            'name': 'CC'
        },
        '3 - Steel' : {
            'color': '#65C8FF',
            'name': 'S'
        },
        '4 - Steel Continuous': {
            'color': '#65C8FF',
            'name': 'SC'
        },
        '5 - Prestressed Concrete' : {
            'color': '#92DDAF',
            'name': 'PC'
        },
        '6 - Prestressed Concrete Continuous': {
            'color' : '#92DDAF',
            'name' : 'PCC'
        },
        '7 - Wood or Timber' : {
            'color' : '#E8475A',
            'name' : 'WT'
        },
        '8 - Mansonry': {
            'color' : '#5F4E79',
            'name' : 'M'
        },
        '9 - Aluminum, Wrought Iron, or Cast Iron': {
            'color': '#6697FB',
            'name': 'AL'
        }
    }

    return (
        <Marker 
        coordinate = {{latitude:point.latitude, longitude:point.longitude}}
        tracksViewChanges={false}
        onPress = {(event)=>{
            //post_search(post_route,point.latitude)
            getMarkerObject({'latitude':event.nativeEvent.coordinate.latitude, 'kind': point["structure_kind_43a"], 'type': point["structure_type_43b"], 'id': point['structure_number_008']})
        }}    
        //Pass structural ID as identifier
        identifier = {title}        
        key = {point.latitude}                   
    >
        <Svg height = {20} width = {20} name = {materialMap[point["structure_kind_43a"]].name} color = {materialMap[point["structure_kind_43a"]].color}/>
    </Marker>
    )
};

export default useMarker;