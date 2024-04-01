import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import Chatlist from './src/pages/chatlist';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import Chat from './src/pages/chat';
import Notes from './src/pages/notes';
// import Chatbot from './src/pages/chatbot';
import Nps from './src/pages/nps';
import Delegated from './src/pages/delegated';
import Media from './src/pages/media';
import Funnel from './src/pages/funnel';
import Informations from './src/pages/informations';
import Chatbot from './src/pages/chatbot';
import Dashboard from './src/pages/dashboard';
import Routes from "./src/routes";

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaProvider>
       <NavigationContainer>
      {/* <Login /> */}
      {/* <Chatlist /> */}
      {/* <Chat /> */}
      {/* <Notes /> */}
      {/* <Nps /> */}
      {/* <Delegated /> */}
      {/* <Media /> */}
      {/* <Funnel /> */}
      {/* <Informations /> */}
      {/* <Chatbot /> */}
      {/* <Dashboard /> */}
      <Routes />
      <StatusBar style="light" translucent={false} backgroundColor='#212121' />
      </NavigationContainer> 
      </SafeAreaProvider>
  );
}


