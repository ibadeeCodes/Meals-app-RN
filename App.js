import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { combineReducers, createStore } from "redux"
import { Provider } from "react-redux"

import MealsNavigator from "./navigation/MealsNavigator"
import MealsFavTabNavigator from "./navigation/TabNavigator"
import NavigationWrapper from "./navigation/NavigationWrapper"
import mealsReducer from "./store/reducers/mealsReducer"

const rootReducer = combineReducers({
  meals: mealsReducer,
})

const store = createStore(rootReducer)

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  const loadFontAsync = () => {
    return Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    })
  }

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFontAsync}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log("error")}
      />
    )
  }

  return (
    <Provider store={store}>
      <NavigationWrapper />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
