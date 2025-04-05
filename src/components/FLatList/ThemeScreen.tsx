import React from 'react'
import { Switch, Text, View } from 'react-native'
import { useTheme } from './ThemeContext'

const ThemeScreen : React.FC = () => {

  const {theme,toggleTheme} = useTheme();

  const DarkMode = theme === 'dark' ? true : false;

  const changeTheme = () => {
    toggleTheme();
  };

  console.log("ThemeScreen : ", theme);
  return (
   <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, theme === 'dark' ? {backgroundColor: '#000'} : {backgroundColor: '#fff'}]}>
     <Text style={{color: theme === 'dark' ? '#fff' : '#000'}}>ThemeScreen : {theme}</Text>
     <Switch value={DarkMode} onValueChange={changeTheme} 
     trackColor={{false: '#767577', true: '#81b0ff'}} 
     thumbColor={DarkMode ? '#f5dd4b' : '#f4f3f4'}/>

   </View>
  )
}

export default ThemeScreen