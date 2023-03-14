import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import CartItem from '../common/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromCart } from '../redux/action/actions'
import CommonButton from '../common/CommonButton'
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation } from '@react-navigation/native'
import ProductCart from './ProductCart'

const Cart = () => {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const cartData = useSelector(state => state.cartData)

  return (
    <View style={{flex: 1, marginBottom: 180,}}>
        <View style={{marginTop: 30}}>
          {
            cartData.length > 0 ? (
              <FlatList 
            // keyExtractor={(key)=>{
            //   return key.id
            // }}
            data={cartData}
            renderItem={({item, index})=>{
              return(
                <CartItem item={item} onRemoveItem={()=>{
                  dispatch(removeFromCart(index))
                }}

                onAddWishList={(x)=>{
                  dispatch(addToWishlist(x))
                }}
                />
              )
            }}
          />
            ) : (
                <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                       <Image 
                        style={{width: 300, height: 300,  alignSelf: 'center', marginTop: "45%",}}
                        source={require('../images/not-found.png')}
                       />
                       <Text style={{marginTop: 10, fontSize: 20, color: 'red', padding: 5}} >Item not selected in Add To Cart !</Text>
                    {/* <TouchableOpacity
                      style={{justifyContent: 'center', alignItems: 'center', borderWidth: 0.4, marginTop: 20,  borderRadius: 10, backgroundColor: '#000', width: 150, height: 50}}
                      onPress={()=>{
                        navigation.navigate('Home');
                      }}
                    >
                      <Text style={{color: '#fff', fontSize: 16, padding: 8,}}>Go To Home</Text>
                    </TouchableOpacity> */}
                </View>
            )
          }
        </View>
        { cartData.length > 0 ? (
          <View style={{marginBottom: 80}}>
            <CommonButton bgColor={'green'} textColor='#fff' title='Checkout'
              onPress={()=>{
                
                navigation.navigate('Checkout')

              }}
             />
          </View>
          ) : (
            null
          )
        }
  
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})