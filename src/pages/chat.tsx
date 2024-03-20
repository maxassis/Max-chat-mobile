import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, AvatarImage, AvatarFallback } from "../components/Avatar";

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

          <View className="bg-blue-500 h-12 w-56 ml-2 justify-between">
            <Text numberOfLines={1}>Gabi Ware</Text>

            <View>
              <Text className="text-white">AGUARDANDO</Text>
            </View>
          </View>

          <TouchableOpacity className="ml-auto"> 
            <Ionicons name="ellipsis-vertical-sharp" size={28} color="#fff" />    
          </TouchableOpacity>   


        </View>
      </View>
    </SafeAreaView>
  );
}
