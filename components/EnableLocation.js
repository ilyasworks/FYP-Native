import React from 'react';
import { View, Text,Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const handleButtonPress = () => {
    Alert.alert(
      'OOPS!',
      'Sorry it is in Construction',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK'),
        },
      ],
      { cancelable: false }
    );
  };
  

export default function EnableLocation() {
  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={require('./../assets/background.png')}>
    <View style={styles.container}>
        <Image style={styles.logo} source={require('./../assets/logo.png')} />
        <Text style={styles.  Text_Heading}> Please</Text>
        <Text style={styles.EnableText}>Enable your Location</Text>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Enable</Text>
        </TouchableOpacity>   

{/* Temp Button */}
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
    button: {
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
  
