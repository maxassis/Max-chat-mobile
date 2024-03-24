import { SafeAreaView, View, Text, ScrollView } from "react-native";
import HeaderMenu from "../components/HeaderMenu";
import { AntDesign } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Feather } from "@expo/vector-icons";

export default function Notes() {
  return (
    <SafeAreaView className="flex-1">
      <HeaderMenu selected="notes" />
      <View className="flex-1 pt-5">
        <Text className="text-xl ml-5 font-roboto-bold ">Anotações internas</Text>

        <View className="h-9 mt-2 mx-5 mb-4 pl-1 flex-row justify-between items-center">
          <View className="h-7 pl-1 pr-2 border-[0.5px] gap-x-1 flex-row border-slate-500 items-center justify-center ">
            <AntDesign name="up" size={20} color={colors.slate[500]} />
            <Text className="text-base text-slate-500">
              Mostrar mais recentes
            </Text>
          </View>

          <View className="h-9 w-9 bg-cg-green justify-center items-center">
            <AntDesign name="plus" size={24} color="#fff" />
          </View>
        </View>

        <ScrollView overScrollMode="never">
          <View className="px-5">
            <View className="w-full mb-3 bg-amber-100 border-2 border-yellow-500 p-5">
              <View className="flex-row  justify-between items-center ">
                <View>
                  <Text className="text-base">Gabi Ware</Text>
                  <Text className="font-roboto-bold text-xs">
                    20/03/2024 às 12:15
                  </Text>
                </View>

                <View className="w-9 h-9 bg-white border-[1px] border-slate-500 rounded-sm items-center justify-center">
                  <Feather name="trash-2" size={24} color={colors.slate[500]} />
                </View>
              </View>

              <Text className="mt-5 text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                velit dolores, dolor, amet a aliquid maiores nam rem nihil
                temporibus repellendus magni voluptas ipsam? A dolores deserunt
                soluta eos esse?
              </Text>
            </View>
          </View>

          <View className="px-5">
            <View className="w-full mb-3 bg-amber-100 border-2 border-yellow-500 p-5">
              <View className="flex-row  justify-between items-center ">
                <View>
                  <Text className="text-base">Gabi Ware</Text>
                  <Text className="font-roboto-bold text-xs">
                    20/03/2024 às 12:15
                  </Text>
                </View>

                <View className="w-9 h-9 bg-white border-[1px] border-slate-500 rounded-sm items-center justify-center">
                  <Feather name="trash-2" size={24} color={colors.slate[500]} />
                </View>
              </View>

              <Text className="mt-5 text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                velit dolores, dolor, amet a aliquid maiores nam rem nihil
                temporibus repellendus magni voluptas ipsam? A dolores deserunt
                soluta eos esse?
              </Text>
            </View>
          </View>

          <View className="px-5">
            <View className="w-full mb-3 bg-amber-100 border-2 border-yellow-500 p-5">
              <View className="flex-row  justify-between items-center ">
                <View>
                  <Text className="text-base">Gabi Ware</Text>
                  <Text className="font-roboto-bold text-xs">
                    20/03/2024 às 12:15
                  </Text>
                </View>

                <View className="w-9 h-9 bg-white border-[1px] border-slate-500 rounded-sm items-center justify-center">
                  <Feather name="trash-2" size={24} color={colors.slate[500]} />
                </View>
              </View>

              <Text className="mt-5 text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                velit dolores, dolor, amet a aliquid maiores nam rem nihil
                temporibus repellendus magni voluptas ipsam? A dolores deserunt
                soluta eos esse?
              </Text>
            </View>
          </View>

          <View className="px-5">
            <View className="w-full mb-3 bg-amber-100 border-2 border-yellow-500 p-5">
              <View className="flex-row  justify-between items-center ">
                <View>
                  <Text className="text-base">Gabi Ware</Text>
                  <Text className="font-roboto-bold text-xs">
                    20/03/2024 às 12:15
                  </Text>
                </View>

                <View className="w-9 h-9 bg-white border-[1px] border-slate-500 rounded-sm items-center justify-center">
                  <Feather name="trash-2" size={24} color={colors.slate[500]} />
                </View>
              </View>

              <Text className="mt-5 text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                velit dolores, dolor, amet a aliquid maiores nam rem nihil
                temporibus repellendus magni voluptas ipsam? A dolores deserunt
                soluta eos esse?
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
