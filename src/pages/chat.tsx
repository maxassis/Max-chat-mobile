import { SafeAreaView, Text, TouchableOpacity, View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, AvatarImage, AvatarFallback } from "../components/Avatar";
import { cva } from "class-variance-authority";
import SendMsg from "../components/SendMsg";
import ReceivedMsg from "../components/ReceivedMsg";
import { FlashList } from "@shopify/flash-list";
import { chats } from "../../mock-chats";

interface chat {
  id:       number;
  send:     null | string;
  received: null | string;
}

export default function Chat() {
  const data = chats


  return (
    <SafeAreaView className="flex-1">
      {/* <View className="flex1"> */}
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

        <View className="flex-1">
        <FlatList
          overScrollMode="never"
          inverted
          data={[...chats].reverse()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            item.send ? (
              <SendMsg msg={item.send!} />
            ) : (
              <ReceivedMsg msg={item.received!} />
            )
          }
          // estimatedItemSize={91}
        />
        </View>


       
  

        <View className="min-h-[60] max-h-15o bg-blue-400">

        </View>
      {/* </View> */}
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
