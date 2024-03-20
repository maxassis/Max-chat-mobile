import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import Logo from "../../assets/chatguru.svg";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Card from "../components/card";
import { FlashList } from "@shopify/flash-list";
import type { ChatlistData } from "../types/chatlistTypes";
//import { mock } from "../../mockChatlist";


export default function Chatlist() {
   const [data, setData] = useState<ChatlistData[]>();


  useEffect(() => {
    // setLoading(true);
    const data = fetch(
      "https://run.mocky.io/v3/eae31c54-ae3d-41f7-9586-ce3e4d8e20b9"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.chats);
      })
      .catch((e) => console.log("teste", e));
    // .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <View className="bg-cg-black flex-row items-center h-14 px-3 justify-between ">
          <Logo width={120} />

          <SimpleLineIcons name="menu" size={24} color="#fff" />
        </View>

        <View className="h-16 bg-slate-100 justify-between items-center pr-5 pl-6 flex-row">
          <View className="flex-row">
            <View className="bg-slate-400 h-10 w-10 justify-center items-center flex-row">
              <Feather name="search" size={24} color="#fff" />
            </View>
            <TextInput
              className="bg-white w-[250px] h-10 pl-3"
              placeholder="Pesquisar mensagem"
            />
          </View>

          <View className="rounded-full w-8 h-8 bg-cg-green ml-7 items-center justify-center">
            <AntDesign name="plus" size={24} color="#fff" />
          </View>
        </View>

        <View className="h-14 justify-between border-b-[0.7px] border-slate-300 items-center pl-5 pr-5 flex-row">
          <TouchableOpacity className="w-40 h-9 bg-cg-green items-center justify-center">
            <Text className="text-white font-bold">Mostrar Filtros</Text>
          </TouchableOpacity>

          <Text>Listando 20 resultados</Text>
        </View>

        <FlashList
          overScrollMode="never"
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card dt={item} />}
          estimatedItemSize={80}
        />
        
      </View>
    </SafeAreaView>
  );
}
