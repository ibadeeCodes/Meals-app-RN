// In App.js in a new project
import * as React from "react"
import { View, Text, Button, TouchableOpacity } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import FavouriteRecipesScrren from "../screens/FavouriteRecipesScreen"
import FilterScreen from "../screens/FilterScreen"
import RecipeScreen from "../screens/RecipeScreen"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#d70f64",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="Favourites" component={FavouriteRecipesScrren} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => (
            <TouchableOpacity onPress={route.params.toggleFav}>
              <Ionicons
                name={route.params.isFav ? "heart" : "heart-outline"}
                size={23}
                color={"#d70f64"}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export default MealsNavigator
