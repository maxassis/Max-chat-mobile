import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { cva } from 'class-variance-authority'
import type { ChatlistData, LastMessage, Tag } from "../types/chatlistTypes";
import { useNavigation } from '@react-navigation/native'

const PillStyles = cva("py-[0.5px] px-2 rounded-full items-center justify-center", {
  variants: {
    intent: {
      AGUARDANDO: "bg-cg-yellow",
      ABERTO: "bg-cg-red",
      'EM ATENDIMENTO': "bg-cg-blue",
      RESOLVIDO: "bg-cg-green-secondary",
      FECHADO: "bg-cg-blue-light"
    },    
  },
});



export default function Card({dt}: {dt: ChatlistData}) {
  const navigation = useNavigation()
  const statusColor = dt.status;
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Chat')} className="h-20 border-b-[0.5px] border-slate-300 flex-row items-center justify-between pr-4 pl-2 gap-x-2 ">
      <View className="flex-row gap-x-2 pr-2 flex-1">
        <Image
          source={{ uri: "https://picsum.photos/48/48" }}
          className="w-12 h-12 rounded-full self-center"
        />

        <View className="ml-3 gap-y-1 flex-1">
          <Text className="font-roboto-bold text-base" numberOfLines={1}>
            {dt.name}
          </Text>
          <Text className="text-slate-500 text-sm" numberOfLines={1}>
            {dt.last_message?.text}
          </Text>
        </View>
      </View>

      <View className="">
        <View className="flex-row gap-x-2 mb-3 justify-end">
          <View className={PillStyles({ intent: dt.status })}>
            <Text className="text-xs text-white">{dt.status == "EM ATENDIMENTO" ? "EM ATENDI" : dt.status}</Text>
          </View>
          {dt.new_messages && (
            <View className="py-[0.5px] px-2 rounded-full items-center justify-center bg-cg-red">
            <Text className="text-white">{dt.new_messages}</Text>
          </View> 
          )}

        </View>

        <View className="flex-row justify-end">
          <Text className="text-slate-500 text-xs">10:30</Text>
          <View className="flex-row">
            <Feather
              name="user"
              size={15}
              color="red"
              style={{ paddingLeft: 6 }}
            />
            <Feather
              name="users"
              size={15}
              color="green"
              style={{ paddingLeft: 6 }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
