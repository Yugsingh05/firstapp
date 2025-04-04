import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import TabScreen1 from './TabScreen1';
import TabScreen2 from './TabScreen2';

export type BottomTabParamList = {
    TabScreen1: undefined;
    TabScreen2: undefined;
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigatorDemo : React.FC = () => {
  return (
   <BottomTab.Navigator>
    <BottomTab.Screen name={'TabScreen1'} component={TabScreen1}/>
    <BottomTab.Screen name={'TabScreen2'} component={TabScreen2}/>
   </BottomTab.Navigator>
  )
}

export default TabNavigatorDemo;