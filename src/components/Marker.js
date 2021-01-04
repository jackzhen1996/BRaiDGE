import {Marker, Callout} from 'react-native-maps';
import React, {useState} from 'react';
import {Text, TouchableOpacity } from 'react-native';

const useMarker = function({point,text,title,getMarkerObject,getPreview}) {
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
    >
    </Marker>
    )
};

export default useMarker;