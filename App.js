import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home } from './components/homepage/Home';
import { Klanten } from './components/klantenpage/Klanten';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator   
      screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#A61008',
    }}
    >
      <Tab.Screen name="Products" component={Home} 
        options={{ 
          tabBarLabel: 'Producten', tabBarIcon: ({ color }) => ( 
          <MaterialCommunityIcons name="package-variant" color={color} size={26} /> 
          ), 
          }} 
      />
      
      <Tab.Screen name="Klanten" component={Klanten} 
        options={{ 
          tabBarLabel: 'Klanten', tabBarIcon: ({ color }) => ( 
          <MaterialCommunityIcons name="account-multiple" color={color} size={26} /> 
          ), 
          }} 
      />
      </Tab.Navigator>
  </NavigationContainer>
);
}

