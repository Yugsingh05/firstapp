import React from 'react'
import { Text, View } from 'react-native'
import { DrawerParamList } from './DrawerNavigatorDemo';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type DrawerList2Params = {
  navigation: DrawerNavigationProp<DrawerParamList, 'DrawerScreen2'>;
}


const DrawerScreen2 :React.FC = () => {
  return (
   <View>
     <Text>DrawerScreen2</Text>
   </View>
  )
}

export default DrawerScreen2