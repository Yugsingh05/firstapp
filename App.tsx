import 'react-native-reanimated'; // 👈 first!
import 'react-native-gesture-handler'; // 👈 second!



import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { Text, View } from 'react-native';
// import Todo from './src/components/Todo';
// import { StackNavigator } from './src/components/StackNavigator/main';
import FlatListDemo from './src/components/FLatList/main';
import { ThemeProvider } from './src/components/FLatList/ThemeContext';


function App(): React.JSX.Element {


  return (
    <ThemeProvider>
 <NavigationContainer>
  <FlatListDemo/>
 </NavigationContainer>
 </ThemeProvider>
  );
}



export default App;
