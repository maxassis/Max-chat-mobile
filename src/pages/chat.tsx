import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, AvatarImage, AvatarFallback } from "../components/Avatar";
import { cva } from "class-variance-authority";
import SendMsg from "../components/SendMsg";
import ReceivedMsg from "../components/ReceivedMsg";
import { FlashList } from "@shopify/flash-list";
import { chats } from "../../mock-chats";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Octicons } from "@expo/vector-icons";
import Plus from "../../assets/plus.svg";
import Mic from "../../assets/mic.svg";
import Edit from "../../assets/edit.svg";
import Clock from "../../assets/clock.svg";
import Message from "../../assets/message.svg";
import PaperClip from "../../assets/paperclip.svg";
import EmojiPicker, { pt } from "rn-emoji-keyboard";
import { useKeyboardVisible } from "../hooks/keyboard";
import colors from "tailwindcss/colors";

interface chat {
  id: number;
  send: null | string;
  received: null | string;
}

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [float, setFloat] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const isKeyboardVisible = useKeyboardVisible();

  const handlePick = ({ emoji }: { emoji: string }) => {
    setUserInput((text) => text + emoji);
  };

  function closeMenu() {
    setFloat(false);
    setSideMenu(false);
  }

  function toggleSideMenu() {
    if (isKeyboardVisible) {
      Keyboard.dismiss();
      setFloat(false);
    }
    setSideMenu(!sideMenu);
  }

  return (
    <SafeAreaView className="flex-1">
      <TouchableWithoutFeedback onPress={() => closeMenu()}>
        <KeyboardAvoidingView behavior="padding" enabled className="flex-1">
          <View className="h-16 bg-white items-center px-3 flex-row border-b-[0.5px] border-b-slate-400  ">
            <Ionicons name="arrow-back" size={35} color="#333333" />

            <Avatar className="h-12 w-12 ml-2">
              <AvatarImage source={require("../../assets/compress2.jpg")} />
              <AvatarFallback>CG</AvatarFallback>
            </Avatar>

            <View className="h-12 w-56 ml-2 mb-1">
              <Text
                numberOfLines={1}
                className="text-cg-black-secondary text-lg font-roboto-bold"
              >
                Gabi Ware
              </Text>

              <View className={PillStyles({ intent: "AGUARDANDO" })}>
                <Text className="text-white">AGUARDANDO</Text>
              </View>
            </View>

            <TouchableOpacity
              className="ml-auto"
              onPress={() => toggleSideMenu()}
            >
              <Ionicons
                name="ellipsis-vertical-sharp"
                size={28}
                color="#333333"
              />
            </TouchableOpacity>
          </View>

          <View className="flex-1 bg-slate-50">
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

            {sideMenu && !isKeyboardVisible ? (
              <>
                <View className="absolute w-full h-full bg-black opacity-40 "></View>
                <View className="absolute justify-around w-[61px] h-[420px] py-2 items-center bg-white border-[0.5px] border-slate-400 right-0 top-0 ">
                  <TouchableOpacity className="w-11 h-11 rounded-md border-slate-400 border-[0.8px] items-center justify-center">
                    <Feather name="user" size={30} color={colors.slate[400]} />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-11 items-center justify-center h-11 rounded-md border-slate-400 border-[0.8px]">
                    <Ionicons
                      name="document-text-outline"
                      size={30}
                      color={colors.slate[400]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-11 h-11 items-center justify-center rounded-md border-slate-400 border-[0.8px]">
                    <Ionicons
                      name="funnel-outline"
                      size={30}
                      color={colors.slate[400]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-11 h-11 items-center justify-center rounded-md border-slate-400 border-[0.8px]">
                    <Octicons
                      name="dependabot"
                      size={30}
                      color={colors.slate[400]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-11 h-11 items-center justify-center rounded-md border-slate-400 border-[0.8px]">
                    <SimpleLineIcons name="graph" size={30} color={colors.slate[400]} />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-11 h-11 items-center justify-center rounded-md border-slate-400 border-[0.8px]">
                    <Feather
                      name="user-plus"
                      size={30}
                      color={colors.slate[400]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-11 h-11 items-center justify-center rounded-md border-slate-400 border-[0.8px]">
                    <Ionicons
                      name="play-outline"
                      size={30}
                      color={colors.slate[400]}
                    />
                  </TouchableOpacity>
                </View>
              </>
            ) : null}
          </View>

          <EmojiPicker
            onEmojiSelected={handlePick}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            translation={pt}
            enableRecentlyUsed
            categoryPosition="top"
          />

          <View className="min-h-[70] max-h-[] py-3 max-h-15o px-3 border-t-[0.5px] border-slate-400 flex-row items-center">
            {float && (
              <View
                className="absolute bottom-16 left-2 w-[52px] h-[180px] items-center justify-between p-3 
            bg-white border-[0.5px] border-slate-400 "
              >
                <View className="w-8 h-8 rounded-full bg-slate-400 items-center justify-center">
                  <PaperClip />
                </View>
                <View className="w-8 h-8 rounded-full bg-cyan-400 items-center justify-center">
                  <Message />
                </View>
                <View className="w-8 h-8 rounded-full bg-blue-400 items-center justify-center">
                  <Clock />
                </View>
                <View className="w-8 h-8 rounded-full bg-cg-green items-center justify-center">
                  <Edit />
                </View>
              </View>
            )}

            <Plus width={40} height={40} onPress={() => setFloat(!float)} />

            <View className="flex-1 flex-row">
              <TextInput
                multiline={true}
                selectionColor={"#14B67B"}
                className="flex-1 min-h-12 ml-3 p-3 pr-0 bg-slate-100 rounded-tl-sm rounded-bl-sm "
              ></TextInput>

              <TouchableOpacity
                onPress={() => setIsOpen(true)}
                className="w-12 items-center justify-center bg-slate-100 mr-3 rounded-tr-sm rounded-br-sm i"
              >
                <Ionicons name="happy-outline" size={32} color="black" />
              </TouchableOpacity>
            </View>

            <View className="w-12 h-12 bg-cg-green items-center justify-center">
              <Mic />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
