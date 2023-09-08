import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingHorizontal: 20,
      paddingTop: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      paddingHorizontal: 10,
      paddingTop: 20,
    },
    fabricList: {
      flexGrow: 1,
    },
    fabricItem: {
      flex: 1,
      margin: 10,
      padding: 15,
      backgroundColor: '#f4f4f4',
      borderRadius: 10,
      alignItems: 'center',
    },
    fabricImage: {
      width: 120,
      height: 120,
      marginBottom: 10,
      borderRadius: 5,
    },
    fabricName: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    fabricPrice: {
      fontSize: 14,
      color: '#666666',
    },
  });
  
 export default styles;