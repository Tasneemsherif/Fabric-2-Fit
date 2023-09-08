import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomePage from "../screens/Auth/WelcomePage";
import Login from "../screens/Auth/Login";
import SignUp from "../screens/Auth/SignUp";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import TabNavigator from "./TabNavigator";
import HomePage from "../screens/Home/HomePage";
import AppNavigation from "./AppNavigation";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return ( 
        <Stack.Navigator
            initialRouteName="WelcomePage"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
        );
    }

export default AuthNavigation;
