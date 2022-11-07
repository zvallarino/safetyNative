import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import MapView, { Marker, Polygon } from 'react-native-maps'
import { PROVIDER_GOOGLE } from 'react-native-maps'
import { MURRAY_HILL_COORDS,  KIPS_BAY_COORDS, EAST_VILLAGE_COORDS , LES_COORDS, FIDI_COORDS, TRIBECA_COORDS, WEST_VILLAGE_COORDS, CHELSEA_COORDS, HUDSON_YARDS_COORDS, SOHO_COORDS, MIDTOWN_COORDS} from '../components/Coordinates'
import Fetch from '../components/Fetch'

const MapScreen = ({navigation}) => {

  const polygons = [MURRAY_HILL_COORDS,  KIPS_BAY_COORDS, EAST_VILLAGE_COORDS , LES_COORDS, FIDI_COORDS, TRIBECA_COORDS, WEST_VILLAGE_COORDS, CHELSEA_COORDS, HUDSON_YARDS_COORDS, SOHO_COORDS, MIDTOWN_COORDS]

  const polygonMap = (obj) => {
    return obj.map((area,index) => <Polygon key = {index} coordinates = {area} />)
  }
  const exampleCoordinates = {
    latitude: 40.7437312,
    longitude: -73.97376,
  }

  const examplePolygon = 
   [{ latitude: 40.743355, longitude: -73.984098 },
    { latitude: 40.735324, longitude: -73.989808 },
    { latitude: 40.727812, longitude: -73.971785 },
    { latitude: 40.739454, longitude: -73.973028 },
  ]

  return (
    <Fetch />
    // <View>
    //   <MapView 
    //   style={styles.map} 
    //   provider = {PROVIDER_GOOGLE}
    //   initialRegion={{
    //     latitude: 40.7437312,
    //     longitude: -73.97376,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421,
    //   }}
    //   >
    //    <Marker 
    //    coordinate = {exampleCoordinates}

    //    />
    //     {polygonMap(polygons)}
    //     </MapView>
    //   <Button
    //     onPress={() => navigation.navigate('Event Form')}
    //     title="Open Modal"
    //   />
    // </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});