import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Home from "./Home";
import Cocktails from "./Cocktails";
import Favorites from "./Favorites"

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Cocktails" component={Cocktails} />
          <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
      )}

      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Cocktails" component={Cocktails} />
          <Drawer.Screen name="Favorites" component={Favorites} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

