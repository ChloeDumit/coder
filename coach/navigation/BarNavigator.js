import { Text, View } from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import ExcerciseDetailScreen from "../screens/ExcerciseDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RutineScreen from "../screens/RutineScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const BarNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={CategoriesScreen} />
        <Stack.Screen name="Rutine" component={RutineScreen} />
        <Stack.Screen name="Excercise" component={ExcerciseDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BarNavigator;
