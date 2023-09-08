import React from "react";
import { View, Text } from "react-native";

const FabricDetails = ({ navigation,route }) => {
    <View> 
        <Text>Fabric Details</Text>
        <Text>{route.params?.name}</Text>
    </View>
};
 
export default FabricDetails; 