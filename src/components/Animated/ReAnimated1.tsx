
import React from 'react'
import {  Button, StyleSheet, Text, View } from 'react-native'
import Animated, { cancelAnimation, Easing, useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'


const ReAnimated1 : React.FC = () => {

    const offset = useSharedValue(0);
    const rotation = useSharedValue(0);
    const scale= useSharedValue(1);


    const animateRef = useAnimatedRef<Animated.View>();

    const opacity = useDerivedValue(() => {
        return Math.sin((rotation.value * Math.PI)/180)/2 + 0.5;
    });

    const boxStyle = useAnimatedStyle(() => {
        return {
            transform : [
                {
                    translateX : offset.value,
                },
                {
                    rotateZ : `${rotation.value}deg`,
                },
                {
                    scale : scale.value,
                }
            ],
            opacity : opacity.value,
        }
    });

    const textStyle = useAnimatedStyle(() => {
        return {
            transform : [
                {
                    scale :1/scale.value,
                }
            ]
        }
    })

    const handleAnimation = () => {
        offset.value = withSpring(Math.random() * 200 - 100);

        rotation.value = withRepeat(
            withTiming(
                360,{
                    duration :2000,
                }
            ),
            -1,
            false
        );

        scale.value = withRepeat(
            withTiming(1.5,{
                duration : 1000,
                easing : Easing.linear
            }),
            -1,
            true
        )
    }

    const CancelAnimation = () => {
        cancelAnimation(offset);
        cancelAnimation(rotation);
        cancelAnimation(scale);
      
    }


    return (
       <View style={styles.container}> 
         <Text style={styles.text}>ReAnimated1</Text>
         <Animated.View ref={animateRef} style={[styles.box, boxStyle]} >
            <Animated.Text style={[styles.text, textStyle]}>Hello</Animated.Text>
         </Animated.View>

         <Button title='Animate' onPress={handleAnimation}/>
         <Button title='Cancel' onPress={CancelAnimation}/>
       </View>
       )}

       const styles = StyleSheet.create({
        container : {
            flex : 1,
            justifyContent : 'center',
            alignItems : 'center',
            backgroundColor : '#F4F4F8'
        },
        box : {
            width : 100,
            height : 100,
            backgroundColor : 'blue',
            borderRadius : 10,
        },
        text : {
            fontSize : 20,
            color : 'white',
        }
       })

export default ReAnimated1;
