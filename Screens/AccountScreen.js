import React from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function AccountScreen() {

  const navigation = useNavigation();

  const navOutfit = () => {
    navigation.replace("Outfit");
  };
  const navUpload = () => {
    navigation.replace("Upload");
  };
  const navWardrobe = () => {
    navigation.replace("Wardrobe");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screen}>Account</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonText} onPress={navOutfit}>
          <MaterialCommunityIcons name="tshirt-crew" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText} onPress={navWardrobe}>
          <MaterialCommunityIcons name="wardrobe" size={24} color="black" />
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
        lineHeight: 58,
        textAlign: 'left',
        color: 'black',
        fontWeight: 'bold',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 5,
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
      bottom: 23,
      paddingVertical: 17,
      paddingHorizontal: 37,
      borderRadius: 50,
  
      elevation: 34,
    },
  });
