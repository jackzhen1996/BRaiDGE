import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Dimensions,
  FlatList,
  Input,
  Button,
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Heart from "../../assets/heart.tsx";
import EmptyHeart from "../../assets/EmptyHeart.tsx";
import axios from "axios";
import { GET_FULLPAGE } from "./actions/session_actions.js";
import { useDispatch } from "react-redux";
import * as Animatable from "react-native-animatable";
import styles from "./stylesheets/previewStyles.js";

const previewContainer = function ({
  identifier,
  goToDetailed,
  savePage,
  isLiked,
}) {
  const dispatch = useDispatch();
  var changeStyle = null;

  const [heart, showHeart] = useState(false);
  savePage
    ? (changeStyle = styles.changeStyle)
    : null;

  const kind = identifier.kind;
  const type = identifier.type;
  const structID = identifier.id;

  var post_route = "http://192.168.86.61:5000/getOneRow";
  var real_route = "https://braige-app.herokuapp.com/getOneRow";
  const post_search = function (url, identifier) {
    //const requestOptions = {
    //  method: 'POST',
    //    headers: { 'Content-Type': 'application/json' },
    //    body: JSON.stringify({'latitude': identifier})
    //}
    axios
      .post(url, { latitude: identifier })
      //response is in json string or Python object string
      .then((response) =>
        dispatch({ type: GET_FULLPAGE, data: response.data })
      );
    //.then(data => {
    //    console.log(data);
    //});
  };

  const id = identifier ? identifier.latitude : 0;
  return (
    //On press with lead to the detailed page
    <TouchableOpacity
      onPress={() => {
        goToDetailed(true);
        post_search(post_route, id);
      }}
      style={[styles.previewContainer, changeStyle]}
    >
      <View style={styles.left}>
        {/*icon goes here*/}
        {/*<Image></Image>*/}
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={require("../../assets/bridge_placeholder.png")}
          />
        </View>
        <View
          style={styles.textContainer}
        >
          <Text
            selectable={true}
            adjustsFontSizeToFit={true}
            style={styles.text}
          >
            #{structID}
          </Text>
        </View>
      </View>
      <View style={styles.text}>
        {/*<View style = {{flex:1,flexDirection:'row', width: '100%',justifyContent:'flex-end'}}><HeartIcon/></View>*/}
        <View style={styles.textContainer}>
          {heart ? (
            <TouchableOpacity onPress={() => showHeart(false)}>
              <Heart />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => showHeart(true)}>
              <EmptyHeart />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.header}>Kind</Text>
        <Text duration={100} style={styles.data}>
          {kind}
        </Text>
        <Text style={styles.header}>Type</Text>
        <Text style={styles.data}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default previewContainer;
