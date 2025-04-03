import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Button, Text } from 'react-native'
import { StackParamsList } from '../StackNavigationDemo'

 type Stack1NavigationProps = StackNavigationProp<StackParamsList, 'StackScreen1'>
const StackScreen1 : React.FC = () => {
    const navigate = useNavigation<Stack1NavigationProps>();
  return (
   <>
    <Text>StackScreen1</Text>
    <Button title='Go to Screen2' onPress={() => navigate.navigate('StackScreen2',{itemId:106})}/></>
  )
}

export default StackScreen1