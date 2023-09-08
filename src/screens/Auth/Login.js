import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Pressable, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import CheckBox from 'expo-checkbox';
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import HomePage from '../Home/HomePage';
import dress from '../../assets/images/tempsnip.png';


const Login = ({ navigation }) => {

   const handleLogin = () => {
    navigation.navigate('App', { screen: 'HomePage' });
  };
const HandelforgotPassword = () => {
  navigation.navigate('ForgotPassword', {userId: 'X0001'});
};

const HandleSignUp = () => {
  navigation.navigate('SignUp');
};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.container}>
        <Text style= {{
          color: '#d17752',
          fontSize: 30,
          fontWeight: 'bold',
          paddingTop:30, 
          marginTop: 30, 
        }}>Fabric2Fit</Text>
        <Image
          source={dress}
          style={{ width: 300, height: 300, resizeMode:'contain' }}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
        />
        <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={true}
        />
        <TouchableOpacity
        style={styles.input}
        onPress={handleLogin}
        > 
        <Text style={{fontSize: 16, color: 'white',  marginHorizontal:120}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {HandelforgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Don't have an account?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: "#8b4513",
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>SignUp</Text>
                    </Pressable>
                </View>
        </View>
        </ScrollView>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3d6d2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
color: '#d17752',
fontSize: 30,
fontWeight: 'bold',
marginBottom: 20,
  },
  input:{
    width: '100%',
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#d17752',
    marginHorizontal:20,
  }
});


export default Login;