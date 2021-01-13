import {Text, View, ScrollView } from "react-native";
import React from "react";
import Preview from "./previewContainer.js";
import styles from "./stylesheets/savedStyles.js";

const savedBridges = function () {
  const inSavedPage = true;

  //For future use
  const renderItem = function ({ item }) {
    return <Preview savedPage={item.savePage} identifier={item.identifier} />;
  };
  return (
    <View style={styles.container}>
      <View
        style={styles.container2}
      >
        <Text
          style={styles.headerTitle}
        >
          Saved Structures
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scroll}
      >
        <Preview
          savePage={inSavedPage}
          identifier={{ id: "123", kind: "123", type: "123" }}
        />
        <Preview
          savePage={inSavedPage}
          identifier={{ id: "123", kind: "123", type: "123" }}
        />
      </ScrollView>
    </View>
  );
};

export default savedBridges;
