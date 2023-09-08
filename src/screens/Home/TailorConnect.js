import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TailorConnectionPage = ({ route, navigation }) => {
  const { fabric } = route.params;

  const [measurements, setMeasurements] = useState({
    bust: '',
    waist: '',
    hips: '',
    length: '',
  });

  const handleConnectTailor = () => {
    // Perform tailor connection logic here (e.g., API call)
    // Once connected, you can navigate to the order summary screen
    navigation.navigate('OrderSummary', { fabric, measurements });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect with Tailor</Text>
      <Text style={styles.subtitle}>Fabric: {fabric.name}</Text>
      <TextInput
        placeholder="Bust (inches)"
        value={measurements.bust}
        onChangeText={(text) => setMeasurements({ ...measurements, bust: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Waist (inches)"
        value={measurements.waist}
        onChangeText={(text) => setMeasurements({ ...measurements, waist: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Hips (inches)"
        value={measurements.hips}
        onChangeText={(text) => setMeasurements({ ...measurements, hips: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Length (inches)"
        value={measurements.length}
        onChangeText={(text) => setMeasurements({ ...measurements, length: text })}
        style={styles.input}
      />
      <TouchableOpacity style={styles.connectButton} onPress={handleConnectTailor}>
        <Text style={styles.connectButtonText}>Connect with Tailor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666666',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  connectButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  connectButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TailorConnectionPage;
