import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormPopUp from '../components/FormPopUp'

const ModalScreen = ({navigation}) => {
  return (
    <View>
      <FormPopUp />
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  )
}

export default ModalScreen

