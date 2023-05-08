import React from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, Button, Container, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function UploadScreen() {

  const navigation = useNavigation();
  const navAccount = () => {
    navigation.replace("Account");
  };
  const navOutfit = () => {
    navigation.replace("Outfit");
  };
  const navWardrobe = () => {
    navigation.replace("Wardrobe");
  };



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screen}>Upload</Text>
      <TouchableOpacity style={styles.buttonText} onPress={navWardrobe}>
        <MaterialCommunityIcons name="wardrobe" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonText} onPress={navOutfit}>
        <MaterialCommunityIcons name="tshirt-crew" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonText} onPress={navAccount}>
        <MaterialCommunityIcons name="account" size={24} color="black" />
      </TouchableOpacity>
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
    lineHeight: 58,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },
});
