import {Marker, Callout} from 'react-native-maps';
import React, {useMemo} from 'react';
import {Text, TouchableOpacity } from 'react-native';

const useMarker = function({point,text,title,getMarkerObject}) {
    return (
        <Marker 
        coordinate = {{latitude:point.latitude, longitude:point.longitude}}
        tracksViewChanges={false}
        onPress = {(event)=>getMarkerObject(event.nativeEvent)}    
        //Pass structural ID as identifier
        identifier = {title}                                  
    >
    </Marker>
    )
};

export default useMarker;