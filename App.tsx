import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';

export default function App() {
  return (
    <>
      <Login />
      <StatusBar style="light" translucent={false} backgroundColor='#212121' />
    </>
  );
}


