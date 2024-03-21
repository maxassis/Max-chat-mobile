import { Text, View } from "react-native";
import { Avatar, AvatarImage, AvatarFallback } from "../components/Avatar";
export default function ReceivedMsg() {
    return(
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
    )
}