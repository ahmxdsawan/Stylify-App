import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function WardrobeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');

  const navigation = useNavigation()
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screen} >Wardrobe</Text>
      <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>{selectedOption}</Text>
        <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.modalOption} onPress={() => handleOptionSelect('All')}>
            <Text style={styles.modalText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => handleOptionSelect('Tops')}>
            <Text style={styles.modalText}>Tops</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => handleOptionSelect('Bottoms')}>
            <Text style={styles.modalText}>Bottoms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => handleOptionSelect('Shoes')}>
            <Text style={styles.modalText}>Shoes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => setModalVisible(false)}>
            <Text style={[styles.modalText, { color: 'red' }]}>Cancel</Text>
          </TouchableOpacity>
          {/* <Button
            onPress={navigation.replace("Outfit")}
            title="Outfit"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          /> */}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    position: 'absolute',
    left: 21,
    top: 109,
    width: 270,
    height: 100,
    fontSize: 48,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 24,
    textAlign: 'left',
    color: 'black',
  },
  dropdown: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: 35,
    top: 193,
    width: 312,
    height: 37,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 1,
    width: 150,
    height: 160,
    left: 35,
    alignItems: 'center',
    marginTop: 240
  },
  modalList: {
    maxHeight: 200,
  },
  option: {
    paddingVertical: 10,
  },
  modalText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  },
});







