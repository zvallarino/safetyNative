import React, { useContext, useEffect, useRef, useState } from 'react'
import DropDown from './DropDown'
import tw from 'twrnc';
import { Button, Keyboard, Pressable, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { StyleSheet } from 'react-native';
import TextBox from './TextBox';
import CustomButton from './CustomButton';
import ButtonZ from './CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';


function FormPopUp() {

  useEffect(()=>console.log("Wow Looks Great! I cant believe you built this by yourself"))

  const [openTime, setOpenTime] = useState(false);
  const [valueTime, setValueTime] = useState(null);
  const [focusText, setTextFocus] = useState(false);
  const textInput = useRef("")
  const [buttonState, setButtonState] =useState(false)
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


  const handlePress = () => {
    setButtonState(!false)
    console.log(textInput.current)
  }


  return (
    <View 
    style = {tw`bg-white h-full`}>


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

       <View style = {tw`flex-row justify-evenly`}>
          <Pressable 
          style={tw`
          border-2 border-gray-500 font-medium text-xs leading-tight uppercase rounded bg-gray-300 ${buttonState && "bg-blue-400"} h-10 w-30 items-center justify-center`} onPress={(e)=>Keyboard.dismiss()}>
            <Text style = {tw`text-xl `}>Male</Text>
          </Pressable>
  
          <Pressable style={tw`
          border-2 border-gray-500 font-medium text-xs leading-tight uppercase rounded bg-gray-300 ${buttonState && "bg-blue-400"} h-10 w-30 items-center justify-center`} onPress={()=>setTextFocus(false)}>
            <Text style = {tw`text-xl `}>Female</Text>
          </Pressable>

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
     textInput = {textInput}
     setTextFocus = {setTextFocus} 
     />
      
      <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, }}/>
      <Button title = "Do Not Provide"></Button>

      <Button title = "Submit Report"></Button>
    </View>
  )
}

export default FormPopUp