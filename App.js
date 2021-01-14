import React from "react";
import {
  Text,
  Image,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import configStore from "./src/components/store/store.js";
import Home from "./src/components/home.js";
import SavedBridges from "./src/components/savedBridges.js";
import Prediction from "./src/components/prediction.js";
import ABCStack from "./src/components/formStack.js";
import SearchIcon from "./assets/search.tsx";
import HeartIcon from "./assets/heart.tsx";
import Dots from "./assets/prediction.tsx";
import Clipboard from "./assets/clipboard.tsx";
import { Logs } from "expo";
import styles from "./src/components/stylesheets/appStyles.js";


Logs.enableExpoCliLogging();

const Drawer = createDrawerNavigator();
const store = configStore();

const DrawerContent = function (props) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        resizeMode="contain"
        style={styles.drawerLogo}
        source={require("./assets/logo-small.png")}
      />
      <DrawerItemList {...props}>
        {/*use this to add additonal routes*/}
      </DrawerItemList>
    </DrawerContentScrollView>
  );
};

export default function App() {
  return (
    //Navigation Screens
    <NavigationContainer>
      <Provider store={store}>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
          initialRouteName="Splash"
        >
          {/*<Drawer.Screen options = {{drawerLabel: ()=>null, drawerIcon:()=>null}} name = 'Splash' component = {Splash}/>*/}

          <Drawer.Screen
            options={{
              drawerIcon: () => <SearchIcon />,
              drawerLabel: () => (
                <Text style={styles.drawerLabel}>Search</Text>
              ),
            }}
            name="Home"
            component={Home}
          />

          <Drawer.Screen
            options={{
              headerStyle: styles.headerStyle,
              headerTitle: null,
              headerShown: true,
              drawerIcon: () => <HeartIcon />,
              drawerLabel: () => (
                <Text style={styles.drawerLabel}>Saved</Text>
              ),
            }}
            name="Saved"
            component={SavedBridges}
          />

          <Drawer.Screen
            options={{
              headerLeft: () => null,
              headerStyle: {
                shadowOffset: { height: 0 },
                height: "6%",
                paddingTop: 10,
              },
              headerTitle: null,
              headerShown: true,
              drawerIcon: () => <Clipboard />,
              drawerLabel: () => (
                <Text style={styles.drawerLabel}>
                  ABC Score Sheet
                </Text>
              ),
            }}
            name="ABCStack"
            component={ABCStack}
          />

          <Drawer.Screen
            options={{
              headerStyle: styles.headerStyle,
              headerShown: true,
              headerTitle: null,
              drawerIcon: () => <Dots />,
              drawerLabel: () => (
                <Text style={styles.drawerLabel}>
                  Prediction
                </Text>
              ),
            }}
            name="Prediction"
            component={Prediction}
          />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

