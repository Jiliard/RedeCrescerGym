import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  

import HomeScreen from './Home'
import FeedScreen from './Feed'
import ClassScreen from './Class'
import UnitsScreen from './Units'
import UnitDetailsScreen from './UnitDetails'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Feed" component={FeedScreen} />
    <Stack.Screen name="Class" component={ClassScreen} />
    <Stack.Screen name="Units" component={UnitsScreen} />
    <Stack.Screen name="UnitDetails" component={UnitDetailsScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}