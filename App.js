import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import Login from './components/login';
import Show from './components/Test';

const App = () => {
  return (
    <View style={{ 
      flex: 1 , 
      justifyContent: 'center' }}>
        <ImageBackground 
      style={styles.backgroundImage} 
      source={require('./assets/background.png')}>
      {/* <Show/> */}
      <Login/>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  }
});

export default App;
