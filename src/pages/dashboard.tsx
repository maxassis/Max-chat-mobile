import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import colors from "tailwindcss/colors";



export default function Dashboard() {
    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-1" >
            <View className="flex-1">
                <Text className="mt-5 ml-5 mb-5 text-xl font-roboto-bold">Bom dia, Gabi</Text>

                <View className="bg-blue-400 mb-5 rounded-md mx-5 p-4">
                    <Text className="text-white text-lg font-roboto-bold mb-3">A Chatguru informa:</Text>
                    <Text className="text-white text-base mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugit illo rerum, excepturi inventore voluptatem? Quam placeat pariatur maiores molestias itaque quisquam distinctio, aperiam, eveniet fuga nobis ullam dignissimos modi.</Text>

                    <TouchableOpacity className="self-end py-2  bg-slate-100 w-[105px] border-[1px] border-slate-800 rounded-lg flex-row items-center justify-center">
                        <AntDesign name="plus" size={16} color={colors.slate[700]} />
                        <Text className="text-slate-700 ml-1">Saber mais</Text>
                    </TouchableOpacity>
                </View>

                <Text className="ml-5 mb-1 text-lg font-roboto-bold">Chats não resolvidos/fechados</Text>
                <Text className="mx-5 mb-5">Visualize todos os chats que ainda não tiveram o atendimento concluido.</Text>

                <View className="h-16 px-5 bg-slate-200 mx-5 rounded-t-md items-center justify-between flex-row">
                    <Text className="font-roboto-bold text-base">DEPTO OU USUÁRIO</Text>
                    <View className="flex-row gap-x-4">
                        <View className="h-6 w-6 bg-pink-500 rounded-full"></View>
                        <View className="h-6 w-6 bg-pink-500 rounded-full"></View>
                        <View className="h-6 w-6 bg-pink-500 rounded-full"></View>
                        <View className="h-6 w-6 bg-pink-500 rounded-full"></View>
                    </View>
                </View>

            </View>
            </ScrollView>
        </SafeAreaView>
    )
}