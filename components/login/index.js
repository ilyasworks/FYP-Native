import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnableLocation from '../EnableLocation';
import CreateAccount from '../CreateAccount'

const Home = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // Handle the login logic here
  //   console.log(`Email: ${email}, Password: ${password}`);
  // };

  const data = [
    {
      name: 'abc book',
      id: 11
    },
    {
      name: '123 book',
      id: 13
    },
    {
      name: '345 book',
      id: 12
    },
  ]
  const navigation = useNavigation();

  const handleChange = (id) => {
    const result = data.filter((book) => id === book.id)
    console.log({ result })
    navigation.navigate('Back');
  }
  const navigateToCreateAccount = () => {
    navigation.navigate('create_account');
  }
  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={require('./../../assets/background.png')}>
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.welcome_Note}> WELCOME</Text>
        <Text style={styles.center_text}> to</Text>
        <Text style={styles.tag_line}> UOBS GPS</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={() => handleChange(13)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {/* <View>
      <Button title="Go to new screen"  onPress={() => handleChange(13)}/>
      </View> */}
        <View>
          <Text style={styles.forget_password}> Forget Password</Text>
        </View>

        <View style={styles.button_create_account}> 
        <TouchableOpacity style={styles.button} onPress={navigateToCreateAccount}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>
        </View>
     
    </View>
    </ImageBackground>
  )
}

export default function Login() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Home} />
        <Stack.Screen name='Back' component={EnableLocation} />
        <Stack.Screen name='create_account' component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
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
  welcome_Note: {
    paddingBottom: 0,
    fontWeight: 'bold',
    fontSize: 30,
    color: "orange",
    color: '#1e90ff'

  },
  tag_line: {
    paddingBottom: 50,
    fontSize: 20,
    color: '#808080'
  },
  center_text: {
    padding: 10,
    fontSize: 20,
    color: '#808080'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f2f2f2',
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forget_password: {
    paddingTop: 10,
    color: '#1e90ff'
  }
});
