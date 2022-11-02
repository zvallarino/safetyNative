import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import tw from 'twrnc';

const TextBox = ({setTextFocus, focusText}) => {

  const textInput = useRef("")
  const [currentBlock, setCurrentBlock] = useState("")
  const [tabType, setTabType] = useState("")
  const currentStyle = useRef("")

  useEffect(() => {
    console.log('created')
  }, [])
  
  return (
		    <TextInput
              ref={textInput}
              style={tw`h-1/6 ${focusText && 'h-1/2'} bg-green-400`}
              onFocus={() => {
                setTextFocus(true)
                setTabType("enterText");
              }}
              onChange={(v) => {
                textInput.current.setNativeProps({ text: v.nativeEvent.text });
              }}
              onBlur={(e) => {
                setTextFocus(false)
              }}
              multiline={true}
            />
  );
}

export default TextBox;

{/* <TextInput
ref={textInput}
style={tw`h-1/2 bg-green-400`}
onFocus={() => {
  setTextFocus(true)
  setTabType("enterText");
  textInput.current.setNativeProps({ text: currentStyle.current.value });
}}
onChange={(v) => {
  textInput.current.setNativeProps({ text: v.nativeEvent.text });
  currentStyle.current.value = v.nativeEvent.text;
}}
onBlur={(e) => {
  currentStyle.current.value = e.nativeEvent.text;
  textInput.current.setNativeProps({ text: e.nativeEvent.text });
  setCurrentBlock((old) => ({ ...old, value: e.nativeEvent.text }));
}}
multiline={true}
/> */}