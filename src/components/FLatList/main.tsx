import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import FlatListHome from './FlatListHome'
import { FlatListDetails } from './FlatListDetails'
import SectionListDemo from '../SectionList/main'
import PressableDemo from '../Pressable'
import ModalDemo from '../Modal'
import TopToRefresh from './TopToRefresh'
import ThemeScreen from './ThemeScreen'
import AnimatedDemo from '../Animated/demo'
import CombinedAnimate from '../Animated/CombinedAnimate'
import GeastureAnimate from '../Animated/geastureAnimate'
import ReAnimated1 from '../Animated/ReAnimated1'
import { ReAnimatedGuesture } from '../Animated/ReAnimatedGuesture'

export type FlatListNavigationProps = {
    Home : undefined,
    Details : undefined,
    SectionList : undefined,
    PressableDemo : undefined,
    ModalDemo : undefined,
    TopToRefresh : undefined,
    ThemeScreen : undefined,
    AnimatedDemo : undefined,
    CombinedAnimate : undefined,
    GuestureAnimate : undefined,
    ReAnimate: undefined,
    ReAnimatedGuesture : undefined,
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
        <Stack.Screen name="AnimatedDemo" component={AnimatedDemo} />
        <Stack.Screen name="CombinedAnimate" component={CombinedAnimate} />
        <Stack.Screen name="GuestureAnimate" component={GeastureAnimate} />
        <Stack.Screen name="ReAnimate" component={ReAnimated1} />
        <Stack.Screen name="ReAnimatedGuesture" component={ReAnimatedGuesture} />
    </Stack.Navigator>
  )
}

export default FlatListDemo