import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'; // You need NavigationContainer
import Menu from './Menu';
import Contact from './Contact';
import Top from './Top';

const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue', // Customize active tab color
        tabBarInactiveTintColor: 'gray', // Customize inactive tab color
        tabBarLabelStyle: {fontSize: 12}, // Customize label size
      }}>
      <Tab.Screen name="Home" component={Top} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}

