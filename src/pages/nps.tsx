import { SafeAreaView, View, Text, ScrollView } from "react-native";
import HeaderMenu from "../components/HeaderMenu";
import { AntDesign } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

export default function Nps() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderMenu selected="nps" />
      <View className="flex-1 pt-5">
        <Text className="text-xl ml-5 font-roboto-bold">Histórico de NPS</Text>

        <View className="h-9 mt-2 ml-1 mx-6 mb-4 flex-row justify-between items-center">
          <View className="h-7 pl-1 pr-2 border-[0.5px] gap-x-1 flex-row border-slate-500 items-center justify-center ">
            <AntDesign name="up" size={20} color={colors.slate[500]} />
            <Text className="text-base text-slate-500">
              Mostrar mais recentes
            </Text>
          </View>
        </View>

        <ScrollView overScrollMode="never">
            <View className="px-5">
            <View className="p-5 bg-green-50 mb-4 border-2 border-green-500 rounded-md">
                <View className="mb-5">
                    <Text>17/03/24 as 10:40</Text>
                    <Text className="text-lg font-roboto-bold">Titulo do atendimento</Text>
                    <Text className="font-roboto-bold text-base">Nota 1</Text>
                </View>

                <Text className="text-base font-roboto-bold mb-1">Comentatio:</Text>
                <Text className="mb-5 text-lg text-slate-500 leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ipsam. Odit, voluptate! Quasi omnis voluptas porro delectus quo, earum aspernatur excepturi, id maiores laborum, odit neque quam iste. Dolore, quia?</Text>
                <Text className="text-base font-roboto-bold mb-1">Usuarios e departamentos delegados</Text>    
                <Text className="mb-2 text-lg text-slate-500 leading-5">Lorem Ipsum</Text>
            </View>
            </View>

            <View className="px-5">
            <View className="p-5 bg-red-50 mb-4 border-2 border-red-500 rounded-md">
                <View className="mb-5">
                    <Text>17/03/24 as 10:40</Text>
                    <Text className="text-lg font-roboto-bold">Titulo do atendimento</Text>
                    <Text className="font-roboto-bold text-base">Nota 5</Text>
                </View>

                <Text className="text-base font-roboto-bold mb-1">Comentatio:</Text>
                <Text className="mb-5 text-lg text-slate-500 leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ipsam. Odit, voluptate! Quasi omnis voluptas porro delectus quo, earum aspernatur excepturi, id maiores laborum, odit neque quam iste. Dolore, quia?</Text>
                <Text className="text-base font-roboto-bold mb-1">Usuarios e departamentos delegados</Text>    
                <Text className="mb-2 text-lg text-slate-500 leading-5">Lorem Ipsum</Text>
            </View>
            </View>

            <View className="px-5">    
            <View className="p-5 bg-yellow-50 mb-4 border-2 border-yellow-500 rounded-md">
                <View className="mb-5">
                    <Text>17/03/24 as 10:40</Text>
                    <Text className="text-lg font-roboto-bold">Titulo do atendimento</Text>
                    <Text className="font-roboto-bold text-base">Nota 10</Text>
                </View>

                <Text className="text-base font-roboto-bold mb-1">Comentatio:</Text>
                <Text className="mb-5 text-lg text-slate-500 leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ipsam. Odit, voluptate! Quasi omnis voluptas porro delectus quo, earum aspernatur excepturi, id maiores laborum, odit neque quam iste. Dolore, quia?</Text>
                <Text className="text-base font-roboto-bold mb-1">Usuarios e departamentos delegados</Text>    
                <Text className="mb-2 text-lg text-slate-500 leading-5">Lorem Ipsum</Text>
            </View>
            </View>

            <View className="px-5">    
            <View className="p-5 bg-red-50 mb-4 border-2 border-red-500 rounded-md">
                <View className="mb-5">
                    <Text>17/03/24 as 10:40</Text>
                    <Text className="text-lg font-roboto-bold">Titulo do atendimento</Text>
                    <Text className="font-roboto-bold text-base">Nota 8</Text>
                </View>

                <Text className="text-base font-roboto-bold mb-1">Comentatio:</Text>
                <Text className="mb-5 text-lg text-slate-500 leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ipsam. Odit, voluptate! Quasi omnis voluptas porro delectus quo, earum aspernatur excepturi, id maiores laborum, odit neque quam iste. Dolore, quia?</Text>
                <Text className="text-base font-roboto-bold mb-1">Usuarios e departamentos delegados</Text>    
                <Text className="mb-2 text-lg text-slate-500 leading-5">Lorem Ipsum</Text>
            </View>
            </View>

        </ScrollView>

      </View>
    </SafeAreaView>
  );
}
