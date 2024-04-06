import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, ScrollView  } from "react-native";
import HeaderMenu from "../components/HeaderMenu";
import { AntDesign } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { cva } from "class-variance-authority";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

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
    <SafeAreaView className="flex-1 bg-white">
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

        <View className="h-[38px] bg-cg-green mx-5 rounded-md mb-5 flex-row">
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

        <ScrollView>
            <View className="h-[72px] mx-5 mb-3 px-5 border-[1px] border-slate-300 rounded-md justify-center">
                <View className="h-9 flex-row justify-between">
                    <View className="flex-row gap-x-4">
                        <View className="h-10 w-10 rounded-full bg-green-100 items-center justify-center">
                            <Ionicons name="image-outline" size={26} color={colors.green[500]} />
                        </View>

                        <View>
                            <Text className="font-roboto-bold">Nome do arquivo</Text>
                            <Text>20/03/2024 as 23:00</Text>
                        </View>
                    </View>

                    <View className="flex-row gap-x-2">
                        <View className="h-9 w-9 bg-slate-300 items-center justify-center">
                            <AntDesign name="download" size={20} color={colors.slate[500]} />
                        </View>
                        <View className="h-9 w-9 bg-slate-300 items-center justify-center">
                            <Feather name="send" size={20} color={colors.slate[500]} />
                        </View>
                    </View>
                </View>
         
            </View>

            <View className="h-[72px] mx-5 mb-3 px-5 border-[1px] border-slate-300 rounded-md justify-center">
                <View className="h-9 flex-row justify-between">
                    <View className="flex-row gap-x-4">
                        <View className="h-10 w-10 rounded-full bg-red-100 items-center justify-center">
                            <Ionicons name="document-text-outline" size={26} color={colors.red[500]} />
                        </View>

                        <View>
                            <Text className="font-roboto-bold">Nome do arquivo</Text>
                            <Text>20/03/2024 as 23:00</Text>
                        </View>
                    </View>

                    <View className="flex-row gap-x-2">
                        <View className="h-9 w-9 bg-slate-300 items-center justify-center">
                            <AntDesign name="download" size={20} color={colors.slate[500]} />
                        </View>
                        <View className="h-9 w-9 bg-slate-300 items-center justify-center">
                            <Feather name="send" size={20} color={colors.slate[500]} />
                        </View>
                    </View>
                </View>
         
            </View>

            <View className="h-[72px] mx-5 mb-3 px-5 border-[1px] border-slate-300 rounded-md justify-center">
                <View className="h-9 flex-row justify-between">
                    <View className="flex-row gap-x-4">
                        <View className="h-10 w-10 rounded-full bg-blue-100 items-center justify-center">
                            <SimpleLineIcons name="emotsmile" size={25} color={colors.blue[500]} />
                        </View>

                        <View>
                            <Text className="font-roboto-bold">Nome do arquivo</Text>
                            <Text>20/03/2024 as 23:00</Text>
                        </View>
                    </View>

                    <View className="flex-row gap-x-2">
                        <View className="h-9 w-9 bg-slate-300 items-center justify-center">
                            <AntDesign name="download" size={20} color={colors.slate[500]} />
                        </View>
                        <View className="h-9 w-9 bg-slate-300 items-center justify-center">
                            <Feather name="send" size={20} color={colors.slate[500]} />
                        </View>
                    </View>
                </View>
         
            </View>
        </ScrollView>



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
