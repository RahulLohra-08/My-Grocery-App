import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const OrderSuccess = () => {

    const route = useRoute()
    const navigation = useNavigation()

    const order = useSelector(state=> state.order);
    console.log(order);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
       {
        route.params.success == '' ? (
            <Image style={{height: 150, width: 150,}}
            source={require('../images/success.png')}
        />
        ) : (
            <Image style={{height: 150, width: 150,}}
            source={require('../images/failure.png')}
        />
        )
       }

        <Text style={{fontSize: 24, marginTop: 20, color: route.params.success ? 'green' : 'red'}}>{route.params.success == 'success' ? 'Your Order Place Successfully!' : 'Ordered Failed'}</Text>
        <TouchableOpacity
            style={{width: 200, height: 50, alignItems: 'center', justifyContent: 'center', marginTop: 50,  backgroundColor: '#000', borderColor: '#000', borderRadius: 10,}}
            onPress={()=>{
                navigation.navigate('Home');
            }}
        >
            <Text style={{ color: '#fff'}}>Go To Home</Text>
        </TouchableOpacity>
    </View>
  )
}

export default OrderSuccess