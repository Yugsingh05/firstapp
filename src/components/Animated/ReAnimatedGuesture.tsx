import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'


type ContextType = {
    startX : number,
    startY : number,
}

export const ReAnimatedGuesture : React.FC = () => {

    const TranslateX = useSharedValue(0);
    const TranslateY = useSharedValue(0);

    const panGestureEventHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent,ContextType>({
        onStart : (_,context) => {
            context.startX = TranslateX.value;
            context.startY = TranslateY.value;
        },
        onActive : (event,context) => {
            TranslateX.value = context.startX + event.translationX;
            TranslateY.value = context.startY + event.translationY;
        },
        onEnd : () => {
            TranslateX.value = withSpring(0);
            TranslateY.value = withSpring(0);
        }
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform : [
                {
                    translateX : TranslateX.value,
                },
                {
                    translateY : TranslateY.value,
                }
            ]
        }
    })


  return (
   <GestureHandlerRootView style={styles.container}>
    <Text style={styles.text}>Drag the box below and release</Text>
 
    <PanGestureHandler onGestureEvent={panGestureEventHandler}>
    <Animated.View style={[styles.box, animatedStyle]} />
    </PanGestureHandler>
   </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F8',
      },
      text: {
        fontSize: 20,
        marginBottom: 20,
      },
      box : {
        width : 100,
        height : 100,
        backgroundColor : 'blue',
        borderRadius : 10,
        
    },
})