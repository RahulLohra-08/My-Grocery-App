import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import CustomTextInput from '../common/CustomTextInput'
import CommonButton from '../common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from './Loader'

const Login = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [badEmail, setBadEmail] = useState(false)
  const [badPassword, setBadPassword] = useState(false)


  const login = () => {
    setModalVisible(true)
    if( email === '') {
      setBadEmail(true)
      setModalVisible(false)
    } else {
      setBadEmail(false)
      if (password === '') {
        setBadPassword(true)
        setModalVisible(false)
      } else {
        
        setTimeout(() => {
          setBadPassword(false)
          getData();
        }, 2000);
      }
    }
  }
  

  const getData = async() => {
    const mEmail = await AsyncStorage.getItem("EMAIL")
    const mPassword = await AsyncStorage.getItem("PASSWORD")
    console.log(mEmail,mPassword)
    if(email === mEmail && password === mPassword) {
      setModalVisible(false);
      navigation.navigate('Home')
    } else {
      setModalVisible(false);
    }
  }
  
  return (

    <View style={{flex: 1}}>

      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <Image style={{width: 50, height: 50, alignSelf: 'center', marginTop: 100, borderRadius: 100}}
        source={require('../images/ic_launcher.png')}
      />
      <Text style={{marginTop: 50, marginBottom: 10, alignSelf: 'center', fontSize: 24, fontWeight: '500', color: '#000'}}>
        Login
      </Text>

    
      <CustomTextInput 
        value={email}
        onChangeText={(email)=>{
          setEmail(email)
        }}
        placeholder={'Enter Email Id'} 
        icon={require('../images/email1.png')}
      />
      {
      badEmail === true && ( 
        <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}> Please Enter Email </Text>
      )
    }
      
      <CustomTextInput 
        value={password}
        onChangeText={(password)=>{
          setPassword(password)
        }}
        placeholder={'Enter Password'} 
        type={'secureInputText'}
        icon={require('../images/lock.png')}
      />
      {
        badPassword === true && ( 
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}> Please Enter password </Text>
        )
     }
      
      <CommonButton 
        title={'Login'} 
        bgColor={'black'}  
        textColor={'white'} 
        onPress={()=>{
          login();
        }}/>
      <Text style={styles.createButton} 
         onPress={()=>{
          navigation.navigate('Signup')
        }}
      >
        Create New Account
      </Text>
    </View>
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

export default Login
