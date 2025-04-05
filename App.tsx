import 'react-native-reanimated'; // 👈 first!
import 'react-native-gesture-handler'; // 👈 second!



import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { Text, View } from 'react-native';
// import Todo from './src/components/Todo';
import { StackNavigator } from './src/components/StackNavigator/main';


function App(): React.JSX.Element {


  return (
 <NavigationContainer>
   <StackNavigator/>
 </NavigationContainer>
  );
}



export default App;
