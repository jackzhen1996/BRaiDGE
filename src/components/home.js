import React, { useEffect, useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MapView from "./MapView.js";
import DropDown from "./dropDownSearch.js";
import styles from "./stylesheets/homeStyles.js";

const home = function () {
  const [selectionView, switchView] = useState(false);
  const [searchValue, setValue] = useState(null);
  const [selectedValue, setSelected] = useState(null);

  const passToSelectionPage = {
    checkOnPress: switchView,
    searchValue: searchValue,
    selectionView: selectionView,
    setSelected: setSelected,
  };

  return (
    <View style={styles.container}>
      <MapView passToSelectionPage={passToSelectionPage} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <DropDown
          selected={selectedValue}
          searchingFor={setValue}
          checkOnPress={switchView}
          isFocused={selectionView}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default home;
