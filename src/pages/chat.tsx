import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar, AvatarImage, AvatarFallback } from "../components/Avatar";
import { cva } from "class-variance-authority";
import SendMsg from "../components/SendMsg";
import ReceivedMsg from "../components/ReceivedMsg";
import { FlashList } from "@shopify/flash-list";
import { chats } from "../../mock-chats";
import Plus from "../../assets/plus.svg";
import Mic from "../../assets/mic.svg";

interface chat {
  id: number;
  send: null | string;
  received: null | string;
}

export default function Chat() {
  const data = chats;

  return (
    <SafeAreaView className="flex-1">
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
        <FlashList
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
          estimatedItemSize={91}
        />
      </View>

      <View className="min-h-[70] max-h-[] py-3 max-h-15o px-3 border-t-[0.5px] border-slate-400 flex-row items-center">
        <Plus width={40} height={40} />

        <View className="flex-1 flex-row">
          <TextInput
            multiline={true}
            selectionColor={"#14B67B"}
            className="flex-1 min-h-12 ml-3 p-3 pr-0 bg-slate-100 rounded-tl-sm rounded-bl-sm "
          ></TextInput>

          <View className="w-12 items-center justify-center bg-slate-100 mr-3 rounded-tr-sm rounded-br-sm i">
            <Ionicons name="happy-outline" size={32} color="black" />
          </View>
        </View>

        <View className="w-12 h-12 bg-cg-green items-center justify-center">
          {/* <Ionicons name="send" size={22} color="#fff" /> */}
          <Mic />
        </View>
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
