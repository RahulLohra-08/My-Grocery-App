import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView,  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from '@react-navigation/native' //ek time ke lia data ko focus karega refresh hone nhi dega
import { useDispatch, useSelector } from 'react-redux'
import { deleteAddress } from '../redux/action/actions'

const MyAddress = () => {
    const navigation = useNavigation();

    const isFocused = useIsFocused()

    const address = useSelector(state => state.address)
    const dispatch = useDispatch();

    console.log(address);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
      <View style={{width: '100%', height: 70, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center',}}>
          {/* <Text style={{fontSize: 18, fontWeight: '600',marginLeft: 18, marginTop: 20}}>My Address</Text> */}
          <TouchableOpacity style={{marginTop: 20, marginLeft: 20, width: 60, alignItems: 'center', borderWidth: 0.2, padding: 7, borderRadius: 8, }}
            onPress={()=>{
                navigation.goBack()
            }}
          >
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20, marginRight: 20, alignItems: 'center', borderWidth: 0.2, padding: 7, borderRadius: 10, }}
            onPress={()=>{
                navigation.navigate('AddAddress')
            }}
          >
                <Text>Add Address</Text>
          </TouchableOpacity>
      </View>

      <FlatList 
        data={address}
        renderItem={({item, index})=>{
            return(
                <View 
                    style={{width: '100%', height: 100,
                     borderWidth: 0.2,
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 10,
                    }}
                  >
                    <View>
                      <Text style={{marginLeft: 20, marginBottom: 20, marginTop: 20,}}>{item.city}</Text>
                      <Text style={{marginLeft: 20, marginBottom: 20, }}>{item.building}</Text>
                      <Text style={{marginLeft: 20, marginBottom: 20, }}>{item.pin}</Text>
                    </View>
                    <TouchableOpacity
                      style={{}}
                      onPress={()=>{
                        dispatch(deleteAddress(index))
                      }}
                    >
                      <Text style={{marginRight: 20, borderWidth: 0.2, padding: 10, borderRadius: 10,}}>Delete Address</Text>
                    </TouchableOpacity>
                </View>
            )
        }}
      />
    </View>
    </SafeAreaView>
  )
}

export default MyAddress