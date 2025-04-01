import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

export const Basic = () => {
  const [count, setCount] = useState<number>(0);

  const [value,setValue] = useState<string>('');
  console.log(value);

  return (
    <>
      <View style={styles.subContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>

      <Text style={styles.head}>
        Hello this is my first Native <Text style={styles.bold}>app</Text>
      </Text>
      <Image source={require('../../assets/img.png')} style={styles.img} />
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRdeplaZU60qep4hoPfJBAAItDao8ddlCRw&s',
        }}
        style={styles.img}
      />

      <Button
        title={'Click me'}
        color={'navy'}
        onPress={() => setCount(prev => prev + 1)}
      />
      <Text>Count is {count}</Text>
      <TextInput value={value} placeholder='type something here ...' onChangeText={setValue} style={styles.input}/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  box1: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: 'orange',
  },
  box3: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
  head: {
    fontSize: 19,
    marginLeft: 5,
    marginTop: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  img: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  input : {
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10
  }
});
