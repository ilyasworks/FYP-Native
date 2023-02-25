import { Text, View, Button, Linking } from 'react-native';

export default function Show() {
  return (
    <View>
    <Text>WELCOME TO UOBS GPS TRACKER</Text>
    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.sinotrack.com')}>
    </Text>
    </View>
  );
}

