import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import tasneem from '../../assets/images/Tasneem.jpg';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import Emoji from 'react-native-emoji';

import BannerSlider from '../../components/BannerSlider';
import {windowWidth} from '../../utils/Dimensions';

import {Fabrics, Tailors, Offers} from '../../model/Data';
import CustomSwitch from '../../components/CustomSwitch';
import ListItem from '../../components/ListItem';



export default function HomePage({navigation}) {
  const [fabricTab, setFabricTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setFabricTab(value);
  };

  const [refreshed, setRefreshed] = useState(false);


  const refreshhandler = () => {
    setRefreshed(true);
    setTimeout(() => {
      setData (Offers);
      setRefreshed(false);
    }, 1000);
    };

  const renderFabricItem = ({ item }) => (
    <TouchableOpacity  onPress={() => handleFabricSelection(item)}>
      <Image source={item.image}  />
      <Text >{item.name}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding:10, marginTop:10}}>
      <ScrollView style={{padding: 10}} >
        <View 
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            
          }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={tasneem} //change to user image
              style={{width: 50, height: 50}}
              imageStyle={{borderRadius: 20}}
            />
          </TouchableOpacity>
             <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 0.5,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 8,
            alignItems: 'center',
            alignContent: 'center',
            width: '85%',
            height: 40,
            marginTop: 5,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>

          {/*<Text style={{fontSize: 18}}>
            Hello Tasneem,{'\n'}
          </Text>*/}
          
        </View>

       
        <View
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{fontSize: 25, color: "#1E68B1", fontWeight:'bold' }}>
            Offers
            <Emoji name="fire" style={{fontSize: 25}} />
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0083C9', marginTop:10}}>See all</Text>
          </TouchableOpacity>
          
        </View>
        
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          marginBottom={10}
          marginTop={10}
          data={Offers}
          layout='stack'
          layoutCardOffset={9}
          renderItem={renderBanner}
          sliderWidth={windowWidth}
          itemWidth={350}
          loop={true}
          autoplay={true}
          
        />

        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Fabrics"
            option2="Tailors"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {fabricTab == 1 &&  Fabrics.map(item => ( 
          <ListItem 
            key={item.id}
            photo={item.poster}
            name={item.name}
            price={item.price}
            isFabric={item.isFabric}
            onPress={() => navigation.navigate('FabricDetails', {
              name: item.name,
              id: item.id,
            
            })}
          />
        ))}
        {fabricTab == 2 && Tailors.map(item => (
          <ListItem
            key={item.id}
            photo={item.poster}
            name={item.name}
            price={item.price}
            isFabric={item.isFabric}
            
            onPress={() => navigation.navigate('TailorDetails', {
              name: item.name,
              id: item.id,
            })}
          />
        ))
        }

      </ScrollView>
    </SafeAreaView>
  );
}


