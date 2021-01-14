import { Marker, Callout } from "react-native-maps";
import React, { useState } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  LayoutAnimation,
} from "react-native";
import styles from "./stylesheets/markerStyles.js";

const useMarker = function ({
  point,
  text,
  title,
  getMarkerObject,
  getPreview,
}) {
  //var post_route = "http://192.168.86.61:5000/getPreview";
  //var [postData,setData] = useState(null);
  //const post_search = function(url,search) {
  //    const requestOptions = {
  //      method: 'POST',
  //        headers: { 'Content-Type': 'application/json' },
  //        body: JSON.stringify({'latitude': search})
  //    }
  const [tapped, setCurrentMarker] = useState(false);

  return (
    <Marker
      coordinate={{ latitude: point.latitude, longitude: point.longitude }}
      tracksViewChanges={false}
      onPress={(event) => {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(
            170,
            LayoutAnimation.Types.linear,
            LayoutAnimation.Properties.opacity
          )
        );
        getMarkerObject({
          latitude: event.nativeEvent.coordinate.latitude,
          kind: point["structure_kind_43a"],
          type: point["structure_type_43b"],
          id: point["structure_number_008"],
        });
      }}
      //Pass structural ID as identifier
      identifier={title}
      key={point.latitude}
      pinColor={point["marker_color"]}
      style={{ height: 20, width: 20 }}
      title={"#" + point["structure_number_008"]}
    >
      {/*<Svg height = {20} width = {20} name = {"CC"} color = {point['marker_color']}/>*/}
      {/*<Image fadeDuration = {0}  style = {{height: 20, width: 20}} source = {require('../../assets/testIcon.png')}/>*/}

      {/*<View style = {{height:25,width:25, backgroundColor:point['marker_color'], borderRadius: '100%', borderWidth:1, borderColor: 'white'}}>
            <Text style = {{color: 'white', fontSize:15}}>Al</Text>
        </View>*/}
    </Marker>
  );
};

export default useMarker;
