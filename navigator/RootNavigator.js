import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomePage from '../screens/HomePage';
import ModalScreen from '../screens/ModalScreen';
import TabNavigator from './TabNavigator';

const RootStack = createNativeStackNavigator();

function RootNavigator() {

  return (
    <RootStack.Navigator>
        <RootStack.Group>
            <RootStack.Screen name="Main" component={HomePage}/>
            <RootStack.Screen name="Tab" component={TabNavigator}/>
        </RootStack.Group>

        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
            <RootStack.Screen name="Event Form" component={ModalScreen} />
        </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator