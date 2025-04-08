import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CombinedAnimate : React.FC = () => {

  const RotateAndMoveRef = useRef(new Animated.Value(0)).current;
  const ScaleRef = useRef(new Animated.Value(1)).current;

  const MoveX = RotateAndMoveRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  })

  const MoveY = RotateAndMoveRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  })

  const Rotate = RotateAndMoveRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  const backgroundColor = RotateAndMoveRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'blue'],
  })


  const handleMovement =() => {
  Animated.timing(RotateAndMoveRef, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start(() => {
    Animated.timing(RotateAndMoveRef, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  });
 } ;

 const handleScale = () => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(ScaleRef, {
        toValue: 2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(ScaleRef, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ])
  ).start();
 }
 
 return (
   <View style={styles.container}>
     <Text style={styles.header}>CombinedAnimate</Text>
     <Animated.View style={[styles.box, {transform: [{translateX: MoveX}, {translateY: MoveY}, {rotate: Rotate},{scale: ScaleRef}], backgroundColor}]}/>

     <View style={styles.btnContainer}>
             <TouchableOpacity onPress={handleMovement}>
               <Text style={styles.buttonText}> Start Movement</Text>
             </TouchableOpacity>
     
             <TouchableOpacity onPress={handleScale}>
               <Text style={styles.buttonText}> Start Scale</Text>
             </TouchableOpacity>
           </View>

   </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flexGrow :1,
    justifyContent : 'center',
    alignItems : 'center',
    marginVertical : 20,
    backgroundColor : '#f0f0f0',
  },
  header : {
    fontSize : 24,
    fontWeight : 'bold',
    color : '#333',
    textAlign : 'center',
  },
  box: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    backgroundColor: 'red',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 4,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
})

export default CombinedAnimate