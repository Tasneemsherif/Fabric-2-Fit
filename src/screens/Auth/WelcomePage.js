import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import dress from '../../assets/images/tempsnip.png';

const WelcomePage = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source = {dress} style={{ width: 390, height: 500, resizeMode:'contain' }} />
      <Text style={styles.title}>Welcome to Fabric2Fit</Text>
      <Text style={styles.subtitle}>Your Personalized Clothing Solution</Text>
      <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
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
color: '#6d4114',
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
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#d17752', 
  },
  getStartedButton: {
    backgroundColor: '#f3d6d2', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    borderColor: '#d17752',
    borderWidth: 2,
    marginHorizontal:120,
  },
  getStartedButtonText: {
    color: '#6d4114', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomePage;
