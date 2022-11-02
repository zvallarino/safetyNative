import React, { useContext, useState } from 'react'
import DropDown from './DropDown'
import tw from 'twrnc';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import TextBox from './TextBox';


function FormPopUp() {

  

  const [openTime, setOpenTime] = useState(false);
  const [valueTime, setValueTime] = useState(null);
  const [focusText, setTextFocus] = useState(false)
  const [time, setTimes] = useState([
    {label: '-18', value: '-18'},
    {label: '19-25', value: '19-25'},
    {label: '25-40', value: '25-40'},
    {label: '41-65', value: '41-65'},
    {label: '65+', value: '65+'},
  ]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [events, setEvents] = useState([
    {label: 'Stalking', value: 'stalking'},
    {label: 'Assault', value: 'assault'},
    {label: 'Feels Unsafe', value: 'unsafe'},
    {label: 'Homeless', value: 'homeless'},
    {label: 'Cat Calling', value: 'cats'},
    {label: 'Drug Use', value: 'drugs'},
    {label: 'Other', value: 'other'},
  ]);




  return (
    <ScrollView  style = {tw`bg-red-400 h-full`}>


<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }}
/>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center text-xl bg-gray-300 font-bold`}>Personal Information</Text>
      <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }}
/>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center text-lg ${focusText && "hidden"}`}>Sex</Text>
      <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, }}/>

        <View style = {tw`flex-row justify-center ${focusText && "hidden"}`}>
            <Button 
            onPress={(e)=>setTextFocus(false)}
            title = "Male"></Button>
            <Button title = "Female"></Button>
        </View>

      <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, }}/>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center text-lg mb-1  ${focusText && "hidden"}`}>Age</Text>

        <DropDown 
            focusText = {focusText}
            open={openTime}
            value={valueTime}
            items={time}
            setOpen={setOpenTime}
            setValue={setValueTime}
            setItems={setTimes}
          />
 

      <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, }}/>

    <View style = {tw`${focusText && "hidden"}`}>
        <Button 
        title = "Do Not Provide"></Button>
    </View>

      <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, }}/>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center text-xl font-bold bg-gray-300 ${focusText && "hidden"}`}>Event Description</Text>
      <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, }}/>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center text-lg ${focusText && "hidden"}`}>Category</Text>
      <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, }}/>
        <View style = {tw`flex-row justify-center ${focusText && "hidden"}`}>
            <Button title = "Violent"></Button>
            <Button title = "Non-Violent"></Button>
        </View>
     <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, }}/>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center text-lg mb-1 ${focusText && "hidden"}`}>Event</Text>
     
          <DropDown
            focusText = {focusText}
            open={open}
            value={value}
            items={events}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setEvents}
          />
   
      <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, }}/>
      <Text style = {tw`text-black border-y-2 bg-gray-100 text-center text-lg `}>Additional Information</Text>
     <TextBox 
     focusText = {focusText}
     setTextFocus = {setTextFocus} 
     />
      
      <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, }}/>
      <Button title = "Do Not Provide"></Button>

      <Button title = "Submit Report"></Button>
    </ScrollView>
  )
}

export default FormPopUp