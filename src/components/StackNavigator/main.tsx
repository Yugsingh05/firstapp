import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeScreen } from "./screens/HomeScreen";
import StackNavigationDemo from "./StackNavigationDemo";

export type RootStackParamList = {
    Home: undefined;
    StackDemo: undefined
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator : React.FC = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="StackDemo" component={StackNavigationDemo}/>
        </Stack.Navigator>
    )
}

