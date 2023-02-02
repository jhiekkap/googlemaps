import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Demo from './Demo';

export default function App() {
  console.log('HELLO')
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your napp!</Text>
      <Demo/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
