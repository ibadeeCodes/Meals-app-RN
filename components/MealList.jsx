import React from "react"
import { View, FlatList, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import MealItems from "./MealItems"

const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals)

  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.some(
      (meal) => meal.id === itemData.item.id
    )
    return (
      <MealItems
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate("Recipe", {
            title: itemData.item.title,
            meal: itemData.item,
            isFav: isFavorite,
          })
        }}
      />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
})

export default MealList
