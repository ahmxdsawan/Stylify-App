import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WardrobeScreen from './WardrobeScreen';
import OutfitScreen from './OutfitScreen';
import UploadScreen from './UploadScreen';
import AccountScreen from './AccountScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Wardrobe"
          component={WardrobeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wardrobe" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Outfit"
          component={OutfitScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="tshirt-crew" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Upload"
          component={UploadScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="upload" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
