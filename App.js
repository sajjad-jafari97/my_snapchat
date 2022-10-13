import * as React from 'react';
import { NavigationContainer, createNativeStackNavigator } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import { ScreenInscription } from './screens/Inscription.js';
import { ScreenConnexion } from './screens/Connexion.js';
import { ScreenUser } from './screens/User.js';
import { ScreenHome } from './screens/Home.js';

const Stack = createStackNavigator(); // Stack contains Screen & Navigator properties

export default function App() {
  return (
    
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home' >

        <Stack.Screen name="Inscription" component={ScreenInscription} />
        <Stack.Screen name="Home" component={ScreenHome} />
        <Stack.Screen name="Connexion" component={ScreenConnexion} />
        <Stack.Screen name="User" component={ScreenUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

