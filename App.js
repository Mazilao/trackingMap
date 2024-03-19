import React from 'react';

import ListScreen from './screens/ListScreen';
import MapScreen from './screens/MapScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="MapScreen" component={MapScreen} 
          options={{ 
            title: 'Mapa',
            headerStyle: {
              backgroundColor: '#3f68d1',
              borderBottomColor: '#fff',
              borderBottomWidth: 1
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 30
          }, }}/>

      <Stack.Screen name="ListScreen" component={ListScreen} 
          options={{ 
            title: 'Rastreamento',
            headerStyle: {
              backgroundColor: '#3f68d1',
              borderBottomColor: '#fff',
              borderBottomWidth: 1
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 30
          }, }}/>
 
     </Stack.Navigator>
</NavigationContainer>
);
}