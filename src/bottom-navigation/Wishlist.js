import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CartItem from '../common/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, addToWishlist, removeFromCart, removeToWishlist } from '../redux/action/actions'
import { SafeAreaView } from 'react-native-safe-area-context'

const Wishlist = () => {

  const dispatch = useDispatch();

  // const cartData = useSelector(state => state.cartData)
  const wishlist = useSelector(state => state.wishlist)

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
          <View style={{marginTop: 10}}>
            <FlatList 
              data={wishlist}
              renderItem={({item, index})=>{
                return(
                  <CartItem item={item} isWishlist={'abc'} onRemoveFromWishlist={()=>{
                    dispatch(removeToWishlist(index))
                  }}

                  onAdd={(x)=>{
                    dispatch(addToWishlist(x))
                  }}

                  onAddToCart={(x)=> {
                    dispatch(addItemToCart(x))
                  }}
                  />
                )
              }}
            />
          </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default Wishlist
