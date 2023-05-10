import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from '../firebase'
import React, { useEffect, useState } from 'react'



export default function AccountScreen() {

  const navigation = useNavigation();
  
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }


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

      <View >
        <TouchableOpacity style={styles.signoutButton} onPress={handleSignOut}>
          <Text style={styles.signout}>Signout</Text>
        </TouchableOpacity>  
      </View>
        
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Email: {auth.currentUser?.email}</Text>
      </View>
        


      
    </SafeAreaView>
  );

  

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    screen: {
      // alignItems: 'center',
      // justifyContent: 'flex-end', // Align to bottom of container
      position: 'absolute',
      fontSize: 48,
      marginLeft: '5%',
      top: '14%',
      fontWeight: 'bold',

      // marginTop: 50,
      // marginRight: 70,
      // marginLeft: 30,

        // position: 'absolute',
        // left: 21,
        // top: 109,
        // width: 200,
        // height: 100,
        // fontSize: 48,
        // lineHeight: 58,
        // textAlign: 'left',
        // color: 'black',
        // fontWeight: 'bold',
        // backgroundColor: 'blue'
        // flex: 1,
        // // padding: 20,
        // backgroundColor: 'blue',
        // marginHorizontal: '80%',
        // marginLeft: 20,
        // marginTop: 20,
        // alignItems: 'center',
        // justifyContent: 'flex-end', // Align to bottom of container

    },
    buttonContainer: {
      position: 'absolute',
      bottom: 5,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',

    
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
    signout: {
      fontSize: 17,
      position: 'absolute',
      right: '10%',

    },
    signoutButton: {
      position: 'absolute',
      fontSize: 17,
      marginLeft: '80%',
      marginTop: '20%',
    },
    infoContainer: {

      justifyContent: 'center',
      alignItems: 'center',
      

    },
    info: {
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#f5f5f5',

      // paddingHorizontal: 10,
      // paddingVertical: 5,
      borderRadius: 10,

    },
  });
