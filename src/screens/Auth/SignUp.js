//import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Pressable, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Formik } from 'formik';
import * as Yup from 'yup';
//import styles from './styles'
import faceBook from '../../assets/images/facebook.png';
import Google from '../../assets/images/google.png';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string().email('Invalid email').required('please enter valid email'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}/, 'Password must contain at least 8 characters, one uppercase,one lowercase,one number and one special case character')
    .required('Please enter your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),

});

const SignUp = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleSignUp = () => {
      navigation.navigate('HomePage'); 
    };
    return (
      <Formik initialValues={{
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignupSchema}
      >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldTouched }) => (
       <SafeAreaView style={styles.container}> 
       <ScrollView
         showsVerticalScrollIndicator={false}
         style={{paddingHorizontal: 5}}>
      
      
      <Text style = {styles.title} >Create Account </Text>
      <TextInput 
        style={ styles.input }
      placeholder='Enter your name' 
      value={values.name}
      onChangeText={handleChange('name')}
      keyboardType='default'
      placeholderTextColor={'white'}
      OnBlur={() => setFieldTouched('name')}
      />
     {errors.name &&  (
        <Text style={{fontSize: 13,
          fontWeight: 'bold',
          color: 'red',
          flexWrap: 'wrap',
          paddingTop: 1,
        
        }}>{errors.name}</Text>
     )}
     
      <TextInput
      style={ styles.input }
      placeholder='+20 000 000 0000'
      placeholderTextColor={'white'}
      keyboardType='numeric'
      />
      
      <TextInput 
        style={ styles.input }
        shadowColor= 'white'
        shadowOpacity= {0.5}
        placeholder="Enter your email"
        value={values.email}
        onChangeText={handleChange('email')}
        placeholderTextColor={'white'}
        keyboardType='email-address'
        OnBlur={() => setFieldTouched('email')}
      />
      { errors.email &&  (
        <Text style={{fontSize: 12,
          fontWeight: 'bold',
          color: '#FF0D10',
          flexWrap: "nowrap",
        }}>{errors.email}</Text>
     )} 
     <View  style={styles.input}>
      <TextInput 
        
        placeholder="Enter your password"
        value={values.password}
        onChangeText={handleChange('password')}
        autoCapitalize='none'
        placeholderTextColor={'white'}
        secureTextEntry={true}
        OnBlur={() => setFieldTouched('password')}         
        />
        {errors.password &&  (
        <Text style={{fontSize: 13,
          fontWeight: 'bold',
          color: 'red',
          

          
        }}>{errors.password}</Text>
     )}
      
      <TouchableOpacity
      onPress={() => setIsPasswordShown(!isPasswordShown)}
      style={{position: 'absolute', right: 10, top:5}}>
        {isPasswordShown == true ? (
          <Ionicons name="eye-off" size={24} color="white" />
        ) : (
          <Ionicons name="eye" size={24} color="white" />
        )
        }
      </TouchableOpacity>
      </View>
      <View  style= {styles.input} >
      <TextInput
        
        placeholder="Confirm your password"
        placeholderTextColor={'white'}
        secureTextEntry={true}
        autoCapitalize='none'
        value={values.confirmPassword}
      onChangeText={handleChange('confirmPassword')}
      OnBlur={() => setFieldTouched('confirmPassword')}
        />
        { errors.confirmPassword &&  (
        <Text style={{fontSize: 13,
          fontWeight: 'bold',
          color: 'red',
          flexWrap: 'wrap',
          paddingTop: 1,
          alignItems:'stretch'
        }}>{errors.confirmPassword}</Text>
        )}
      <TouchableOpacity
      onPress={() => setIsPasswordShown(!isPasswordShown)}
      style={{position: 'absolute', right: 10, top:5}}>
        {isPasswordShown == true ? (
          <Ionicons name="eye-off" size={24} color="white" />
        ) : (
          <Ionicons name="eye" size={24} color="white" />
        )
        }
      </TouchableOpacity>
      </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
        <CheckBox style ={{marginRight: 8, marginBottom: 10, marginTop:10}}
        value={isChecked} onValueChange={setIsChecked} 
        color={isChecked ? '#8b4513' : 'white'}
        />
        <Text style = {{color: 'white', marginBottom: 10, marginTop:10}}>I aggree to the terms and conditions
          
        </Text>
        </View>
        <Pressable onPress={handleSignUp}>
                        <Text style={{
                            fontSize: 16,
                            color: "#8b4513",
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>SignUp</Text>
                    </Pressable>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: "white",
                            justifyContent:'center'
                        }}
                    />
          <Text style={{ fontSize: 14, color:'white', marginHorizontal:20 }}>Or Sign up with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: "white",
                            marginHorizontal: 100,
                            justifyContent: 'center',
                            alignItems:'center',
                            paddingLeft: 20,
                            paddingRight:10
                            
                        }}
                    />
                </View>
      <View style={{flexDirection: 'row', justifyContent:'center'}}>
        <TouchableOpacity
          onPress={() => console.log('pressed')}
          style={{flex:1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          height: 40,
          borderRadius: 60,
          borderWidth: 1,
          borderColor: 'white',
          marginRight: 20,
          marginLeft: 20}}
        >
          <Image 
          source={faceBook}
          style={{width: 30, height: 30, marginRight: 10}}
          />
          <Text>facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => console.log('pressed')}
          style={{flex:1
          ,alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          height: 40,
          borderRadius: 60,
          borderWidth: 1,
          marginRight: 4,
          borderColor: 'white',
          marginLeft: 20,
          marginRight:20}}
        >
          <Image
          source={Google}
          style={{width: 25, height: 25}}
          />
          <Text>google</Text>
          </TouchableOpacity>
          </View>
          <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Already have an account ?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: "#8b4513",
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
      <StatusBar style="auto" />
   
    </ScrollView>
    </SafeAreaView>
     )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9967a',
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  input:{
    width: '99%',
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#e9967a',

  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8b4513',
    marginBottom: 20,
    paddingTop: 20,
    marginTop: 20,
    justifyContent:'center',
    alignItems:'center'

  },
  Shadow:{
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: '#e9967a',
    flexBasis: 'auto',
  },
});

export default SignUp;

