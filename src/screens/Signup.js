

import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CommonButton from '../common/CommonButton'
import CustomTextInput from '../common/CustomTextInput'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

// const [, set] = useState(second)

const Signup = () => {

    let isValid = true;

    const navigation = useNavigation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [badName, setBadName] = useState(false)
    const [badEmail, setBadEmail] = useState(false)
    const [badPhone, setBadPhone] = useState(false)
    const [badPassword, setBadPassword] = useState(false)
    const [badConfirmPassword, setBadConfirmPassword] = useState(false)

    const [buttonDisabled, setButtonDisabled] = useState(false)

    const signup = () =>{

      setButtonDisabled(true)

      if(name === '') {
        setBadName(true)
        setButtonDisabled(false)
      } else {
        setBadName(false)
        if(email === '') {
          setBadEmail(true)
          setButtonDisabled(false)
        } else {
          setBadEmail(false)
          if(phone.length < 10 ) {
            setBadPhone(true)
            setButtonDisabled(false)
          } else {
            setBadPhone(false)
            if(password === '') {
              setBadPassword(true)
              setButtonDisabled(false)
            } else {
              setBadPassword(false)
              if(password !== confirmPassword) {
                setBadConfirmPassword(true)
                setButtonDisabled(false)
              } else {
                setBadConfirmPassword(false)
                saveData(); 
              }
            }
          }
        }
      }
    }

    const saveData = async() => {
      try {
        await AsyncStorage.setItem("NAME", name)
        await AsyncStorage.setItem("EMAIL", email)
        await AsyncStorage.setItem("PHONE", phone)
        await AsyncStorage.setItem("PASSWORD", password)
        await AsyncStorage.setItem("CONFIRM_PASSWORD", confirmPassword)
        console.log('Signup successully')
        navigation.goBack();

      } catch (error) {
        console.log(error)
      }
    } 
  
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, marginBottom: 40,}}>
        <Image style={{width: 50, height: 50, alignSelf: 'center', marginTop: 100, borderRadius: 100}}
          source={require('../images/ic_launcher.png')}
        />
        <Text style={{marginTop: 50, marginBottom: 10, alignSelf: 'center', fontSize: 24, fontWeight: '500', color: '#000'}}>
          Create New Account
        </Text>

        <CustomTextInput 
          value={name}
          onChangeText={(name)=>{
            setName(name)
          }}
          placeholder={'Enter Name'}
          icon={require('../images/user.png')}
        />
        {
        badName === true && (
          <Text style={{margin: 10, marginLeft: 30, color: 'red'}}>Please Enter name</Text>
        )
      }

        <CustomTextInput 
          value={email}
          onChangeText={(email)=>{
            setEmail(email)
          }}
          placeholder={'Enter Email'} 
          icon={require('../images/email1.png')}
          // type={'username'}
        />
        {
        badEmail === true && ( 
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}> Please Enter Email </Text>
        )
      }

        <CustomTextInput 
          value={phone}
          onChangeText={(phone)=>{
            setPhone(phone)
          }}
          placeholder={'Enter Phone'} 
          icon={require('../images/phone.png')}
          keyboardType={'number-pad'}
        />
        {
        badPhone === true && ( 
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}> Please Enter Phone </Text>
        )
      }

        <CustomTextInput 
          value={password}
          onChangeText={(password)=>{
            setPassword(password)
          }}
          type={'scscs'}
          placeholder={'Enter Password'} 
          icon={require('../images/lock.png')}
          // type={'secureTextEntry'}
        />
        {
        badPassword === true && ( 
          <Text style={{marginTop: 10, alignSelf: 'center', color: 'red'}}> Please enter password </Text>
        )
      }


        <CustomTextInput
          value={confirmPassword}
          onChangeText={(confirmPassword)=>{
            setConfirmPassword(confirmPassword)
          }}
          placeholder={'Confirm Password'} 
          icon={require('../images/lock.png')}
          // keyboardType={'secureTextEntry'}
          type={'scscs'}
        />
        
        {
        badConfirmPassword === true && ( 
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}> Please enter correct password </Text>
        )
      }

      <CommonButton 
        title={'Signup'} 
        bgColor={buttonDisabled ? '#8e8e8e' : '#000'}  
        textColor={'white'} 
        onPress={()=>{
          signup()
        }}
        disabled={buttonDisabled}
      />

        <Text style={styles.createButton} 
          onPress={()=>{
            navigation.goBack();
          }}
        >
        
          I have aleready an Account
        </Text>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    createButton:{
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 40,
      fontSize: 18,
      fontWeight: '700',
      textDecorationLine: 'underline'
      
    }
  })
  

export default Signup
