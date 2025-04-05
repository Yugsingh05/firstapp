import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import FlatListHome from './FlatListHome'
import { FlatListDetails } from './FlatListDetails'

export type FlatListNavigationProps = {
    Home : undefined,
    Details : undefined
}

const Stack = createStackNavigator<FlatListNavigationProps>();

const FlatListDemo = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={FlatListHome} />
        <Stack.Screen name="Details" component={FlatListDetails} />
    </Stack.Navigator>
  )
}

export default FlatListDemo