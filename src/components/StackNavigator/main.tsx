import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeScreen } from "./screens/HomeScreen";
import StackNavigationDemo from "./StackNavigationDemo";
import TabNavigatorDemo from "../BottomTabNavigator/TabNavigatorDemo";
import DrawerNavigatorDemo from "../DraawerNavigator/DrawerNavigatorDemo";

export type RootStackParamList = {
    Home: undefined;
    StackDemo: undefined,
    TabDemo : undefined,
    DrawerDemo : undefined,
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator : React.FC = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="StackDemo" component={StackNavigationDemo}/>
            <Stack.Screen name="TabDemo" component={TabNavigatorDemo}/>
            <Stack.Screen name="DrawerDemo" component={DrawerNavigatorDemo}/>
        </Stack.Navigator>
    )
}

