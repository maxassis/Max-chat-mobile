import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import Chatlist from './src/pages/chatlist';

export default function App() {
  return (
    <>
      {/* <Login /> */}
      <Chatlist />
      <StatusBar style="light" translucent={false} backgroundColor='#212121' />
    </>
  );
}


