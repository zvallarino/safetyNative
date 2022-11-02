import { View, Text, Button } from 'react-native'
import React from 'react'

const MapScreen = ({navigation}) => {
  return (
    <View>
      <Text>MapScreen</Text>
      <Button
        onPress={() => navigation.navigate('Event Form')}
        title="Open Modal"
      />
    </View>
  )
}

export default MapScreen