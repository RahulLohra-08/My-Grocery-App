import { StyleSheet, Text, View, Image, TouchableOpacity,  } from "react-native";
import React from "react";

const MyProductItem = ({ item, onAddToCart, onAddToWishlist, onRemoveFromCart }) => {
  return (
        <View
        style={{
            width: 250,
            height: 300,
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
           resizeMode: 'contain',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
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
            <Text style={{fontSize: 18, fontWeight: '600'}}>{`₹ ${item.price}`}</Text>
            <TouchableOpacity 
                style={{padding: 10, borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7, marginBottom: 5,}}
                onPress={()=>{
                    onAddToCart(item)
                }}
            >
                <Text>Add To Cart</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={{width: 40, height: 40, backgroundColor: '#fff', borderRadius: 20, elevation: 5, position: "absolute", top: 10, right: 10, alignItems: "center"}}
            onPress={()=>{
                onAddToWishlist(item)
            }}
        >
            <Image 
                source={require('../images/whishlist.png')}
                style={{width: 24, height: 24, marginTop: 8}}
            />
        </TouchableOpacity>
        </View>
  );
};
const styles = StyleSheet.create({});

export default MyProductItem;
