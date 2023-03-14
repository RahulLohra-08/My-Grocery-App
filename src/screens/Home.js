import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import Main from '../bottom-navigation/Main';
import Cart from '../bottom-navigation/Cart';
import Search from '../bottom-navigation/Search';
import Wishlist from '../bottom-navigation/Wishlist';
import Profile from '../bottom-navigation/Profile';
import { useSelector } from 'react-redux';
import ProductCart from '../bottom-navigation/ProductCart';
import ProuductItem from '../common/ProuductItem';

const Home = () => {

  const data = useSelector(state => state)
  
  const [selectedTab, setSelectedTab] = useState (0);
  
  return (
    <View style={{flex: 1}}>
      { selectedTab == 0 ? ( <Main /> ) : selectedTab == 1 ? ( <Search /> ) : selectedTab == 2 ? (<Cart />) : selectedTab == 3 ? (<Wishlist />) : (<Profile/>)  }
        <View style={styles.container}>
            <TouchableOpacity style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', }}
              onPress={()=>{
                setSelectedTab(0)
              }}
            >
                <Image 
                  style={{height: 40, width: 40,
                    tintColor: selectedTab == 0 ? '#000' : '#8e8e8e'
                  }}
                  source={require('../images/home.png')}
                />
            </TouchableOpacity>
            
            <TouchableOpacity style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', }}
              onPress={()=>{
                setSelectedTab(1)
              }}
            >
                <Image style={{height: 40, width: 40,
                  tintColor: selectedTab == 1 ? '#000' : '#8e8e8e'
                }}
                  source={require('../images/search.png')}
                />
            </TouchableOpacity>

           {/* Home navigation  */}
            <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
                <TouchableOpacity style={{height: 44, width: 44, borderRadius: 22, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center',
                    backgroundColor: selectedTab == 2 ? 'green' : '#000',
                }}
                  onPress={()=>{
                 setSelectedTab(2)
                }}
                >
                    <Image style={{width: 24, height: 24,tintColor: '#fff',}}
                      source={require('../images/bag.png')}
                    />
                    <View style={{position: 'absolute', width: 22, height: 22, backgroundColor: 'red', borderRadius: 12, justifyContent: 'center', alignItems: 'center', top: -4, right: 0}}>
                      <Text style={{color: '#fff', fontWeight: '600'}}>{data.cartData.length}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', }}
              onPress={()=>{
                setSelectedTab(3)
              }}
            >
                <Image style={{height: 40, width: 40,  tintColor: selectedTab == 3 ? '#000' : '#8e8e8e'}}
                  source={require('../images/whishlist.png')}
                />
                <View style={{position: 'absolute', width: 20, height: 20, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center', top: 14, right: 12}}>
                      <Text style={{color: '#fff', fontWeight: '600'}}>{data.wishlist.length}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', }}
              onPress={()=>{
                setSelectedTab(4)
              }}
            >
                <Image style={{height: 40, width: 40,  tintColor: selectedTab == 4 ? '#000' : '#8e8e8e'}}
                  source={require('../images/user1.png')}
                />
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  position: 'absolute' ,
  height: 70,
  width: '100%',
  backgroundColor: '#fff',
  bottom: 0,
  flexDirection: 'row',
  alignItems: 'center',
  },
})

export default Home
