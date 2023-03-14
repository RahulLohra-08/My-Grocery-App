import React, {useState, useEffect} from 'react';
import MapView, { Marker, Callout, Circle} from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';

export default function Search() {

  const [location, setLocation] = useState('')

  const [pin, setPin] = useState({
    latitude: 23.3522172,
    longitude :	85.1274761,
  })

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);

      setPin({
        latitude: location.coords.latitude,
        longitude :	location.coords.longitude,
      })
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{
        latitude: 23.3522172,
        longitude :	85.1274761,
        latitudeDelta: 0.005,
        longitudeDelta: 0.0005,
       }}
       showsUserLocation={true}
      //  onUserLocationChange={(e)=>{
      //     console.log("onUserLocationChange", e.nativeEvent.coordinate)
      //     setPin({
      //     latitude: e.nativeEvent.coordinate.latitude,
      //     longitude :	e.nativeEvent.coordinate.longitude,
      //     })
      //  }}
      >
      
        <Marker coordinate={pin}
          // title='Test Title'
          // description='Test Description'
          draggable={true} // drag kar sakte hai location ko
          pinColor='gold'
          onDragStart={(e)=>{
            console.log("Drag Start", e.nativeEvent.coordinate)
          }}
          onDragEnd={(e)=>{
            console.log("Drag End", e.nativeEvent.coordinate)
            setPin({
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude :	e.nativeEvent.coordinate.longitude,
              })
          }}
        >
          <Callout> 
            <Text>This is Collout</Text> 
          </Callout>
        </Marker>

        <Circle center={pin} radius={100}/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});





















// import React,{useState, useEffect} from 'react';
// import MapView, { Marker } from 'react-native-maps';
// import { StyleSheet, View, Text, Dimensions, Platform, TouchableOpacity } from 'react-native';
// import * as Location from 'expo-location';

// export default function Search() {

//   const [mapRegion, setMapRegion] = useState({
//     latitude: 37.78825,
//     Longitude: -122.4324,
//     // latitude: 0,
//     // Longitude: 0,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   })

//   const userLocation = async () => {
//     let {status } = await Location.requestForegroundPermissionsAsync(); // permission ke lia puchenge
//     if(status !== 'granted') {
//       setErrorMsg('Permission to access location was denied')
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});

//     setMapRegion({
//       latitude: location.coords.latitude,
//       Longitude: location.coords.longitude,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     })

//     console.log(location.coords.latitude, location.coords.longitude)
//   }

//   useEffect(() => {
//    userLocation();
//   }, [])
  

//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} 
//         region={mapRegion}
//       >
//         <Marker coordinate={mapRegion} title='Marker'/>

//         {/* <TouchableOpacity style={{bottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10,}}
//           onPress={userLocation}
//         >
//           <Text style={{color: '#fff'}}>Get Location</Text>
//         </TouchableOpacity> */}
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     // width: Dimensions.get(window).width,
//     // height: Dimensions.get(window).height,
//     width: '100%',
//     height: '100%',
//   },
// });