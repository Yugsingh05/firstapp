import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import FlatListHome from './FlatListHome'
import { FlatListDetails } from './FlatListDetails'
import SectionListDemo from '../SectionList/main'
import PressableDemo from '../Pressable'
import ModalDemo from '../Modal'
import TopToRefresh from './TopToRefresh'
import ThemeScreen from './ThemeScreen'

export type FlatListNavigationProps = {
    Home : undefined,
    Details : undefined,
    SectionList : undefined,
    PressableDemo : undefined,
    ModalDemo : undefined,
    TopToRefresh : undefined,
    ThemeScreen : undefined
}

const Stack = createStackNavigator<FlatListNavigationProps>();

const FlatListDemo = () => {
  return (
   
     <Stack.Navigator>
        <Stack.Screen name="Home" component={FlatListHome} />
        <Stack.Screen name="Details" component={FlatListDetails} />
        <Stack.Screen name="SectionList" component={SectionListDemo} /> 
        <Stack.Screen name="PressableDemo" component={PressableDemo} />
        <Stack.Screen name="ModalDemo" component={ModalDemo} />
        <Stack.Screen name="TopToRefresh" component={TopToRefresh} />
        <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
    </Stack.Navigator>
  )
}

export default FlatListDemo