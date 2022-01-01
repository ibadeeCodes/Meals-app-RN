import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsFavTabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/ProfileScreens";
import FilterScreen from "../screens/FilterScreen";
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={MealsFavTabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        // options={{ headerShown: false }}
      />
      <Drawer.Screen name="filters" component={FilterScreen} />
    </Drawer.Navigator>
  );
}
