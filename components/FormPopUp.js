import React, { useContext, useState } from 'react'
import DropDown from './DropDown'
import tw from 'twrnc';
import { Button, Text, View } from 'react-native';


function FormPopUp() {


  return (
    <View  style = {tw`bg-red-500 h-3/4`}>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center`}>Sex</Text>
        <View style = {tw`flex-row justify-center`}>
            <Button title = "Male"></Button>
            <Button title = "Female"></Button>
        </View>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center`}>Age</Text>

      <Button title = "Do Not Provide"></Button>

      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center`}>Event Description</Text>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center`}>Category</Text>
        <View style = {tw`flex-row justify-center`}>
            <Button title = "Violent"></Button>
            <Button title = "Non-Violent"></Button>
        </View>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center`}>Event</Text>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center`}>Additional Information</Text>
      <Button title = "Do Not Provide"></Button>

      <Button title = "Submit Report"></Button>
    </View>
  )
}

export default FormPopUp