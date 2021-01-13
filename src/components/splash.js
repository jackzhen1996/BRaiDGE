import React, { useEffect } from "react";
import {
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./stylesheets/splashStyles.js";

const Splash = function () {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate("Home"), 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/logo.png")}
      />
    </View>
  );
};


export default Splash;
