import React, { useEffect, useState, useRef } from "react";
import {
  TouchableOpacity,
  Dimensions,
  TextInput,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GET_PREDICTION } from "./actions/session_actions.js";
import styles from "./stylesheets/predictionStyles.js";

const fields = [
  { desc: "Number of Spans in Main Unit (45)", ph: "Example: 7" },
  { desc: "Lanes on the Structure (28A)", ph: "Example: 4" },
  { desc: "Lanes under the Structure (28B)", ph: "Example: 0" },
  { desc: "Average Daily Traffic (29)", ph: "Example: 770" },
  { desc: "Scour Critical Bridges Code ( 113)", ph: "Example: 0 or 1 only" },
  { desc: "Length of Maximum Span, ft (48)", ph: "Example: 50" },
  { desc: "Inspection Frequencym, months (91)", ph: "Example: 12 or 24 only" },
];

const prediction = function () {
  const dispatch = useDispatch();
  //const test = useSelector(state=>state.session.markerObject);

  const mapFields = fields.map((field, index) => (
    <View key={index} style={styles.inputContainer}>
      <Text style={styles.inputDescription}>{field.desc}</Text>
      <TextInput
        placeholder={field.ph}
        style={styles.inputText}
      />
    </View>
  ));

  return (
    <View style={styles.container}>
      <View
        style={styles.container2}
      >
        <Text
          style={styles.headerTitle}
        >
          Bridge Type Predictor
        </Text>
        <Text style={styles.headerDescription}>
          This will be a description of what the bridge type predictor will do
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {mapFields}
        <TouchableOpacity
          onPress={() => dispatch({ type: GET_PREDICTION, payload: "form" })}
          style={styles.predictButton}
        >
          <Text style={styles.predictButtonText}>Make Prediction</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};


export default prediction;
