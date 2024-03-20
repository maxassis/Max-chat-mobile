import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";


function teste(name: string) {
    if(name == "ABERTO")
    return "bg-red-600"
}



export default function Card() {
  return (
    <View className="h-20 border-b-[0.5px] border-slate-300 flex-row items-center justify-between pr-4 pl-2 gap-x-2 ">
      <View className="flex-row gap-x-2 pr-2 flex-1">
        <Image
          source={{ uri: "https://picsum.photos/48/48" }}
          className="w-12 h-12 rounded-full self-center"
        />

        <View className="ml-3 gap-y-1 flex-1">
          <Text className="font-roboto-bold text-lg" numberOfLines={1}>
            Gabi Ware
          </Text>
          <Text className="text-slate-500 text-sm" numberOfLines={1}>
            Ola!!! tudo bem com vc ??? ejejejejejejejejjejejejejjejejej
          </Text>
        </View>
      </View>

      <View className="">
        <View className="flex-row gap-x-2 mb-3 justify-end">
          <View className="py-[0.5px] px-2 rounded-full items-center justify-center bg-red-600">
            <Text className="text-xs">ABERTO</Text>
          </View>
          <View className="py-[0.5px] px-2 rounded-full items-center justify-center bg-red-600">
            <Text>1</Text>
          </View>
        </View>

        <View className="flex-row justify-end">
          <Text className="text-slate-500 text-xs">10:30</Text>
          <View className="flex-row">
            <Feather
              name="user"
              size={15}
              color="red"
              style={{ paddingLeft: 6 }}
            />
            <Feather
              name="users"
              size={15}
              color="green"
              style={{ paddingLeft: 6 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
