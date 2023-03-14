import { View, Text, SafeAreaView, FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Orders = () => {
    const orders = useSelector(state => state.orders);
  return (
    <SafeAreaView>
      <View>
        <FlatList 
            data={orders}
            renderItem={({item, index})=>{
                return(
                    <View style={{width: '100%', height: 100,}}>
                        <FlatList  horizontal
                            data={item.items} 
                            renderItem={({item1, index}) => {
                                <View>
                                    <Image 
                                    source={item1}
                                    style={{height: 50, width: 50}}
                                />
                                <Text>{item1.name}</Text>
                                <Text>Total</Text>
                                </View>
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

export default Orders