import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CartItem from "../common/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, addToWishlist, removeFromCart } from "../redux/action/actions";
import CommonButton from "../common/CommonButton";
import RazorpayCheckout from "react-native-razorpay";
import { useNavigation } from "@react-navigation/native";

const Checkout = () => {
  const navigation = useNavigation();
  const [selectAddress, setSelectAddress] = useState('');

  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartData);
  const address = useSelector((state) => state.address);

  // for sum
  const getTotal = () => {
    let tempTotal = 0;

    cartData.map((item) => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };

  return (
    <View style={{ flex: 1, marginBottom: 180 }}>
      <View style={{ marginTop: 30 }}>
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    width: "100%",
                    height: 70,
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <Image
                    style={{ height: 70, width: 70, marginLeft: 10 }}
                    source={item.image}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 18, }}>{item.name}</Text>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {"₹ " + item.price}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderTopWidth: 0.5,
          marginTop: 10,
          borderTopColor: '#8e8e8e',
        }}
      >
        <Text style={{ fontSize: 18 }}>Total</Text>
        <Text style={{ fontSize: 18 }}>{"₹ " + getTotal()}</Text>
      </View>
      <View>
        <FlatList
          data={address}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: "100%",
                  height: 80,
                  borderWidth: 0.5,
                  alignSelf: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={{ marginLeft: 20,  fontSize: 15}}
                  >
                    {"city: "+item.city}
                  </Text>
                  <Text style={{ marginLeft: 20, fontSize: 15 }}>
                    {"Building: "+item.building}
                  </Text>
                  <Text style={{ marginLeft: 20, marginBottom: 20 , fontSize: 15}}>
                    {"pin: "+item.pin}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{}}
                  onPress={() => {
                    setSelectAddress(`city : ${item.city}, building: ${item.building}, pincode:  ${item.pin}`);
                  }}
                >
                  <Text
                    style={{
                      marginRight: 20,
                      borderWidth: 0.2,
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    Select Address
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View>
        <Text style={{fontSize: 20, marginLeft: 10,}}>Selected Address : </Text>
        <Text style={{padding: 10, fontSize: 15}}>{ selectAddress == '' ? 'Please select Address from above list' : selectAddress}</Text>
      </View>
      <CommonButton 
        bgColor={'#000'}
        textColor={'#fff'}
        title='Order Now'
        onPress={()=>{
            // var options = {
            //         description: 'Credits towards consultation',
            //         image: 'https://i.imgur.com/3g7nmJC.png',
            //         currency: 'INR',
            //         key: 'rzp_test_CRpRWiZuN5RKEp', // Your api key
            //         amount: ` ${parseInt(getTotal() * 100)} `,
            //         name: 'foo',
            //         prefill: {
            //           email: 'void@razorpay.com',
            //           contact: '9191919191',
            //           name: 'Razorpay Software'
            //         },
            //         theme: {color: '#F37254'}
            //       }
            //       RazorpayCheckout.open(options).then((data) => {
            //         // handle success
            //         alert(`Success: ${data.razorpay_payment_id}`);
                     dispatch(addOrder({item: cartData, total: getTotal(), address: selectAddress}))
                      navigation.navigate('OrderSuccess', {status: 'success'}); 
            //       }).catch((error) => {
            //         // handle failure
            //         alert(`Error: ${error.code} | ${error.description}`);
            //       });

        //   navigation.navigate('OrderSuccess', {status: 'success'});    
        }}
      />
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
