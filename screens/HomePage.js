import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import React, { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../config';

const HomePage = ({navigation}) => {

  useEffect(()=>{console.log(allMarkers)},[allMarkers])


const querySnapshot = getDocs(collection(db, "markers"));
const allMarkers = querySnapshot?.docs.map(doc => doc.data())


  return (
   <>
        <TouchableOpacity 
        onPress={() =>
            navigation.navigate('Tab')
              }
        style = {tw`bg-green-500 w-1/2`}>
          <Text>HomePage</Text>
        </TouchableOpacity>
         <TouchableOpacity style = {tw`bg-red-500 w-1/2`}>
         <Text>HomePage</Text>
       </TouchableOpacity>
   </>
  )
}

export default HomePage