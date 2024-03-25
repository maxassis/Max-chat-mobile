import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import HeaderMenu from "../components/HeaderMenu";
import { AntDesign } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { cva } from "class-variance-authority";

export default function Media() {
    const [media, setMedia] = useState(true)
    const [document, setDocument] = useState(false)
    const [figure, setFigure] = useState(false)

    function selectMedia() {
        setMedia(true)
        setDocument(false)
        setFigure(false)
    }

    function selectDocument() {
        setMedia(false)
        setDocument(true)
        setFigure(false)
    }

    function selectFigure() {
        setMedia(false)
        setDocument(false)
        setFigure(true)
    }

  return (
    <SafeAreaView className="flex-1">
      <HeaderMenu selected="media" />
      <View className="flex-1 pt-5">
        <Text className="text-xl ml-5 font-roboto-bold">Mídias</Text>

        <View className="h-9 mt-2 ml-1 mx-6 mb-4 flex-row justify-between items-center">
          <View className="h-7 pl-1 pr-2 border-[0.5px] gap-x-1 flex-row border-slate-500 items-center justify-center ">
            <AntDesign name="up" size={20} color={colors.slate[500]} />
            <Text className="text-base text-slate-500">
              Mostrar mais recentes
            </Text>
          </View>
        </View>

        <View className="h-[38px] bg-cg-green mx-5 rounded-md flex-row">
          <TouchableOpacity onPress={selectMedia} className="w-4/12 h-full items-center justify-center">
            <View className={SelectStyles({ intent: media })}>
              <Text className={TextSelect({ intent: media })}>Mídias</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={selectDocument} className="w-4/12 h-full items-center justify-center">
            <View className={SelectStyles({ intent: document })}>
              <Text className={TextSelect({ intent: document })}>Documentos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={selectFigure} className="w-4/12 h-full items-center justify-center">
            <View className={SelectStyles({ intent: figure })}>
              <Text className={TextSelect({ intent: figure })}>Figurinhas</Text>
            </View>
          </TouchableOpacity>       
        </View>
      </View>
    </SafeAreaView>
  );
}

const SelectStyles = cva(
    "rounded-md w-[96%] h-[92%] items-center justify-center",
    {
      variants: {
        intent: {
          true: "bg-white",
        }
      },
    }
  );

const TextSelect = cva(
    "text-white text-base",
    {
      variants: {
        intent: {
          true: "text-cg-black-secondary",
        }
      },
    }
)  
