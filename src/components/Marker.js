import {Marker, Callout} from 'react-native-maps';
import React, {useMemo} from 'react';
import {Text, TouchableOpacity } from 'react-native';

const useMarker = function({point, goToDetailed}) {
    const title = "Bridge";
    const code = "County Code: " + point['County Code'];
    const name = point['county_names'];
    const material = "Structural Material: " + point['Str Material'];
    const design = "Structural Design: " + point['Str Design'];
    const text = name + "\n" + code   + "\n" + material + "\n"+ design;
    return (
        <Marker 
        coordinate = {{latitude:point.latitude, longitude:point.longitude}}
       
        tracksViewChanges={false}                                      
    >
        <Callout>
            <Text style = {{fontSize:16, fontWeight: 'bold'}}>{title}</Text>
            <Text>{text}{'\n'}</Text>
            {/*Link to detailed page*/}
            <TouchableOpacity onPress = {()=>goToDetailed(true)}>
                <Text style = {{color:'blue'}}>See more details</Text>
            </TouchableOpacity>
        </Callout>
    </Marker>

    )
};

export default useMarker;