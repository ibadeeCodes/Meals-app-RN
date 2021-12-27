// In App.js in a new project
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FavouriteRecipesScreen from "../screens/FavouriteRecipesScreen";
import ProfileScreen from "../screens/ProfileScreens";
import MealsNavigator from "./MealsNavigator";

const Tab = createBottomTabNavigator();

const MealsFavTabNavigator = () => {
  return (

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Meals") {
              iconName = focused ? "fast-food" : "fast-food-outline";
            } else if (route.name === "Favourites") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={23} color={"#d70f64"} />;
          },
          tabBarActiveTintColor: "#d70f64",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Meals"
          component={MealsNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Favourites" component={FavouriteRecipesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

  );
};

export default MealsFavTabNavigator;
