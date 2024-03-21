import { Text, View } from "react-native";
import { Avatar, AvatarImage, AvatarFallback } from "../components/Avatar";

export default function ReceivedMsg({msg}: {msg: string}) {
    return(
        <View className="mb-3">
          <View className="ml-3 flex-row">
            <Avatar className="h-12 w-12 ">
              <AvatarImage source={require("../../assets/compress.jpg")} />
              <AvatarFallback>CG</AvatarFallback>
            </Avatar>

            <View className="ml-3 pr-6 self-start flex-1">
              <View className="self-start bg-slate-100 mb-1 rounded-xl p-3 ">
                <Text className="text-base leading-5">
                  {msg}
                </Text>
              </View>
              <View className="max-w-[90%]">
                <Text className="text-xs text-slate-500">12:30</Text>
              </View>
            </View>
          </View>
        </View>
    )
}