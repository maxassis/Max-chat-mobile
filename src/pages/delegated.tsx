import { SafeAreaView, ScrollView, Text, View } from "react-native";
import HeaderMenu from "../components/HeaderMenu";
import { AntDesign } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

export default function Delegated() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderMenu selected="delegated" />
      <View className="flex-1 pt-5">
        <Text className="text-xl ml-5 font-roboto-bold">
          Histórico de usuários delegados
        </Text>

        <View className="h-9 mt-2 mx-5 mb-4 pl-1 flex-row justify-between items-center">
          <View className="h-7 pl-1 pr-2 border-[0.5px] gap-x-1 flex-row border-slate-500 items-center justify-center ">
            <AntDesign name="up" size={20} color={colors.slate[500]} />
            <Text className="text-base text-slate-500">
              Mostrar mais recentes
            </Text>
          </View>

          <View className="h-9 w-9 bg-cg-green justify-center items-center">
            <AntDesign name="plus" size={24} color="#fff" />
          </View>
        </View>

        <View className="h-11 bg-slate-400 mx-5 flex-row justify-between items-center px-9">
          <Text className="text-base text-white">DELEGADO POR</Text>
          <Text className="text-base text-white">DATA E HORA</Text>
        </View>
        <ScrollView overScrollMode="never">
        
          <View className=" mx-5 border-b-[0.3px] border-l-[0.3px] border-r-[0.3px] flex-row border-slate-400">
            <View className="w-6/12">
              <View className="py-3 items-center justify-center border-b-[0.3px] border-slate-400">
                <Text className="text-lg font-roboto-bold">Chatbot</Text>
              </View>
              <View className="py-3 gap-y-1 items-center justify-center">
                <Text>usuario 1</Text>
                <Text>usuario 2</Text>
              </View>
            </View>
            <View className="w-6/12 border-l-[0.3px] border-slate-400  items-center justify-center">
              <Text className="text-lg text-center">
                10/03/2023 {"\n"} às 08:00
              </Text>
            </View>
          </View>

          <View className=" mx-5 border-b-[0.3px] border-l-[0.3px] border-r-[0.3px] flex-row border-slate-400">
            <View className="w-6/12">
              <View className="py-3 items-center justify-center border-b-[0.3px] border-slate-400">
                <Text className="text-lg font-roboto-bold">Chatbot</Text>
              </View>
              <View className="py-3 gap-y-1 items-center justify-center">
                <Text>usuario 1</Text>
                <Text>usuario 2</Text>
              </View>
            </View>
            <View className="w-6/12 border-l-[0.3px] border-slate-400  items-center justify-center">
              <Text className="text-lg text-center">
                10/03/2023 {"\n"} às 08:00
              </Text>
            </View>
          </View>

          <View className=" mx-5 border-b-[0.3px] border-l-[0.3px] border-r-[0.3px] flex-row border-slate-400">
            <View className="w-6/12">
              <View className="py-3 items-center justify-center border-b-[0.3px] border-slate-400">
                <Text className="text-lg font-roboto-bold">Chatbot</Text>
              </View>
              <View className="py-3 gap-y-1 items-center justify-center">
                <Text>usuario 1</Text>
                <Text>usuario 2</Text>
              </View>
            </View>
            <View className="w-6/12 border-l-[0.3px] border-slate-400  items-center justify-center">
              <Text className="text-lg text-center">
                10/03/2023 {"\n"} às 08:00
              </Text>
            </View>
          </View>

          <View className=" mx-5 border-b-[0.3px] border-l-[0.3px] border-r-[0.3px] flex-row border-slate-400">
            <View className="w-6/12">
              <View className="py-3 items-center justify-center border-b-[0.3px] border-slate-400">
                <Text className="text-lg font-roboto-bold">Chatbot</Text>
              </View>
              <View className="py-3 gap-y-1 items-center justify-center">
                <Text>usuario 1</Text>
                <Text>usuario 2</Text>
              </View>
            </View>
            <View className="w-6/12 border-l-[0.3px] border-slate-400  items-center justify-center">
              <Text className="text-lg text-center">
                10/03/2023 {"\n"} às 08:00
              </Text>
            </View>
          </View>

          <View className=" mx-5 border-b-[0.3px] border-l-[0.3px] border-r-[0.3px] flex-row border-slate-400">
            <View className="w-6/12">
              <View className="py-3 items-center justify-center border-b-[0.3px] border-slate-400">
                <Text className="text-lg font-roboto-bold">Chatbot</Text>
              </View>
              <View className="py-3 gap-y-1 items-center justify-center">
                <Text>usuario 1</Text>
                <Text>usuario 2</Text>
              </View>
            </View>
            <View className="w-6/12 border-l-[0.3px] border-slate-400  items-center justify-center">
              <Text className="text-lg text-center">
                10/03/2023 {"\n"} às 08:00
              </Text>
            </View>
          </View>

          <View className=" mx-5 border-b-[0.3px] border-l-[0.3px] border-r-[0.3px] flex-row border-slate-400">
            <View className="w-6/12">
              <View className="py-3 items-center justify-center border-b-[0.3px] border-slate-400">
                <Text className="text-lg font-roboto-bold">Chatbot</Text>
              </View>
              <View className="py-3 gap-y-1 items-center justify-center">
                <Text>usuario 1</Text>
                <Text>usuario 2</Text>
              </View>
            </View>
            <View className="w-6/12 border-l-[0.3px] border-slate-400  items-center justify-center">
              <Text className="text-lg text-center">
                10/03/2023 {"\n"} às 08:00
              </Text>
            </View>
          </View>

               
        </ScrollView>

        <View className="h-5"></View>
      </View>
    </SafeAreaView>
  );
}
