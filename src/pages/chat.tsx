import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, AvatarImage, AvatarFallback } from "../components/Avatar";
import { cva } from "class-variance-authority";

export default function Chat() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex1">
        <View className="h-16 bg-cg-black items-center px-3 flex-row ">
          <Ionicons name="arrow-back" size={35} color="#fff" />

          <Avatar className="h-12 w-12 ml-2">
            <AvatarImage source={require("../../assets/compress2.jpg")} />
            <AvatarFallback>CG</AvatarFallback>
          </Avatar>

          <View className="h-12 w-56 ml-2 mb-1">
            <Text
              numberOfLines={1}
              className="text-white text-lg font-roboto-bold"
            >
              Gabi Ware
            </Text>

            <View className={PillStyles({ intent: "AGUARDANDO" })}>
              <Text className="text-white">AGUARDANDO</Text>
            </View>
          </View>

          <TouchableOpacity className="ml-auto">
            <Ionicons name="ellipsis-vertical-sharp" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Mensagem recebida */}
        <View className="mb-3">
          <View className="px-3 flex-row">
            <Avatar className="h-12 w-12">
              <AvatarImage source={require("../../assets/compress.jpg")} />
              <AvatarFallback>CG</AvatarFallback>
            </Avatar>

            <View className="ml-3 self-start">
              <View className="max-w-[90%] bg-slate-200 mb-1 rounded-xl p-3 ">
                <Text className="text-xm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  dolores facere eius consectetur non obcaecati quos distinctio
                  odio fuga nesciunt doloremque nisi, in cum reiciendis quod
                  sapiente aliquid porro amet.
                </Text>
              </View>
              <View className="max-w-[90%]">
                <Text className="text-xs text-slate-500">12:30</Text>
              </View>
            </View>
          </View>
        </View>

        {/* mensagem enviada */}
        <View className="h-40 mb-3">
          <View className="px-3 flex-row justify-items-end">
            <View className="mr-3 items-end">
              <View className="max-w-[90%] bg-slate-200 mb-1 rounded-xl p-3 ">
                <Text className="text-xm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  dolores facere eius consectetur non obcaecati quos distinctio
                  odio fuga nesciunt doloremque nisi, in cum reiciendis quod
                  sapiente aliquid porro amet.
                </Text>
              </View>
              <View className="max-w-[90%]">
                <Text className="text-xs self-start text-slate-500">12:30</Text>
              </View>
            </View>
            <Avatar className="h-12 w-12">
              <AvatarImage source={require("../../assets/compress2.jpg")} />
              <AvatarFallback>CG</AvatarFallback>
            </Avatar>
          </View>          
        </View>
        

        {/* <View className="min-h-[60] max-h-15o bg-blue-400">

        </View> */}
      </View>
    </SafeAreaView>
  );
}

const PillStyles = cva(
  "items-center px-2 justify-center self-start rounded-full",
  {
    variants: {
      intent: {
        AGUARDANDO: "bg-cg-yellow",
        ABERTO: "bg-cg-red",
        "EM ATENDIMENTO": "bg-cg-blue",
        RESOLVIDO: "bg-cg-green-secondary",
        FECHADO: "bg-cg-blue-light",
      },
    },
  }
);
