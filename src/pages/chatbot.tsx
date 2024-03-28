import { SafeAreaView, View, Text, ScrollView } from "react-native";
import HeaderMenu from "../components/HeaderMenu";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Divider } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Chatbot() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <HeaderMenu selected="chatbot" />
        <ScrollView overScrollMode="never">
          <Text className="text-xl ml-5 mt-5 font-roboto-bold mb-5">
            ChatBot
          </Text>
          <Text className="text-xl ml-5 font-roboto-bold mb-5">
            Contextos do robô
          </Text>

          <View className="h-11 mx-5 bg-slate-400 rounded-t-md flex-row">
            <View className="w-[37%] items-center justify-center">
              <Text className="text-white text-base">CONTEXTO</Text>
            </View>
            <View className="w-[37%] items-center justify-center">
              <Text className="text-white text-base">VALOR</Text>
            </View>
          </View>

          <View className="mb-5">
            <View className="mx-5 flex-row">
              <View className="h-11 border-l-[0.3px] border-r-[0.3px] border-b-[0.3px] border-slate-400 w-[37%] items-center justify-center">
                <Text className="text-base">Nome</Text>
              </View>
              <View className="h-11 w-[37%] border-r-[0.3px] border-b-[0.3px] border-slate-400 items-center justify-center">
                <Text className="text-base">True</Text>
              </View>
              <View className="h-11 w-[26%] border-r-[0.3px] border-b-[0.3px] border-slate-400 items-center justify-center">
                <FontAwesome5 name="trash" size={18} color={colors.red[500]} />
              </View>
            </View>

            <View className="mx-5 flex-row">
              <View className="h-11 border-l-[0.3px] border-r-[0.3px] border-b-[0.3px] border-slate-400 w-[37%] items-center justify-center">
                <Text className="text-base">Nome</Text>
              </View>
              <View className="h-11 w-[37%] border-r-[0.3px] border-b-[0.3px] border-slate-400 items-center justify-center">
                <Text className="text-base">True</Text>
              </View>
              <View className="h-11 w-[26%] border-r-[0.3px] border-b-[0.3px] border-slate-400 items-center justify-center">
                <FontAwesome5 name="trash" size={18} color={colors.red[500]} />
              </View>
            </View>

            <View className="mx-5 flex-row">
              <View className="h-11 border-l-[0.3px] border-r-[0.3px] border-b-[0.3px] border-slate-400 w-[37%] items-center justify-center">
                <Text className="text-base">Nome</Text>
              </View>
              <View className="h-11 w-[37%] border-r-[0.3px] border-b-[0.3px] border-slate-400 items-center justify-center">
                <Text className="text-base">False</Text>
              </View>
              <View className="h-11 w-[26%] border-r-[0.3px] border-b-[0.3px] border-slate-400 items-center justify-center">
                <FontAwesome5 name="trash" size={18} color={colors.red[500]} />
              </View>
            </View>

            <View className="mx-5 flex-row">
              <View className="h-11 border-l-[0.3px] border-r-[0.3px] border-b-[0.3px] border-slate-400 w-[37%] items-center justify-center">
                <Text className="text-base">Nome</Text>
              </View>
              <View className="h-11 w-[37%] border-r-[0.3px] border-b-[0.3px] border-slate-400 items-center justify-center">
                <Text className="text-base">Done</Text>
              </View>
              <View className="h-11 w-[26%] border-r-[0.3px] border-b-[0.3px] border-slate-400 items-center justify-center">
                <FontAwesome5 name="trash" size={18} color={colors.red[500]} />
              </View>
            </View>

            <View className="mx-5  flex-row">
              <View className="h-11 border-l-[0.3px] border-r-[0.3px] border-b-[0.3px] border-slate-400 w-[37%] items-center justify-center">
                <Text className="text-base">Nome</Text>
              </View>
              <View className="h-11 w-[37%] border-r-[0.3px] border-b-[0.3px] border-slate-400 items-center justify-center">
                <Text className="text-base">Done</Text>
              </View>
              <View className="h-11 w-[26%] border-r-[0.3px] border-b-[0.3px] border-slate-400 items-center justify-center">
                <FontAwesome5 name="trash" size={18} color={colors.red[500]} />
              </View>
            </View>
          </View>

          <Divider />

          <Text className="mt-5 ml-5 text-xl font-roboto-bold">
            Histórico de diálogos acionados
          </Text>

          <View className="h-9 mt-5 mx-5 mb-5 pl-1 flex-row justify-between items-center">
            <View className="h-7 pl-1 pr-2 border-[0.5px] gap-x-1 flex-row border-slate-500 items-center justify-center ">
              <AntDesign name="up" size={20} color={colors.slate[500]} />
              <Text className="text-base text-slate-500">
                Mostrar mais recentes
              </Text>
            </View>
          </View>

          <View className="h-11 mx-5 bg-slate-400 rounded-t-md flex-row">
            <View className="w-4/12 items-center justify-center">
              <Text className="text-white text-base">CONTEXTO</Text>
            </View>
            <View className="w-4/12 items-center justify-center">
              <Text className="text-white text-base">VALOR</Text>
            </View>
            <View className="w-4/12 items-center justify-center">
                <Text className="text-white text-base">RESPONSÁVEL</Text>
            </View>
          </View> 

          <View className="mb-5">
            <View className="flex-row mx-5">
                <View className="p-5 w-4/12 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-slate-400 items-center justify-center">
                    <Text className="text-base">Nome</Text>
                </View>
                <View className="p-y-5 w-4/12 border-b-[0.5px] border-slate-400 items-center justify-center">
                    <View className="bg-slate-100 rounded-xl px-2 py-[0.5px] flex-row gap-x-1 items-center">
                      <Octicons name="dot-fill" size={15} color={colors.green[500]} />
                      <Text className="text-green-500 text-xs">Executado</Text>
                    </View>
                    <Text className="text-[11px] mt-2">10/03/2024 às 10:00</Text>
                </View>
                <View className="p-5 w-4/12 border-b-[0.5px] border-r-[0.5px] border-l-[0.5px] border-slate-400 items-center justify-center">
                    <MaterialIcons name="chat-bubble-outline" size={24} color={colors.slate[400]} />                   
                </View>
            </View>  

            <View className="flex-row mx-5">
                <View className="p-5 w-4/12 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-slate-400 items-center justify-center">
                    <Text className="text-base">Nome</Text>
                </View>
                <View className="p-y-5 w-4/12 border-b-[0.5px] border-slate-400 items-center justify-center">
                    <View className="bg-slate-100 rounded-xl px-2 py-[0.5px] flex-row gap-x-1 items-center">
                      <Octicons name="dot-fill" size={15} color={colors.green[500]} />
                      <Text className="text-green-500 text-xs">Executado</Text>
                    </View>
                    <Text className="text-[11px] mt-2">10/03/2024 às 10:00</Text>
                </View>
                <View className="p-5 w-4/12 border-b-[0.5px] border-r-[0.5px] border-l-[0.5px] border-slate-400 items-center justify-center">
                  <Feather name="user" size={24} color={colors.slate[400]} />                    
                </View>
            </View> 

            <View className="flex-row mx-5">
                <View className="p-5 w-4/12 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-slate-400 items-center justify-center">
                    <Text className="text-base">Nome</Text>
                </View>
                <View className="p-y-5 w-4/12 border-b-[0.5px] border-slate-400 items-center justify-center">
                    <View className="bg-slate-100 rounded-xl px-2 py-[0.5px] flex-row gap-x-1 items-center">
                      <Octicons name="dot-fill" size={15} color={colors.red[500]} />
                      <Text className="text-red-500 text-xs">Não executado</Text>
                    </View>
                    <Text className="text-[11px] mt-2">10/03/2024 às 10:00</Text>
                </View>
                <View className="p-5 w-4/12 border-b-[0.5px] border-r-[0.5px] border-l-[0.5px] border-slate-400 items-center justify-center">
                    <MaterialCommunityIcons name="robot-outline" size={24} color={colors.slate[400]} />                    
                </View>
            </View>             
          </View> 

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
