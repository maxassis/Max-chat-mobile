import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import colors from "tailwindcss/colors";



export default function Dashboard() {
    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-1" overScrollMode="never">
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

                <View className="h-16 px-5 bg-slate-200 mx-5 rounded-t-md items-center justify-between flex-row border-b-[2px] border-slate-300">
                    <Text className="font-roboto-bold text-base">DEPTO OU USUÁRIO</Text>
                    <View className="flex-row gap-x-[14px] mr-[6px]">
                        <View className="h-6 w-6 bg-red-400 rounded-full items-center justify-center">
                            <Feather name="user" size={15} color="#fff" />
                        </View>
                        <View className="h-6 w-6 bg-blue-400 rounded-full items-center justify-center">
                            <AntDesign name="customerservice" size={15} color="#fff" />
                        </View>
                        <View className="h-6 w-6 bg-yellow-400 rounded-full items-center justify-center">
                            <MaterialCommunityIcons name="dots-horizontal" size={15} color="#fff" />
                        </View>
                        <View className="h-6 w-6 bg-gray-400 rounded-full items-center justify-center">
                            <FontAwesome6 name="equals" size={15} color="#fff" />
                        </View>
                    </View>
                </View>

                <View className="h-12  px-5 mx-5 items-center justify-between flex-row border-l-[0.5px] border-b-[2px] border-r-[0.5px] border-slate-400 ">
                    <View className="flex-row gap-x-4 ">
                        <Feather name="user" size={20} color="#a3a3a3" />
                        <Text className="font-roboto-bold">Sem delegado</Text>
                    </View>

                    <View className="flex-row gap-x-1">
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">01</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">02</Text>
                        </View>
                    </View>
                </View>

                <View className="h-12  px-5 mx-5 items-center justify-between flex-row border-l-[0.5px] border-b-[0.5px] border-r-[0.5px] border-slate-400 ">
                    <View className="flex-row gap-x-4 ">
                        <Feather name="user" size={20} color="#a3a3a3" />
                        <Text className="font-roboto-bold">Financeiro</Text>
                    </View>

                    <View className="flex-row gap-x-1">
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">01</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">02</Text>
                        </View>
                    </View>
                </View>

                <View className="h-12  px-5 mx-5 items-center justify-between flex-row border-l-[0.5px] border-b-[0.5px] border-r-[0.5px] border-slate-400 ">
                    <View className="flex-row gap-x-4 ">
                        <Feather name="user" size={20} color="#a3a3a3" />
                        <Text className="font-roboto-bold">Suporte N1</Text>
                    </View>

                    <View className="flex-row gap-x-1">
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">01</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">02</Text>
                        </View>
                    </View>
                </View>

                <View className="h-12  px-5 mx-5 items-center justify-between flex-row border-l-[0.5px] border-b-[0.5px] border-r-[0.5px] border-slate-400 ">
                    <View className="flex-row gap-x-4 ">
                        <Feather name="user" size={20} color="#a3a3a3" />
                        <Text className="font-roboto-bold">Suporte N2</Text>
                    </View>

                    <View className="flex-row gap-x-1">
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">01</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">02</Text>
                        </View>
                    </View>
                </View>

                <View className="h-12  px-5 mx-5 items-center justify-between flex-row border-l-[0.5px] border-b-[2px] border-r-[0.5px] border-slate-400 ">
                    <View className="flex-row gap-x-4 ">
                        <Feather name="user" size={20} color="#a3a3a3" />
                        <Text className="font-roboto-bold">Recursos humanos</Text>
                    </View>

                    <View className="flex-row gap-x-1">
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">01</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">02</Text>
                        </View>
                    </View>
                </View>

                <View className="h-12  px-5 mx-5 items-center justify-between flex-row border-l-[0.5px] border-b-[0.5px] border-r-[0.5px] border-slate-400 ">
                    <View className="flex-row gap-x-4 items-center ">
                        <Feather name="user" size={20} color="#a3a3a3" />
                        <View className=" w-32">
                        <Text numberOfLines={1} className="font-roboto-bold">Marina Silva</Text>
                        <Text numberOfLines={1} className="text-xs text-slate-400">marina.silva@chtgurucom.br</Text>
                        </View>
                    </View>

                    <View className="flex-row gap-x-1">
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">01</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">02</Text>
                        </View>
                    </View>
                </View>

                <View className="h-12  px-5 mx-5 items-center justify-between flex-row border-l-[0.5px] border-b-[0.5px] border-r-[0.5px] border-slate-400 ">
                    <View className="flex-row gap-x-4 items-center ">
                        <Feather name="user" size={20} color="#a3a3a3" />
                        <View className=" w-32">
                        <Text numberOfLines={1} className="font-roboto-bold">João Costa</Text>
                        <Text numberOfLines={1} className="text-xs text-slate-400">joao.costa@chtgurucom.br</Text>
                        </View>
                    </View>

                    <View className="flex-row gap-x-1">
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">01</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">02</Text>
                        </View>
                    </View>
                </View>

                <View className="h-12  px-5 mx-5 items-center justify-between flex-row border-l-[0.5px] border-b-[0.5px] border-r-[0.5px] border-slate-400 ">
                    <View className="flex-row gap-x-4 items-center">
                        <Feather name="user" size={20} color="#a3a3a3" />
                        <View className=" w-32">
                        <Text numberOfLines={1} className="font-roboto-bold">Bruna Lira</Text>
                        <Text numberOfLines={1} className="text-xs text-slate-400">bruna.lira@chtgurucom.br</Text>
                        </View>
                    </View>

                    <View className="flex-row gap-x-1">
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">01</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">0</Text>
                        </View>
                        <View className="h-[37px] w-[34px] items-center justify-center border-[0.5px] border-slate-400">
                            <Text className="text-slate-400">02</Text>
                        </View>
                    </View>
                </View>

                <Text className="text-xl font-roboto-bold mt-5 ml-5">Status dos chats</Text>
                <Text className="ml-5 mt-1 mb-5">Número de atendimento para cada status da sua conta</Text>

                <View className="mx-8 justify-between flex-row mb-3">
                    <View className="w-40 h-16 rounded-b-xl border-[0.5px] border-t-0 border-slate-300">
                        <View className="h-[2px] bg-red-500"></View>
                        <View className="flex-row items-center pt-3 pl-2 gap-x-2">
                        <View className="w-7 h-7 bg-red-500 rounded-full items-center justify-center">
                            <Feather name="user-plus" size={15} color="#fff" />
                        </View>
                        <View className="">
                            <Text className="text-red-500 text-xs">ABERTO</Text>
                            <Text className="text-red-500 font-roboto-bold text-base">10</Text>
                        </View>
                        </View>
                    </View>
                    <View className="w-40 h-16 rounded-b-xl border-[0.5px] border-t-0 border-slate-300">
                        <View className="h-[2px] bg-blue-500"></View>
                        <View className="flex-row items-center pt-3 pl-2 gap-x-2">
                        <View className="w-7 h-7 bg-blue-500 rounded-full items-center justify-center">
                            <Feather name="user-plus" size={15} color="#fff" />
                        </View>
                        <View className="">
                            <Text className="text-blue-500 text-xs">EM ATENDIMENTO</Text>
                            <Text className="text-blue-500 font-roboto-bold text-base">10</Text>
                        </View>
                        </View>
                    </View>
                </View>

                <View className="mx-8 justify-between flex-row mb-3">
                    <View className="w-40 h-16 rounded-b-xl border-[0.5px] border-t-0 border-slate-300">
                        <View className="h-[2px] bg-yellow-500"></View>
                        <View className="flex-row items-center pt-3 pl-2 gap-x-2">
                        <View className="w-7 h-7 bg-yellow-500 rounded-full items-center justify-center">
                            <Feather name="user-plus" size={15} color="#fff" />
                        </View>
                        <View className="">
                            <Text className="text-yellow-500 text-xs">ABERTO</Text>
                            <Text className="text-yellow-500 font-roboto-bold text-base">10</Text>
                        </View>
                        </View>
                    </View>
                    <View className="w-40 h-16 rounded-b-xl border-[0.5px] border-t-0 border-slate-300">
                        <View className="h-[2px] bg-green-500"></View>
                        <View className="flex-row items-center pt-3 pl-2 gap-x-2">
                        <View className="w-7 h-7 bg-green-500 rounded-full items-center justify-center">
                            <Feather name="user-plus" size={15} color="#fff" />
                        </View>
                        <View className="">
                            <Text className="text-green-500 text-xs">EM ATENDIMENTO</Text>
                            <Text className="text-green-500 font-roboto-bold text-base">10</Text>
                        </View>
                        </View>
                    </View>
                </View>

                <View className="mx-8 justify-between flex-row mb-3">
                    <View className="w-40 h-16 rounded-b-xl border-[0.5px] border-t-0 border-slate-300">
                        <View className="h-[2px] bg-sky-500"></View>
                        <View className="flex-row items-center pt-3 pl-2 gap-x-2">
                        <View className="w-7 h-7 bg-sky-500 rounded-full items-center justify-center">
                            <Feather name="user-plus" size={15} color="#fff" />
                        </View>
                        <View className="">
                            <Text className="text-sky-500 text-xs">FECHADO</Text>
                            <Text className="text-sky-500 font-roboto-bold text-base">10</Text>
                        </View>
                        </View>
                    </View>
                    <View className="w-40 h-16 rounded-b-xl border-[0.5px] border-t-0 border-slate-300">
                        <View className="h-[2px] bg-gray-500"></View>
                        <View className="flex-row items-center pt-3 pl-2 gap-x-2">
                        <View className="w-7 h-7 bg-gray-500 rounded-full items-center justify-center">
                            <Feather name="user-plus" size={15} color="#fff" />
                        </View>
                        <View className="">
                            <Text className="text-gray-500 text-xs">SEM STATUS</Text>
                            <Text className="text-gray-500 font-roboto-bold text-base">10</Text>
                        </View>
                        </View>
                    </View>
                </View>
            </View>

            <Text className="ml-5 mb-5 mt-1 text-xl font-roboto-bold">Usuarios - Chatguru Suporte</Text>

            <View className="h-16  bg-slate-200 mx-5 rounded-t-md items-center justify-between flex-row border-b-[2px] border-slate-300">
                   <View className="h-full w-[25%] rounded-tl-md items-center justify-center">
                        <Text className="text-base font-roboto-bold">TIPO</Text>
                   </View>
                   <View className="h-full w-[45%] items-center justify-center">
                        <Text className="text-base font-roboto-bold self-start">NOME</Text>
                   </View>
                   <View className="h-full w-[30%] rounded-tr-md items-center justify-center">
                        <Text className="text-base font-roboto-bold">STATUS</Text>
                   </View>
            </View>

            <View className="mb-5">
                <View className="h-12 border-[0.5px] border-t-0 justify-between border-slate-400 mx-5 flex-row">
                    <View className=" flex-row w-[70%]">
                        <View className="w-[35%] items-center justify-center">
                            <Feather name="user" size={24} color="#a3a3a3" />
                        </View>
                        <View className="w-[65%] justify-center">
                            <Text className="font-roboto-bold" numberOfLines={1}>Ana Barcelos</Text>
                            <Text className="text-xs text-slate-400" numberOfLines={1}>ana.barcelos@chatguru.com.br</Text>
                        </View>
                    </View>
                    <View className="w-[30%] items-center justify-center">
                    <View className="w-[62px] h-[30px] bg-green-500 items-center justify-center">
                        <Text className="text-white">Logado</Text>
                    </View>
                    </View>
                </View>
            </View>

            </ScrollView>
        </SafeAreaView>
    )
}