import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


const CommonButton = ({onPress, title, bgColor, textColor, disabled}) => {
  return (
    <TouchableOpacity 
        disabled={disabled}
        style={[styles.btnStyle, {backgroundColor: bgColor}]}
        title={title}
        onPress={()=>{
            onPress();
        }}
    >
      <Text style={{color: textColor}}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    btnStyle:{
        width: '85%',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 8,
        alignSelf: 'center',
        height: 50,
    },
})

export default CommonButton
