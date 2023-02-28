import React from 'react';
import { View, Text,Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Location from './Location';

// const handleButtonPress = () => {
//     Alert.alert(
//       'OOPS!',
//       'Sorry it is in Construction',
//       [
//         {
//           text: 'OK',
//           onPress: () => console.log('OK'),
//         },
//       ],
//       { cancelable: false }
//     );
//   };
  


export function EnableLocation() {
  const navigation = useNavigation();

  // const handleChange = () => {
  //   navigation.navigate('Back');
  // }
  const busInfo = () => {
    navigation.navigate('location');
  }

  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={require('./../assets/background.png')}>
    <View style={styles.container}>
        <Image style={styles.logo} source={require('./../assets/logo.png')} />

        <TouchableOpacity style={styles.bus_info} onPress={busInfo}>
          <Text style={styles.buttonText}>Bus info</Text>
        </TouchableOpacity>  

        <Text> {'\n'}NOTE: if you Can't fetch the location  {'\n'} please enable your mobile location {'\n'}{'\n'}</Text>

        <TouchableOpacity style={styles.enable_location} onPress={busInfo}>
          <Text style={styles.buttonText}>Enable Location</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%'
    },
    logo: {
      width: 80,
      height: 100
    },
    Text_Heading: {
      paddingBottom: 0,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 22,
      color: "gray",
    },
    EnableText: {
        paddingBottom: 0,
        textAlign: 'center',
        fontSize: 18,
        color: "gray",
        marginBottom: 18
      },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#f2f2f2',
    },
    bus_info: {
      width: '80%',
      height: 50,
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    enable_location: {
      paddingBottom: 0,
      width: '80%',
      height: 50,
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    button_create_account:{
      paddingTop: 30,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
