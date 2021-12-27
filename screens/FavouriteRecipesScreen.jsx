import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform , Button} from "react-native";

const FavouriteRecipesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Favourite Recipes</Text>
      <Button
        title="Meals"
        onPress={() => {
          navigation.navigate("Meals", {
            screen: "Categories",
          });
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FavouriteRecipesScreen;
