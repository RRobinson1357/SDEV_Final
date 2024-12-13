import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Home from "./Home";
import Cocktails from "./Cocktails";
import Favorites from "./Favorites";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Cocktails">
            {() => <Cocktails favorites={favorites} setFavorites={setFavorites} />}
          </Tab.Screen>
          <Tab.Screen name="Favorites">
            {() => <Favorites favorites={favorites} />}
          </Tab.Screen>
        </Tab.Navigator>
      )}

      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Cocktails">
            {() => <Cocktails favorites={favorites} setFavorites={setFavorites} />}
          </Drawer.Screen>
          <Drawer.Screen name="Favorites">
            {() => <Favorites favorites={favorites} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
