import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WardrobeScreen from './Screens/WardrobeScreen';
import OutfitScreen from './Screens/OutfitScreen';
import UploadScreen from './Screens/UploadScreen';
import AccountScreen from './Screens/AccountScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import ForgotScreen from './Screens/ForgotPassScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Wardrobe" component={WardrobeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Outfit" component={OutfitScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Account" component={AccountScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Upload" component={UploadScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Forgot" component={ForgotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
