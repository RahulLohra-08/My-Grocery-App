import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View >
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>EcommerceApp</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize: 15, fontWeight: '300', marginTop: 8,}}>Mode</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 10,
        width: '100%',
        backgroundColor: '#fff',
        height: 60,
        paddingVertical: 15,
        paddingHorizontal: 20,
    }
})
export default Header
