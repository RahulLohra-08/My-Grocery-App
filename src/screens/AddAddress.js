import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/action/actions';

const AddAddress = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const [city, setCity] = useState('')
    const [building, setBuilding] = useState('')
    const [pin, setPin] = useState('')
    
  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', height: 70, marginLeft: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center',}}>
          <TouchableOpacity style={{marginTop: 20, marginRight: 20, alignItems: 'center', borderWidth: 0.2, padding: 7, borderRadius: 10,}}
            onPress={()=>{
                navigation.goBack();
            }}
          >
            <Image 
                style={{height: 24, width: 24, borderRadius: 10,}}
                source={require('../images/left-arrow.png')}
            />
          </TouchableOpacity>
      </View>
      <CustomTextInput 
          value={city}
          onChangeText={(name)=>{
            setCity(name)
          }}
          placeholder={'Enter city'}
          icon={require('../images/city.png')}
        />
      <CustomTextInput 
          value={building}
          onChangeText={(build)=>{
            setBuilding(build)
          }}
          placeholder={'Enter building'}
          icon={require('../images/building.png')}
        />
      <CustomTextInput 
          value={pin}
          onChangeText={(pins)=>{
            setPin(pins)
          }}
          keyboardType='number-pad'
          placeholder={'Enter picode'}
          icon={require('../images/pincode.png')}
        />
        
        <CommonButton bgColor={'#000'} textColor={'#fff'} title='Save Address' 
            onPress={()=>{
                if(city !== '' && building !== '' && pin !== '') {
                    dispatch(addAddress({city: city, building: building, pin: pin}))
                };
                navigation.goBack();
            }}
        />
    </View>
  )
}

export default AddAddress;