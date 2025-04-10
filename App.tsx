import 'react-native-reanimated'; // 👈 first!
import 'react-native-gesture-handler'; // 👈 second!



import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { Text, View } from 'react-native';
// import Todo from './src/components/Todo';
// import { StackNavigator } from './src/components/StackNavigator/main';
// import FlatListDemo from './src/components/FLatList/main';
import { ThemeProvider } from './src/components/FLatList/ThemeContext';
import RootNavigator from './src/components/Redux/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/components/Redux/store/store';


function App(): React.JSX.Element {


  return (
    <Provider store={store}>
    <ThemeProvider>
 <NavigationContainer>
 <RootNavigator/>
 </NavigationContainer>
 </ThemeProvider>
 </Provider>
  );
}



export default App;
