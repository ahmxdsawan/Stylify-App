import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screen}>Account</Text>
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
