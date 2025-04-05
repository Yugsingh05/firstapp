import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import FlatListHome from './FlatListHome'
import { FlatListDetails } from './FlatListDetails'
import SectionListDemo from '../SectionList/main'

export type FlatListNavigationProps = {
    Home : undefined,
    Details : undefined,
    SectionList : undefined
}

const Stack = createStackNavigator<FlatListNavigationProps>();

const FlatListDemo = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={FlatListHome} />
        <Stack.Screen name="Details" component={FlatListDetails} />
        <Stack.Screen name="SectionList" component={SectionListDemo} /> 
    </Stack.Navigator>
  )
}

export default FlatListDemo