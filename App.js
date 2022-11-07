import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import * as React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import { db } from './config';
import { collection, getDocs } from 'firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import MapScreen from './screens/MapScreen';
import RootNavigator from './navigator/RootNavigator';



export default function App() {

  // const markersRef = collection(db,"markers")
  // const allMarkers = getDocs(markersRef)
  // const allMarkersData = allMarkers.docs.map(doc => doc.data())

  React.useEffect(()=>{console.log("You can do this")},[])

  return (
   <NavigationContainer>
      <SafeAreaView style={tw`h-full flex-row justify-center bg-green-400 text-center`}>
        <RootNavigator />
      </SafeAreaView>
   </NavigationContainer>
  );
}

