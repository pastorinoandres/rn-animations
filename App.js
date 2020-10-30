import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Module1 from './screens/Module1';
import Module2 from './screens/Module2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Module1" component={Module1} />
        <Stack.Screen name="Module2" component={Module2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
