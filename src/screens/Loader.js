import { StyleSheet, Text, View, Modal, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.modalView}>
            <ActivityIndicator />
          </View>
        </View>
      </Modal>
  )
}
const styles = StyleSheet.create({
    modalView: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
    }
       
})

export default Loader
