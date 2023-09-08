import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const UserDetailsScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/1')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {userData && (
        <View>
          <Image source={{ uri: userData.avatar_url }} style={styles.avatar} />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.location}>{userData.location}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  location: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default UserDetailsScreen;
