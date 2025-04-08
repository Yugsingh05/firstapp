import React, {useRef} from 'react';
import {
  Animated,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const AnimatedDemo = () => {
  const FadeIn = useRef(new Animated.Value(0)).current;
  const Transalte = useRef(new Animated.Value(0)).current;
  const ScaleRef  = useRef(new Animated.Value(1)).current;
  const RotateRef  = useRef(new Animated.Value(1)).current;
  const Sprinfgref = useRef(new Animated.Value(0)).current;

  const spin = RotateRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
  const handelFadeIn = () => {
    Animated.timing(FadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handelFadeOut = () => {
    Animated.timing(FadeIn, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleTransalte = () => {
    Animated.timing(Transalte, {
      toValue: 100,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      useNativeDriver: true,
    }).start();
  };

  const handleTransalteMinus = () => {
    Animated.timing(Transalte, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleScale = () => {
    Animated.sequence([
        Animated.timing(ScaleRef,{
            toValue : 2,
            duration : 500,
            useNativeDriver : true,
        }),
        Animated.timing(ScaleRef,{
            toValue : 0.5,
            duration : 500,
            useNativeDriver : true,
        }),
        Animated.timing(ScaleRef,{
            toValue : 1,
            duration : 500,
            useNativeDriver : true,
        })
    ]).start();
  }


  const handleRotate = () => {
    Animated.timing(RotateRef, {
        toValue :1,
        duration : 1000,
        useNativeDriver : true,
    }).start(() => {
        RotateRef.setValue(0); // Reset to initial value after rotation
        // handleRotate(); // Call again for continuous rotation
    })
  };

  const handleSpring = () => {
    Animated.spring(Sprinfgref, {
        toValue : 100,
        friction : 2,
        tension : 50,
        useNativeDriver : true,
    }).start(() => {
        Sprinfgref.setValue(0); // Reset to initial value after spring
    })
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Basic Animation Demo</Text>

      <Animated.View style={[styles.box, styles.fadeBox, {opacity: FadeIn}]} />

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handelFadeIn}>
          <Text style={styles.buttonText}> Fade IN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handelFadeOut}>
          <Text style={styles.buttonText}> Fade OUT</Text>
        </TouchableOpacity>
      </View>

      <Animated.View
        style={[
          styles.box,
          styles.transalteBox,
          {
            transform: [
              {
                translateX: Transalte,
              },
            ],
          },
          {marginTop: 40},
        ]}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleTransalte}>
          <Text style={styles.buttonText}> Translate + </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTransalteMinus}>
          <Text style={styles.buttonText}> Transalte -</Text>
        </TouchableOpacity>
      </View>

      {/* //ScaleBox */}
      <Animated.View
        style={[
          styles.box,
          styles.ScaleBox,
          {
            transform: [
              {
                scale: ScaleRef,
              },
            ],
          },
          {marginTop: 40},
        ]}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleScale}>
          <Text style={styles.buttonText}> Scale </Text>
        </TouchableOpacity>
       
      </View>


      <Animated.View
        style={[
          styles.box,
          styles.RotateBox,
          {
            transform: [
              {
                rotate: spin,
              },
            ],
          },
          {marginTop: 40},
        ]}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleRotate}>
          <Text style={styles.buttonText}> Rotate </Text>
        </TouchableOpacity>
       
      </View>


      <Animated.View
        style={[
          styles.box,
          styles.SpringBox,
          {
            transform: [
              {
                translateX: Sprinfgref,
              },
            ],
          },
          {marginTop: 40},
        ]}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleSpring}>
          <Text style={styles.buttonText}> Spin </Text>
        </TouchableOpacity>
       
      </View>



    </ScrollView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
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
  fadeBox: {
    backgroundColor: '#3498db',
  },
  transalteBox: {
    backgroundColor: 'green',
  },
  ScaleBox: {
    backgroundColor: '#ffbd33',
  },
  RotateBox : {
    backgroundColor: '#f5ddef',
  },
  SpringBox : {
    backgroundColor: '#f5ddaf',
  }
});
export default AnimatedDemo;
