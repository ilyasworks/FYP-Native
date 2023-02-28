// import React, { Text } from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import WebView from 'react-native-webview';
// import MapboxGL from '@rnmapbox/maps';
import MapView, { Marker } from 'react-native-maps';
import Logo from '../assets/logo.png';


// MapboxGL.setAccessToken('pk.eyJ1Ijoic2h1amFhdGFsaS1kZXYiLCJhIjoiY2w5MmltcHZlMDJqejNvcnVyODZmdGR3dyJ9.gp6mXIt4W73UlzTlDe-mFw');

export default function Location() {

  var markers = [
    {
      latitude: 45.65,
      longitude: -78.90,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive'
    }
  ];
    return (<View>
        <Text> this is text</Text> 
        <Text> this is text</Text>
        <Text> this is text</Text>
        <Text> this is text</Text>
        <Text> this is text</Text>
        <Text> this is text</Text>
        <MapView
        style={styles.map}
          region={{
            latitude: 45.65,
            longitude: -78.90,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          annotations={markers}
          // onRegionChange={this.onRegionChange}
        >
          
            <Marker
              coordinate={{
                latitude: 45.65,
                longitude: -78.90
              }}
              // image={require('../assets/logo.png')}
              title='title'
              description='description' 
            />
       
        </MapView>
        {/* <MapboxGL.MapView style={styles.map} /> */}
        {/* <WebView
        source={{
          uri: 'https://www.google.com/' 
        }}
        style={{marginTop: 20}}
      /> */}
    </View>)
}


const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 600
  }
});
