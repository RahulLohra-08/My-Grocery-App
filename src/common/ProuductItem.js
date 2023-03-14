import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProuductItem = ({item, onAddToCart, onRemoveItem, onAddToWishlist, isWishlist}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={{paddingHorizontal: 20,}}>
                <Image style={styles.imgStyle} 
                    source={{uri: item.image}}
                />
            </View>
            <View style={{borderWidth: 0.3, width: '100%', marginVertical: 10, opacity: 0.3,  }}></View>
            <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 8,}}>{item.title}</Text>
            <Text style={{fontSize: 20, fontWeight: '800', marginBottom: 8,}}>{"₹ "+item.price}</Text>
            <Text style={{fontSize: 14, fontWeight: '300', marginBottom: 8,}}>{item.description.substring(0, 180)}</Text>
            {/* <Text style={{fontSize: 15, fontWeight: '400', marginBottom: 8,}}>{item.category}</Text> */}

                <TouchableOpacity style={styles.btnStyle}
                    onPress={()=>{
                        onAddToCart(item)
                    }}
                 >
                <Text style={{ }}>Add To Cart</Text>
                </TouchableOpacity>
                

            <TouchableOpacity style={styles.wishlistStyle}
                onPress={()=>{
                    onAddToWishlist(item)
                }}
            >
                <Image style={styles.wishlistStyleImg}
                    source={require('../images/whishlist.png')}
                />
            </TouchableOpacity>
            
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 500,
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        marginHorizontal: 15,
        position: 'relative',
    },
    imgStyle: {
        width: '100%',
        height: 280,
    },
    btnStyle: {
        width: 100,
        alignSelf: 'flex-end',
        borderWidth: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    wishlistStyle: {
        position: 'absolute',
        right: 50,
        top: 30,
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    wishlistStyleImg: {
        width: 24,
        height: 24,
        tintColor: 'red',
    }
})  

export default ProuductItem
