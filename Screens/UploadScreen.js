import React from 'react';
import { StyleSheet, Text, View, Button, Container, SafeAreaView, Alert } from 'react-native';

export default function UploadScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.screen}>Upload</Text>
        <Button 
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        ></Button>
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