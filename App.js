import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import Home from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
