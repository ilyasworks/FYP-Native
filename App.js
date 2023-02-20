import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import Login from './components/login';
import Show from './components/Test';

const App = () => {
  return (
    <View style={{ flex: 1 , justifyContent: 'center' }}>
            {/* <Show/> */}
      <Login/>
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
