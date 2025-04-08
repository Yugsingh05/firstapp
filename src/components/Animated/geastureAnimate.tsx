import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';

const GeastureAnimate = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>GeastureAnimate</Text>
      <Text style={styles.headerText}>Drag the box</Text>

      <Animated.View
        style={[styles.box, pan.getLayout()]}
        {...panResponder.panHandlers}>
        <Text style={styles.boxText}>Drag ME</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
  boxText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GeastureAnimate;
