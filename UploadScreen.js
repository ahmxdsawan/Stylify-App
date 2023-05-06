import React from 'react';
import { StyleSheet, Text, View, Button, Container } from 'react-native';

export default function UploadScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.screen}>Upload</Text>
      </View>
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
        width: 250,
        height: 55,
        fontSize: 48,
        lineHeight: 58,
        textAlign: 'left',
        color: 'black',
        fontWeight: 'bold',
    },
  });
