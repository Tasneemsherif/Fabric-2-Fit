import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, RefreshControl, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import styles from '../../styles/stylees';


const FabricSelectionPage = ({ navigation }) => {
  
  const [refreshed, setRefreshed] = useState(false);
  const [fabrics, setFabrics] = useState([
    //fabric images
    {
      id: '1',
      name: 'leather',
      price: '$15.99',
      image: require('../../assets/images/Leather.jpeg'), 
     
    },
    {
      id: '6',
      name: 'Linen',
      price: '$15.99',
      image: require('../../assets/images/whiteLinen.png'), 
    },
    {
      id: '7',
      name: 'Cotton Blend',
      price: '$15.99',
      image: require('../../assets/images/Green_Cotton_Blend.jpg'), 
    },
    {
      id: '5',
      name: 'Wool Blend',
      price: '$15.99',
      image: require('../../assets/images/whiteWool.jpg'), 
    },
    {
      id: '4',
      name: 'silk Satin',
      price: '$15.99',
      image: require('../../assets/images/silkStain.jpg'), 
    },
    {
      id: '3',
      name: 'Velvet',
      price: '$15.99',
      image: require('../../assets/images/Velvet.jpg'), 
    },
    {
      id: '2',
      name: 'TUlle ',
      price: '$29.99',
      image: require('../../assets/images/Tulle.jpg'), 
    },
    {
      id: '8',
      name: 'Denim',
      price: '$29.99',
      image: require('../../assets/images/denim.jpg'), 
    },
    {
      id: '9',
      name: 'Chiffon',
      price: '$29.99',
      image: require('../../assets/images/Chiffon.jpg'), 
    },
    {
      id: '10',
      name: 'Stain',
      price: '$29.99',
      image: require('../../assets/images/Satin.jpg'), 
    },
  ]);
  const [data, setData] = useState(fabrics);

  const refreshhandler = () => {
    setRefreshed(true);
    setTimeout(() => {
      setData (fabrics);
      setRefreshed(false);
    }, 1000);
  };
  const handleFabricSelection = (fabric) => {
    navigation.navigate('FabricDetails', { fabric });
  };

  const renderFabricItem = ({ item }) => (
    <TouchableOpacity style={styles.fabricItem} onPress={() => handleFabricSelection(item)}>
      <Image source={item.image} style={styles.fabricImage} />
      <Text style={styles.fabricName}>{item.name}</Text>
      <Text style={styles.fabricPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Select Fabric</Text>
      <FlatList
        data={fabrics}
        renderItem={renderFabricItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.fabricList}
        //refreshing option
        refreshControl={
          <RefreshControl refreshing={refreshed} onRefresh={refreshhandler} title="Refreshing..." />
        }
      />
      </View>
    
  );
};


export default FabricSelectionPage;