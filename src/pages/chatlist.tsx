import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../../assets/chatguru.svg";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Chatlist() {
  return (
    <SafeAreaView className="flex-1">
      <View>
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

        <View className="h-16 justify-between border-b-[0.7px] border-slate-300 items-center pl-5 pr-5 flex-row">
          <TouchableOpacity className="w-40 h-9 bg-cg-green items-center justify-center">
            <Text className="text-white font-bold">Mostrar Filtros</Text>
          </TouchableOpacity>

          <Text>Listando 20 resultados</Text>
        </View>

        <View className="h-20 border-b-[0.5px] border-slate-300 flex-row items-center justify-between pr-4 pl-2 gap-x-2 ">
          <View className="flex-row gap-x-2 pr-2 flex-1">
            <Image
              source={{ uri: "https://picsum.photos/48/48" }}
              className="w-12 h-12 rounded-full self-center"
            />

            <View className="ml-3 gap-y-1 flex-1">
              <Text className="font-roboto-bold text-lg" numberOfLines={1}>Gabi Ware</Text>
              <Text className="text-slate-500 text-sm" numberOfLines={1}>
                Ola!!! tudo bem com vc ??? ejejejejejejejejjejejejejjejejej
              </Text>
            </View>
          </View>

          <View className="">
            <View className="flex-row gap-x-2 mb-3 justify-end">
              <View className="py-[0.5px] px-2 bg-pink-400 rounded-full items-center justify-center">
                <Text className="text-xs">ABERTO</Text>
              </View>
              <View className="py-[0.5px] px-2 rounded-full items-center justify-center bg-red-600">
                <Text>1</Text>
              </View>
            </View>

            <View className="flex-row justify-end">
              <Text className="text-slate-500 text-xs">10:30</Text>
              <View className="flex-row"> 
                  <Feather name="user" size={15} color="red" style={{paddingLeft: 6}} />
                  <Feather name="users" size={15} color="green" style={{paddingLeft: 6}} />
              </View>
            </View>



          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
