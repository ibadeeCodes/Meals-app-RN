import React, { useState, useEffect, useCallback } from "react"
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Platform,
  Button,
  FlatList,
} from "react-native"
import { useSelector } from "react-redux"
import MealItems from "../components/MealItems"
import MealList from "../components/MealList"

const FavouriteRecipesScreen = ({ navigation }) => {
  const favRecipes = useSelector((state) => state.meals.favoriteMeals)

  // const renderMealItem = ({ item }) => {
  //   return (
  //     <MealItems
  //       title={item.title}
  //       imageUrl={item.imageUrl}
  //       duration={item.duration}
  //       complexity={item.complexity}
  //       affordability={item.affordability}
  //       onSelectMeal={() => {
  //         navigation.navigate("Recipe", {
  //           meal: item,
  //           title: item.title,
  //         })
  //       }}
  //     />
  //   )
  // }

  // return (
  //   <FlatList
  //     data={favRecipes}
  //     keyExtractor={(item, index) => item.id}
  //     renderItem={renderMealItem}
  //   />
  // )

  return <MealList listData={favRecipes} navigation={navigation} />
}

const styles = StyleSheet.create({})

export default FavouriteRecipesScreen
