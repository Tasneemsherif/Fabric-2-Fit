import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import SwitchNavigator from "./src/navigation/SwitchNavigator";
//import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

import AuthNavigation from "./src/navigation/AuthNavigation";
import AppNavigation from "./src/navigation/AppNavigation";


function App () {
  return (
    
     //<StatusBar style="light" animated={true} />
      <NavigationContainer>
         {/*<SwitchNavigator screenProps={{ isAuthenticated }} />*/}
       <AppNavigation/>
         {/*<AuthNavigation /> */}
      </NavigationContainer>
     
  );
};

export default App;