import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MyProductItem from '../common/MyProductItem'
import ProuductItem from '../common/ProuductItem'
import { useDispatch } from 'react-redux'
import { addItemToCart, addToWishlist } from '../redux/action/actions'

const Products = () => {

    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {
        getProducts();
        getCategory();
    }, [])
    

    const getProducts = async() => {
        try {
            const result = await axios.get('https://fakestoreapi.com/products')
            setProduct(result.data)
            setDisplayProduct(result.data)
            console.log(result.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const getCategory = async() => {
        try {
            const result = await axios.get('https://fakestoreapi.com/products/categories')
            setCategory(result.data)
            console.log(result.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
     const filtered = product.filter((products)=>{
        return products.category === selectedCategory
     })
     
     setDisplayProduct(filtered);
    }, [selectedCategory])
    

  return (
    <SafeAreaView style={{flex: 1}}>
        <View>
            <FlatList 
                horizontal
                data={category}
                renderItem={({item, index})=>{
                    return(
                        <View style={{marginRight: 10,}}>
                            <TouchableOpacity style={{borderWidth: 0.5, padding: 10, borderRadius: 20, marginLeft: 8,}}
                                onPress={()=>{
                                    setSelectedCategory(item)
                                }}
                            >
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <FlatList 
                data={displayProduct}
                renderItem={({item, index})=>{
                    return (
                        <View>
                            <ProuductItem item={item} 
                                onAddToCart={(prod)=>{
                                    dispatch(addItemToCart(prod))
                                }}
                                onAddToWishlist={(wish)=>{
                                    dispatch(addToWishlist(wish))
                                }}

                            />
                        </View>
                    )
                }}
            />
        </View>
    </SafeAreaView>
  )
}

export default Products

const styles = StyleSheet.create({})