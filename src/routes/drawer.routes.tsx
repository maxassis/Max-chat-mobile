import { createDrawerNavigator,  DrawerItemList } from '@react-navigation/drawer';
import Chatlist from '../pages/chatlist';
import Login from '../pages/login';
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Dashboard from '../pages/dashboard';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  function signout() {
    Alert.alert("Deseja sair do App ?", "", [
      {
        text: "CANCELAR",
        style: "cancel",
      },
      {
        text: "SIM",
        onPress: () => {
          // AsyncStorage.removeItem("@Cg:token");
          // authStore();
        },
      },
    ]);
  }

  return (
    <Drawer.Navigator
    drawerContent={(props) => {
      return (
        <SafeAreaView>
          <View className='h-[210px] w-full justify-center items-center bg-[#212121]'>
            <Image className='h-[100px] w-[100px] rounded-full mb-[14px]' source={require("../../assets/compress2.jpg")} />
            <Text className='text-white text-xl'>Gabi Ware</Text>
            <Text className='text-white'>Front End Senior</Text>
          </View>
          <DrawerItemList {...props} />
          <TouchableOpacity className='flex-row items-center gap-x-[30px] pl-[18px] mt-[10px]' onPress={signout}>
            <MaterialIcons name="logout" size={27} color="#fff" />
            <Text className='text-white font-roboto-bold '>Sair do app</Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }}

    screenOptions={{
      headerShown: false,
      drawerPosition: "left",
      drawerStyle: {
        backgroundColor: "#212121",
        width: 250,
      },
      drawerActiveTintColor: "#14B67B",
      drawerInactiveTintColor: "#fff",
    }}
    initialRouteName="Chatlist"
    >
      <Drawer.Screen
        name="Chatlist"
        options={{
          drawerLabel: "Chats",
          title: "Chats",
          drawerIcon: ({ focused }) =>
            focused ? (
              <Entypo name="chat" size={24} color="#14B67B" />
            ) : (
              <Entypo name="chat" size={24} color="#fff" />
            ),
        }}
        component={Chatlist}
      />
       <Drawer.Screen
        name="Dashboard"
        options={{
          drawerLabel: "Dashboard",
          title: "Dashboard",
          drawerIcon: ({ focused }) =>
            focused ? (
              <Entypo name="chat" size={24} color="#14B67B" />
            ) : (
              <Entypo name="chat" size={24} color="#fff" />
            ),
        }}
        component={Dashboard}
      />
    </Drawer.Navigator>
  );
}
