import { StyleSheet, Text, View, Image, TouchableOpacity,  } from "react-native";
import React from "react";

const CartItem = ({ item, onAddToCart, onRemoveItem, onAddWishList, onRemoveFromWishlist, isWishlist, cartItem, productItem }) => {
  return (
        <View
        style={{
            width: '90%',
            height: 270,
            borderRadius: 10,
            elevation: 5,
            backgroundColor: "#fff",
            marginHorizontal: 20,
            marginBottom: 10,
        }}
        >
        
        <Image
            style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'contain'
            }}

             source={item.image} 
             
        />
        <Text
            style={{
            marginLeft: 10,
            marginTop: 10,
            fontSize: 18,
            fontWeight: "600",
            }}
        >
            {item.name}
        </Text>
        <View
            style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            }}
        >
            <Text style={{fontSize: 18, fontWeight: '600' }}>{`₹ ${item.price}`}</Text>
            {
                isWishlist ? (
                    <TouchableOpacity 
                    style={{padding: 10, borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7}}
                    onPress={()=>{
                        onAddToCart(item)
                    }}
                >
                    <Text>Add To Cart</Text>
                </TouchableOpacity>
                ) : (
                    <TouchableOpacity 
                    style={{padding: 10, borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7, marginBottom: 15,}}
                    onPress={()=>{
                        onRemoveItem()
                    }}
                >
                    <Text>Remove To Cart</Text>
                </TouchableOpacity>
                )
            }
        </View>

        { isWishlist ? (  //Fill heart ke lia hai
            <TouchableOpacity style={{width: 40, height: 40, backgroundColor: '#fff', borderRadius: 20, elevation: 5, position: "absolute", top: 10, right: 10, alignItems: "center"}}
                    onPress={()=>{
                        onRemoveFromWishlist()
                }}
                >
                    <Image 
                        source={require('../images/products/wishlist_fill.png')}
                        style={{width: 24, height: 24, marginTop: 8, tintColor: 'red'}}
                    />
            </TouchableOpacity>
        ) 
        
        : (
            <TouchableOpacity style={{width: 40, height: 40, backgroundColor: '#fff', borderRadius: 20, elevation: 5, position: "absolute", top: 10, right: 10, alignItems: "center"}}
                    onPress={()=>{
                        onAddWishList(item)
                }}
                >
                    <Image 
                        source={require('../images/whishlist.png')}
                        style={{width: 24, height: 24, marginTop: 8}}
                    />
         </TouchableOpacity>
        ) 
        
        }
        
        </View>
  );
};
const styles = StyleSheet.create({});

export default CartItem;
