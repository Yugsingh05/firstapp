import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

const PressableDemo : React.FC= () => {
  return (
   <Pressable style={({ pressed }) => [
    styles.container,
    { backgroundColor: pressed ? 'blue' : '#ff45', padding: 20 },
   ]}>
    {({pressed}) => (
      <Text style={[styles.text, pressed && styles.pressed]}>{pressed ? 'Pressed' : 'Not Pressed'}</Text>
    )}
   </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  pressed: {
    color: 'red',
  },
})

export default PressableDemo
