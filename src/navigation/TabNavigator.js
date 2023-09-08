import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Notifications from "../screens/Home/Notifications";
import Favourite from "../screens/Home/Favourite";
import Cart from "../screens/Home/Cart"; 
import HomeScreen from "../screens/Home/HomePage";
import FabricDetails from "../screens/Home/FabricDetails";
import TailorConnect from "../screens/Home/TailorConnect";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FabricDetails"
          component={FabricDetails}
          options={({route}) => ({
            name: route.params?.name,
          })}
        />
      </Stack.Navigator>
    );
  };


const TabNavigator = () => {
    return (
        
        <Tab.Navigator screenOptions={{headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle:{backgroundColor: '#0083C9',},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#77C3EC',
        }}>
        <Tab.Screen name="Home2" component={HomeStack} options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#0083C9',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
        <Tab.Screen name="Notifications" component={Notifications} 
        options={{
            tabBarBadge: 3,
            tabBarIcon:({color, size}) => (
            <Ionicons name="notifications-outline" color={color} size={size} />),
        }}/>
        <Tab.Screen name="Cart" component={Cart} options={{
            tabBarIcon:({color, size}) => (
            <Ionicons name="cart-outline" color={color} size={size} />),
        }}/>
        <Tab.Screen name="Favourite" component={Favourite} 
        options={{
            tabBarIcon:({color, size}) => (
            <Ionicons name="heart-outline" color={color} size={size} />),
        }}/>
        </Tab.Navigator>
        
    );
    }

    const getTabBarVisibility = route => {
        // console.log(route);
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
        // console.log(routeName);
      
        if( routeName == 'FabricDetails' ) {
          return 'none';
        }
        return 'flex';
      };

export default TabNavigator;