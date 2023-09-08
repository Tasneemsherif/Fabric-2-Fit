import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Tasneem from '../assets/images/Tasneem.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Background from '../assets/images/BackgroundDrawer2.jpg';

const CustomDrawer = (props) => {
    return (
        <View style={{flex: 1}} >
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#C0E5FE'}}>
        <ImageBackground
          source={Background}
          style={{padding: 20}}>
          <Image
            source={Tasneem}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              //fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            Tasneem Sherif
            </Text>
            <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                //fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              280 EGP
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
          </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
            <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#77C3EC'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                //fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                //fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
              </Text>
          </View>
        </TouchableOpacity>
      </View>
        </View>
    );
}

export default CustomDrawer;