import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import React from 'react'

const HomePage = ({navigation}) => {
  console.log(navigation)
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