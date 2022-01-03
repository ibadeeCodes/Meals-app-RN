import React, { useState, useEffect, useCallback } from "react"
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Platform,
  ImageBackground,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { toggleFavorite } from "../store/actions/mealsAction"

const RecipeScreen = ({ navigation, route }) => {
  const meal = route.params.meal
  const mealId = meal.id

  const dispatch = useDispatch()

  const isFav = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  )

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler })
    navigation.setParams({ isFav })
  }, [toggleFavoriteHandler, isFav])

  return (
    <View style={styles.container}>
      <View style={{ height: 200 }}>
        <ImageBackground
          source={{ uri: meal.imageUrl }}
          style={styles.imageStyles}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{meal.title}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.details}>
        <Text>Duration: {meal.duration}m</Text>
        <Text>Affordability: {meal.affordability}</Text>
        <Text>Complexity: {meal.complexity}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  imageStyles: {
    flex: 1,
    height: 200,
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0,0.6)",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    padding: 10,
    fontSize: 18,
    textTransform: "capitalize",
  },
  details: {
    padding: 20,
    height: 200,
  },
})

export default RecipeScreen
