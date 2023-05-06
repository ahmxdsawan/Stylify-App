import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function WardrobeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screen} >Wardrobe</Text>
      <Text style={styles.text}>All∨</Text>
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
        position: 'absolute',
        left: 35,
        top: 193,
        width: 312,
        height: 37,
        fontSize: 24,
        textAlign: 'left',
        color: 'black',

    }
  });
