import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../main'

type HomeScreenParamsList = StackNavigationProp<RootStackParamList,'Home'>

export const HomeScreen:React.FC = () => {

  const navigate = useNavigation<HomeScreenParamsList>();
  return (
<View style={styles.container}>
    <Text style={styles.text}>HomeScreen</Text>
    <Button title='Go to RouterDemo' onPress={() => navigate.navigate('StackDemo')}/>
      <Button title='Go to TabDemo' onPress={() => navigate.navigate('TabDemo')}/>
</View>
  )
}


const styles = StyleSheet.create({
  container : {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100%',
  },
  text : {
    fontWeight:'bold',
    fontSize :25,
  }
})
