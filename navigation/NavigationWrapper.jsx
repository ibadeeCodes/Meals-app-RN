import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./DrawerNavigator";

const NavigationWrapper = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default NavigationWrapper;
