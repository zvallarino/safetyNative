import { StyleSheet, Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import tw from 'twrnc';
import React from 'react'

const DropDown = ({
  open,value,items,setOpen,setValue,setItems, focusText
}) => {
  return (
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  )
}

export default DropDown

