import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function WardrobeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');

  const navigation = useNavigation();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  const navOutfit = () => {
    navigation.replace("Outfit");
  };
  const navAccount = () => {
    navigation.replace("Account");
  };
  const navUpload = () => {
    navigation.replace("Upload");
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
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonText} onPress={navOutfit}>
          <MaterialCommunityIcons name="tshirt-crew" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText} onPress={navAccount}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText} onPress={navUpload}>
          <MaterialCommunityIcons name="upload" size={24} color="black" />
        </TouchableOpacity>
      </View>
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
    top: 191,
    width: 312,
    height: 35,
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
    padding: 4,
    width: 150,
    height: 180,
    left: 35,
    alignItems: 'center',
    marginTop: 240,
    marginBottom: 10,
},

  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    
    paddingBottom: 15,
    alignItems: 'center',
    marginTop: 30,
    marginRight: 10,
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'flex-end', // Align to bottom of container
    backgroundColor: '#F5F5F5',
    paddingVertical: 17,
    paddingHorizontal: 38,
    borderRadius: 50,
    width: 5,
    elevation: 34,
  },  
  buttonIcon: {
    marginRight: 5,
  },
  modalList: {
    maxHeight: 200,
  },
  option: {
    paddingVertical: 10,
  },
  modalOption: {
    paddingVertical: 4,
    marginBottom: 0,
  },
  modalText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  },
});







