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
  TouchableOpacityBase,
  LayoutAnimation,
  Animated,
} from "react-native";
import React, { useState } from "react";
import MapPin from "../../assets/map-pin.tsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import { GET_LOCANDBASICINFO } from "./actions/session_actions.js";
import * as Animatable from "react-native-animatable";
import styles from "./stylesheets/selectionStyles.js";

const AnimateTouchable = Animatable.createAnimatableComponent(TouchableOpacity);

const selectionPage = function ({ searchValue, checkOnPress, setSelected }) {
  const dispatch = useDispatch();
  const countyNames = require("../../data/geocodes.json");
  //POST api route test method
  var post_route = "http:/192.168.86.61:5000/getAllRows";
  var real_route = "https://braige-app.herokuapp.com/getAllRows";
  const post_search = function (url, search) {
    axios
      .post(url, { location: search })
      .then((response) =>
        dispatch({ type: GET_LOCANDBASICINFO, data: response.data })
      );
  };

  //Run each item in the data array thru regex test, and display only those who passed

  const renderData = function ({ item }) {
    return (
      <AnimateTouchable
        animation="zoomIn"
        duration={500}
        useNativeDriver
        onPress={() => {
          LayoutAnimation.configureNext(
            LayoutAnimation.create(
              170,
              LayoutAnimation.Types.keyboard,
              LayoutAnimation.Properties.opacity
            )
          );

          setSelected(item["CountyName"]);
          post_search(post_route, item["CountyName"]);
          checkOnPress(false);
        }}
        style={styles.row}
      >
        <View
          style={styles.pinIcon}
        >
          <MapPin />
        </View>
        <Text
          style={styles.resultText}
        >
          {item["CountyName"]}
        </Text>
      </AnimateTouchable>
    );
  };

  const filteredData = function (value) {
    if (!searchValue) {
      return [];
    }
    const regex = new RegExp(`^${value}`, "i");
    return countyNames.filter((item) => regex.test(item["CountyName"]));
  };

  return (
    <View style={styles.container}>
      {/*Display data here*/}
      <View style={styles.list}>
        {searchValue ? (
          <FlatList
            keyExtractor={(item) => item["CountyName"]}
            renderItem={renderData}
            data={filteredData(searchValue)}
          />
        ) : null}
      </View>
    </View>
  );
};

export default selectionPage;
