import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView,  ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import Header from '../common/Header'
import ImageSlider from 'react-native-image-slider'
import { product } from '../api/Products_api'
import MyProductItem from '../common/MyProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, addToWishlist } from '../redux/action/actions'
import Products from '../components/Products'

const images = [
  require('../images/products/banner.jpg'),
  require('../images/products/banner2.jpg'),
  require('../images/products/baner2.jpg'),
]

const Main = () => {

  const dispatch = useDispatch();
  const item = useSelector( state => state) //data ko nikalne ke lia use karte hai
  console.log(item)

  const [categoryList, setCategoryList] = useState(product)
  const [displayProduct, setDisplayProduct] = useState(product)
  const [selectedCategory, setSelectedCategory] = useState([])

  const [tshirtList, setTshirtList] = useState([])
  const [shoesList, setShoesList] = useState([])
  const [jacketList, setJacketList] = useState([])
  const [sliperList, setSliperList] = useState([])
  const [jeansList, setJeansList] = useState([])
  const [trousersList, setTrouserList] = useState([])

 useEffect(() => {
  // console.log(product)
  let tempCategory = [];
  product.category.map((item)=>{
    tempCategory.push(item);
  })

  setCategoryList(tempCategory);
  setTshirtList(product.category[0].data) 
  setShoesList(product.category[1].data) 
  setJacketList(product.category[2].data) 
  setSliperList(product.category[3].data) 

  // data ko filter karne ke lia
  let filtered = [];
  product.category.filter((item)=>{
    filtered.push(item.data);
    if(item.category === selectedCategory) {
      return filtered;
    }
  })

  setDisplayProduct(filtered);
  

  
 }, [])

//  useEffect(() => {
  
//   const filtered = product.filter(()=>{
//     // return product.category === selectedCategory
//   })

//   setDisplayProduct(filtered);

//  }, [selectedCategory])
 
 

  return (
    <View>
       <ScrollView style={{flexGrow: 1}} nestedScrollEnabled={true}>

      <SafeAreaView style={{flex: 1}}>
      {/* <ScrollView style={{flex: 1}}> */}
        <View style={{flex: 1, }}>
            <Header />
          <SafeAreaView style={styles.container}>  
            <ImageSlider 
                loopBothSides
                autoPlayWithInterval={3000}
                images={images}
            />
          </SafeAreaView>

          {/* Add component  */}
          

          <View style={{marginTop: 20}}>
            <FlatList 
              // keyExtractor={ key => key.id}
              horizontal
              // showsHorizontalScrollIndicator={false}
              data={categoryList}
              renderItem={({item, index})=>{ 
                return(
                  <TouchableOpacity
                    style={{padding: 10, borderWidth: 1, marginLeft: 20, borderRadius: 20,}}
                    onPress={()=>{
                      setSelectedCategory(item.category);
                      // console.log(item.category)
                    }}
                  >
                    <Text style={{color: '#000'}}>{item.category}</Text>
                  </TouchableOpacity>
                )
              }}
            />
          </View>

          

          <Text style={{marginTop: 20, marginLeft: 20, fontSize: 16, fontWeight: '600', color: '#000'}}>New T-shirts</Text>
          <View style={{marginTop: 20}}>
            <FlatList 
              // keyExtractor={ key => key.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={tshirtList}
              renderItem={({item, index})=>{ 
                return(
                 <MyProductItem item={item} 
                  onAddToCart={( x )=>{
                    dispatch(addItemToCart(x))
                  }} 
                  onAddToWishlist={( shirt )=>{
                    dispatch(addToWishlist(shirt))
                  }} 
                  
                />
                )
              }}
            />
          </View>
          <Text style={{marginTop: 20, marginLeft: 20, fontSize: 16, fontWeight: '600', color: '#000'}}>New Shoes</Text>
          <View style={{marginTop: 20}}>
            <FlatList 
              // keyExtractor={ key => key.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={shoesList}
              renderItem={({item, index})=>{ 
                return(
                 <MyProductItem item={item} 
                 onAddToWishlist={( shoes )=>{
                    dispatch(addToWishlist(shoes))
                  }} 
                 onAddToCart={(shoes)=>{
                    dispatch(addItemToCart(shoes))
                 }}/>
                )
              }}
            />
          </View>
          <View style={{marginTop: 15,}}>
                <Products />
          </View>
          <Text style={{marginTop: 20, marginLeft: 20, fontSize: 16, fontWeight: '600', color: '#000'}}>New Jacket</Text>
          <View style={{marginTop: 20}}>
            <FlatList 
              // keyExtractor={ key => key.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={jacketList}
              renderItem={({item, index})=>{ 
                return(
                 <MyProductItem item={item} onAddToCart={(jacket)=>{
                    dispatch(addItemToCart(jacket))
                 }}
                 onAddToWishlist={( jacket )=>{
                    dispatch(addToWishlist(jacket))
                  }} 
                 />
                )
              }}
            />
          </View>

          <Text style={{marginTop: 20, marginLeft: 20, fontSize: 16, fontWeight: '600', color: '#000'}}>New Sliper</Text>
          <View style={{marginTop: 20}}>
            <FlatList 
              // keyExtractor={ key => key.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={sliperList}
              renderItem={({item, index})=>{ 
                return(
                 <MyProductItem item={item} onAddToCart={(sliper)=>{
                    dispatch(addItemToCart(sliper))
                 }}
                 onAddToWishlist={( slip )=>{
                    dispatch(addToWishlist(slip))
                  }} 
                 />
                )
              }}
            />
          </View>
       </View> 

      
       <View style={{marginVertical: 50,}}>
              
       </View>
    {/* </ScrollView> */}
    </SafeAreaView>
     </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      // flex: 1,
      width: '94%',
      height: 200,
      marginHorizontal: 10,
      marginTop: 0,
  },
});


export default Main











 {/* <Image style={{width: '94%', height: 200, borderRadius: 10, marginTop: 10, marginHorizontal: 10,}}
         source={require('../images/products/banner.jpg')}
         />     */}