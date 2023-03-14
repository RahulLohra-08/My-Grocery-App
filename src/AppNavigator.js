import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './screens/Splash';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import MyAddress from './screens/MyAddress';
import AddAddress from './screens/AddAddress';
import Checkout from './screens/Checkout';
import OrderSuccess from './screens/OrderSuccess';
import Orders from './screens/Orders';
import Products from './components/Products';



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>

        <Stack.Navigator initialRouteName='Splash' >

            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }}/>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}/>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name='MyAddress' component={MyAddress} options={{ headerShown: false }}/>
            <Stack.Screen name='AddAddress' component={AddAddress} options={{ headerShown: false }}/>
            <Stack.Screen name='Checkout' component={Checkout} options={{ headerShown: false }}/>
            <Stack.Screen name='OrderSuccess' component={OrderSuccess} options={{ headerShown: false }}/>
            <Stack.Screen name='Orders' component={Orders} options={{ headerShown: false }}/>
            <Stack.Screen name='Products' component={Products} options={{ headerShown: false }}/>

        </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default AppNavigator
