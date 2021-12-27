import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsFavTabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreens';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={MealsFavTabNavigator} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
   
  );
}