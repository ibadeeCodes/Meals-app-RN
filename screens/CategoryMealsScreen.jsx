import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Platform,
  Button,
  FlatList,
} from 'react-native'
import MealItems from '../components/MealItems'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealsScreen = ({ navigation, route }) => {
  const { catId } = route.params

  const category = CATEGORIES.find((cat) => cat.id == catId)

  // Fetch meals of this category.
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  )

  useEffect(() => {
    navigation.setOptions({
      title: `${category.title}`,
    })
  }, [navigation])

  const renderMealItem = ({ item }) => {
    return (
      <MealItems
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onSelectMeal={() => {
          navigation.navigate('Recipe', {
            meal: item,
            title: item.title
          })
        }}
      />
    )
  }

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item, index) => item.id}
      renderItem={renderMealItem}
    />
  )
}

const styles = StyleSheet.create({})

export default CategoryMealsScreen
