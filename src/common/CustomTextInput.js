import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({value, onChangeText, placeholder, icon, type, keyboardType, }) => {
  return (
    <View style={[styles.inputContainer, {marginLeft: 10}]}>
            <Image  style={{height: 24, width: 24, marginRight: 10,}}
                source={icon}  
             />
         <TextInput style={{width: '100%', height: 24}}
            value={value}
            onChangeText={(txt)=>{
              onChangeText(txt)
            }}
            placeholder={placeholder}
            secureTextEntry={type ? true : false}
            keyboardType={keyboardType ? keyboardType : 'default'}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    inputContainer: {
        width: '85%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20, 
        fontSize: 18,
        padding: 8,
    },
    // inputStyle: {
    //     alignSelf: 'center', 
    //     height: 50,
    //     // marginTop: 30,
    //     // borderWidth: 0.5,
    //     borderWidth: 'none',
    //     paddingLeft: 10,
    //     width: '85%', 
    //     marginBottom: 1,
    //     borderRadius: 10,
        
    //   },
})

export default CustomTextInput
