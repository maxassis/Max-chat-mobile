import { Text, View } from "react-native";
import { Avatar, AvatarImage, AvatarFallback } from "../components/Avatar";

export default function SendMsg({msg}: {msg: string}) {
    return (
        <View className="mb-3">
          <View className="mr-3 flex-row justify-end">
            <View className="mr-3 pl-6 items-end flex-1">
              <View className=" bg-green-50 mb-1 rounded-xl p-3 ">
                <Text className="text-base leading-5">
                  {msg}
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
    )


}