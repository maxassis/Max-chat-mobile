import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import Chatlist from './src/pages/chatlist';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      {/* <Login /> */}
      <Chatlist />
      <StatusBar style="light" translucent={false} backgroundColor='#212121' />
    </>
  );
}


