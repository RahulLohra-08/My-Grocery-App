import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Share } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

// import Share from 'react-native-share';
// import files from '../assest'

const Profile = () => {

  const [image, setImage] = useState('')

  let name = "";

  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(() => {
      getData();
      console.log('Name', name)
    }, 3000);
  },[])

  let getData = async() => {
    name = await AsyncStorage.getItem("NAME");  
  }

  // Taking photo from Camera
  const takePhotoFromCamera = async() => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if(!result.canceled){
      setImage(result.assets[0].uri);
    }
  }

  // Taking photo from gallery
  const chosePhotoFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if(!result.canceled){
      setImage(result.assets[0].uri);
    }
  }


  // share photos pdf file 
  const myCustomShare = async() => {
    const shareOptions = {
      message: "Order your next dress from our best application \ I've already order more than 10 dresses"
      // url: "file://<file_path>"
      // url: files.appLogo,
      // urls: [files.image1,image2]
    }

    try {
      const shareResponse = await Share.share(shareOptions)
      console.log(JSON.stringify(shareResponse));
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  return (
  <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
    {/* <OpenCamera /> */}
      {/* <ImagePickerExample /> */}
      <View style={{width: '100%', height: 70, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: 50}}>
          <Text style={{fontSize: 18, fontWeight: '600',marginLeft: 18}}>Profile</Text>

          {/* Chose Image from libray an camera */}
          <TouchableOpacity style={{position: 'absolute', right: 30,  borderRadius: 20,}}
            onPress={takePhotoFromCamera}
          >
            <Image 
                  style={{ width: 30, height: 30, }}
                  // source={image === '' ? require('../images/camera.png') : require('../images/camera.png')}
                  source={require('../images/camera.png')}
            />
          </TouchableOpacity>

          {/* <TouchableOpacity>
                <Image 
                  style={{height: 24, width: 24, marginRight: 20, }}
                   source={require('../images/setting.png')}
                />
          </TouchableOpacity> */}
      </View>


      <TouchableOpacity style={{ position: 'absolute', width: 80, height: 80, alignSelf: 'center', top: 80, borderRadius: 40, }}
        onPress={ chosePhotoFromLibrary}
      >
        <Image 
              style={{width: 80, height: 80, borderRadius: 40,}}
              source={{uri: image === '' ? 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png' : image}}
        />
      </TouchableOpacity>

    {/* ------------------ */}

      <Text style={{alignSelf: 'center', fontSize: 15, marginTop: 50, fontSize: 18, fontWeight: '500'}}>{name} Change Profile</Text>

      <TouchableOpacity style={{width: '90%', alignSelf: 'center', height: 50, borderBottomWidth: 1, borderBottomColor: 'grey', marginTop: 20, justifyContent: 'center'}}
        onPress={()=>{
          navigation.navigate('MyAddress')
        }}
      >
          <Text style={{}}>Address</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={{width: '90%', alignSelf: 'center', height: 50, borderBottomWidth: 1, borderBottomColor: '#8e8e8e',  justifyContent: 'center'}}
        onPress={()=>{
          navigation.navigate('Orders')
        }} 
      >
          <Text style={{ }}>My Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width: '90%', alignSelf: 'center', height: 50, borderBottomWidth: 1, borderBottomColor: '#8e8e8e', justifyContent: 'center'}}>
          <Text style={{ }}>Offers</Text>
      </TouchableOpacity>
    </View>
    <View style={{flex: 1, }}>

    <TouchableOpacity style={{marginBottom: 30,}}>
        <Image 
              style={{position: 'absolute', height: 24, width: 24, left: 20, marginTop: 4, tintColor: '#ff531a' }}
              source={require('../images/wishlist.png')}
          />
            <Text style={{ fontSize: 20, fontWeight: '400', marginLeft: 48, }}>Your Favorites</Text>
        </TouchableOpacity>
        
      <TouchableOpacity style={{marginBottom: 30,}}
        onPress={myCustomShare}
      >
        <Image 
              style={{position: 'absolute', height: 24, width: 24, left: 20, marginTop: 4, tintColor: '#ff531a' }}
              source={require('../images/share.png')}
          />
            <Text style={{ fontSize: 20, fontWeight: '400', marginLeft: 48, }}>Tell Your Friends</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{marginBottom: 30,}}>
        <Image 
              style={{position: 'absolute', height: 24, width: 24, left: 20, marginTop: 4, tintColor: '#ff531a' }}
              source={require('../images/support2.png')}
          />
            <Text style={{ fontSize: 20, fontWeight: '400', marginLeft: 48, }}>Support</Text>
        </TouchableOpacity>

      <TouchableOpacity style={{marginBottom: 30,}}>
        <Image 
              style={{position: 'absolute', height: 24, width: 24, left: 20, marginTop: 4, tintColor: '#ff531a' }}
              source={require('../images/wallet.png')}
          />
            <Text style={{ fontSize: 20, fontWeight: '400', marginLeft: 50, }}>Payment</Text>
        </TouchableOpacity>

      <TouchableOpacity style={{marginBottom: 30,}}>
        <Image 
              style={{position: 'absolute', height: 24, width: 24, left: 20, marginTop: 4, tintColor: '#ff531a' }}
              source={require('../images/setting.png')}
          />
            <Text style={{ fontSize: 20, fontWeight: '400', marginLeft: 50, }}>Setting</Text>
        </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})