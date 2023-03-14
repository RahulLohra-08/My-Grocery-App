import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const OpenCamera = () => {
  return (
    <View style={{flex: 1, }}>
        <TouchableOpacity
        onPress={''}
      >
        <Image 
              style={{width: 80, height: 80, marginTop: 30, alignSelf: 'center'}}
              source={require('../images/camera.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

export default OpenCamera

const styles = StyleSheet.create({})