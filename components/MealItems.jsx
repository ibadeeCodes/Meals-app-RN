import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from "react-native"

const MealItems = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onSelectMeal}
      activeOpacity={0.8}
    >
      <ImageBackground source={{ uri: props.image }} style={styles.imageStyles}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.details}>
        <Text>Duration: {props.duration}m</Text>
        <Text>Affordability: {props.affordability}</Text>
        <Text>Complexity: {props.complexity}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    // height: 200,
  },
})

export default MealItems
