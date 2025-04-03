import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Button, Text } from 'react-native';
import { StackParamsList } from '../StackNavigationDemo';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type StackScreen2NavigationProps = StackNavigationProp<StackParamsList,'StackScreen2'>;

type StackScreen2RouteProps = RouteProp<StackParamsList,'StackScreen2'>;

const StackScreen2 : React.FC = () => {

    const navigate = useNavigation<StackScreen2NavigationProps>();
    const route = useRoute<StackScreen2RouteProps>();
  return (
   <>
    <Text>StackScreen2</Text>
    <Text>ID is : {route.params.itemId}</Text>
    <Button title={'Go to Screen1'} onPress={() => navigate.goBack()}/>
    </>

  );
}

export default StackScreen2