import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View,Image, TouchableOpacity } from 'react-native';
import { Productlist } from '../homepage/productList/Productlist';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Product } from '../productpage/Product';

const productenStack = createNativeStackNavigator();

export const Home = () => {
    return (
    <productenStack.Navigator initialRouteName="Producten">
      <productenStack.Screen
        name="Producten"
        component={Productlist}
        options={{
          title: 'Producten',
          headerStyle: {
            backgroundColor: '#A61008',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <productenStack.Screen 
      name="Product" 
      component={Product} 
      options={{
          title: '',
          headerStyle: {
            backgroundColor: '#A61008',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </productenStack.Navigator>
    );
}