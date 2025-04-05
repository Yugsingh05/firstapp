import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
const Drawer = createDrawerNavigator();

const HomeScreen = () => <Text>Home</Text>;
const SettingsScreen = () => <Text>Settings</Text>;

export default function App() {
  return (

      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>

  );
}