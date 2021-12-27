import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Platform,
  ImageBackground,
} from 'react-native'

const RecipeScreen = ({ route }) => {
  const meal = route.params.meal

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
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0,0.6)',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
    textTransform: 'capitalize',
  },
  details: {
    padding: 20,
    height: 200,
  },
})

export default RecipeScreen
