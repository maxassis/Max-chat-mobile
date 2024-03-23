import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
  } from "react-native";
  import { Avatar, AvatarImage, AvatarFallback } from "../components/Avatar";
  import { Ionicons } from "@expo/vector-icons";
  import { cva } from "class-variance-authority";
  import { Feather } from "@expo/vector-icons";
  import colors from "tailwindcss/colors";
  import { Octicons } from "@expo/vector-icons";
  import { SimpleLineIcons } from "@expo/vector-icons";
  
  type pageProps = {
      selected: 'informations' | 'funnels' | 'chatbot' | 'media' | 'attendance' | 'notes' | 'delegated'
  }
  
  export default function HeaderMenu({selected}: pageProps ) {
    return (
        <>
        <View className="h-16 bg-white items-center px-3 flex-row border-b-[0.5px] border-b-slate-300  ">
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
        </View>
  
        <View className="h-[61px] flex-row items-center justify-around border-b-[0.5px] border-b-slate-300">
          <TouchableOpacity className={page({ intent: selected === 'informations' ? "select" : null})}>
            <Feather name="user" size={27} color={selected === 'informations' ? "#fff" : colors.slate[400]} />
          </TouchableOpacity>
          <TouchableOpacity className={page({ intent: selected === 'notes' ? "select" : null})}>
            <Ionicons name="document-text-outline" size={27} color={selected === 'notes' ? "#fff" : colors.slate[400]} />
          </TouchableOpacity>
          <TouchableOpacity className={page({ intent: selected === 'funnels' ? "select" : null})}>
            <Ionicons name="funnel-outline" size={27} color={selected === 'funnels' ? "#fff" : colors.slate[400]} />
          </TouchableOpacity>
          <TouchableOpacity className={page({ intent: selected === 'chatbot' ? "select" : null})}>
            <Octicons name="dependabot" size={27} color={selected === 'chatbot' ? "#fff" : colors.slate[400]} />
          </TouchableOpacity>
          <TouchableOpacity className={page({ intent: selected === 'attendance' ? "select" : null })}>
            <SimpleLineIcons name="graph" size={27} color={selected === 'attendance' ? "#fff" : colors.slate[400]} />
          </TouchableOpacity>
          <TouchableOpacity className={page({ intent: selected === 'delegated' ? "select" : null })}>
            <Feather name="user-plus" size={27} color={selected === 'delegated' ? "#fff" : colors.slate[400]} />
          </TouchableOpacity>
          <TouchableOpacity className={page({ intent: selected === 'media' ? "select" : null })}>
            <Ionicons name="play-outline" size={27} color={selected === 'media' ? "#fff" : colors.slate[400]} />
          </TouchableOpacity>
        </View>
      </>
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
  
  const page = cva(
      "h-9 w-9 border-slate-400 border-[0.8px] rounded-md items-center justify-center",
      {
        variants: {
          intent: {
              select: "bg-blue-700 border-0" 
          }
        }          
      }
  )
