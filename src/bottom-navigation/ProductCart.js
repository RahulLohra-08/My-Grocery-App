import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CartItem from '../common/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromCart } from '../redux/action/actions'
import CommonButton from '../common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import ProuductItem from '../common/ProuductItem'

const ProductCart = () => {

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
                <CartItem cartItem={false}   item={item} onRemoveItem={()=>{
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
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                  <Text style={{color: 'red'}}>No Items Add in Cart</Text>
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

export default ProductCart

const styles = StyleSheet.create({})