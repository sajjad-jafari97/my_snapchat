import * as React from 'react';
import { NavigationContainer, createNativeStackNavigator } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import { Screen1 } from './screens/Screen1.js'

console.log(createStackNavigator)
const Stack = createStackNavigator(); // Stack contains Screen & Navigator properties

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen1} />
        <Stack.Screen name="Profile" component={Screen1} />
      </Stack.Navigator>
      <Text>Test text</Text>
      <Screen1></Screen1>
    </NavigationContainer>
  );
}