import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import EditScreen from '../screens/EditScreen';
import AlertScreen from '../screens/AlertScreen';
import MapScreen from '../screens/MapScreen';


const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator>
        <Tab.Screen name = "Map" component = {MapScreen}/>
        <Tab.Screen name = "Edit" component = {EditScreen}/>
        <Tab.Screen name = "Alert" component = {AlertScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigator