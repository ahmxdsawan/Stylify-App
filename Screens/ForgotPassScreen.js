import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

const ForgotPassScreen = () => {

    const [email, setEmail] = useState('')

    const handleForgotPassword = () => {
 
            auth
            .sendPasswordResetEmail(email)
            .then(userCredentials => {
                const user = userCredentials.user;
              })

              
        
      }

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <TouchableOpacity onPress={handleForgotPassword} style={styles.button}>
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgotPassScreen;

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 10,
        marginTop: '30%',
      },
    button: {
        backgroundColor: '#0782F9',
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: '5%',
        marginLeft: '25%',
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
});
