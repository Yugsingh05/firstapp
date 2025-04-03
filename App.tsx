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
