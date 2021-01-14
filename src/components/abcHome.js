import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NewBridge from "../../assets/newSheet.tsx";
import styles from "./stylesheets/abcHomeStyles.js";

const abcHome = function () {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={styles.titleContainer}
      >
        <Text
          style={styles.headerTitle}
        >
          ABC Score Sheet
        </Text>
      </View>
      <TouchableOpacity
        style={styles.createNew}
        onPress={() => navigation.navigate("scoresheet")}
      >
        <View style={styles.newBridgeContainer}>
          <NewBridge />
        </View>
        <View style={styles.createContainer}>
          <Text style={styles.createText}>Create</Text>
          <Text style={styles.createDescription}>
            An ABC score sheet for a new bridge project
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.bottomPart}>
        <View style={styles.subHeaderTitleContainer}>
          <Text
            style={styles.subHeaderTitle}
          >
            Saved Scoresheets
          </Text>
        </View>
        <View
          style={styles.listContainer}
        >
          <Text style={styles.projectName}>
            Project Name
          </Text>
          <Text style={styles.date}>Date</Text>
        </View>
        <View style={{ width: "100%" }}>
          <TouchableOpacity style={styles.previewBox}>
            <View
              style={styles.blueRibbon}
            ></View>
            <Text
              style={styles.savedProjectText}
            >
              02 - 1H590 Portugeese Creek Bridge and Cade Creek Bridge
            </Text>
            <Text
              style={styles.savedProjectDate}
            >
              1/10/2021
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default abcHome;
