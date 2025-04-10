
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TaskScreen from './TaskScreen';
import ProjectScreen from './ProjectList';


const BottomTab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
   
  <BottomTab.Navigator>
    <BottomTab.Screen name={'TaskScreen'} component={TaskScreen}/>
    <BottomTab.Screen name={'ProjectScreen'} component={ProjectScreen}/>
  </BottomTab.Navigator>

  )
}

export default RootNavigator