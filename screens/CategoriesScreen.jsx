import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Platform,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {
  const renderGridItems = (itemData) => {
    return (
      <View style={styles.categoryItem}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() =>
            navigation.navigate('CategoryMeals', {
              catId: itemData.item.id,
            })
          }
        >
          <View
          // style={{ ...styles.container, ...{ backgroundColor: props.color } }}
          >
            <Text style={styles.title} numberOfLines={2}>
              {itemData.item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItems}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  categoryItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 3,
    backgroundColor: '#d70f64',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    color: '#fff',
    padding: 10,
  },
})

export default CategoriesScreen
