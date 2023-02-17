import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle the login logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
       <View>
        <Text style={styles.bottomText}> Create an account</Text>
       </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 100

  },
  welcome_Note:{
    paddingBottom: 0,
    fontWeight: 'bold',
    fontSize: 30,
    color: "orange",
    color: '#1e90ff'

  },
  tag_line:{
    paddingBottom: 50,
    fontSize: 20,
    color: '#808080'
  },
  center_text:{
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomText:{
    paddingTop: 30,
    color: '#1e90ff'
  }
});
