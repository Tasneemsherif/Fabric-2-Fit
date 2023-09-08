import React from "react";

import HomePage from "../screens/Home/HomePage";
import Profile from "../screens/Home/Profile";
import Massages from "../screens/Home/Massages";
import Orders from "../screens/Home/Orders";
import Settings from "../screens/Home/Settings";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import {profile, settings, massages, orders} from "../screens/Home";
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomDrawer from "../components/CustomDrawer";
import TabNavigator from "./TabNavigator";
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} /> }
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#77C3EC',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#000',
            drawerInactiveBackgroundColor: '#fff',
            drawerLabelStyle: {
              fontSize: 16,
              marginLeft: -10,
            },
            }}>
        <Drawer.Screen name="Home" component={TabNavigator} 
        options= {{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen name="Profile" component={Profile} 
        options={{
            drawerIcon: ({color}) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
          />
        <Drawer.Screen name="Massages" component={Massages} 
        options={{
            drawerIcon: ({color}) => (
              <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
            ),
          }}/>
        <Drawer.Screen name="Orders" component={Orders} 
        options={{
            drawerIcon: ({color}) => (
              <Ionicons name="newspaper-outline"size={22} color={color} />
            ),
          }}/>
        <Drawer.Screen name="Settings" component={Settings} 
        options={{
            drawerIcon: ({color}) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
        />

        </Drawer.Navigator>
    );
}

export default AppNavigation;