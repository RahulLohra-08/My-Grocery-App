import { StyleSheet, Text, View, Image } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {

    const navigation  = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 3000);
    }, [])
    
    //Session me enter karne ke lia
    const getData = async() => {
      const email = await AsyncStorage.getItem('EMAIL')
      if (email !== '' || email !== null || email !== undefined) {
        navigation.navigate("Login")
      } else {
        navigation.navigate('Login')
      }
    }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image style={{height: 100, width: 100, borderRadius: 100}}
        source={require ('../images/ic_launcher.png') }
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Splash
