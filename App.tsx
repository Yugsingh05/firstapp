/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Basic } from './src/components/Basic';

function App(): React.JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Basic/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default App;
