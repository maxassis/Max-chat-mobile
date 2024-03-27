import { useState } from "react";
import { ScrollView, SafeAreaView, View, Text, KeyboardAvoidingView, TextInput } from "react-native";
import HeaderMenu from "../components/HeaderMenu";
import { CheckBox, Divider } from "@rneui/themed";
import { AntDesign } from '@expo/vector-icons';

export default function Informations() {
    const [checked, setChecked] = useState(true);
    const toggleCheckbox = () => setChecked(!checked);

    return (
        <SafeAreaView className="flex-1">
            <KeyboardAvoidingView behavior="padding" enabled className="flex-1">
                <HeaderMenu selected="informations" />
                <View className="flex-1 mt-5">
                   <ScrollView overScrollMode="never">
                    <Text className="text-xl ml-5 font-roboto-bold mb-5">Informações do chat</Text>

                    <Text className="ml-5 font-roboto-bold mb-1">Nome:</Text>
                    <TextInput className="h-10 pl-3 border-[0.5px] border-slate-400 mx-5 mb-3 rounded-sm" />
                    <Text className="ml-5 font-roboto-bold mb-1">Numero:</Text>
                    <TextInput className="h-10 pl-3 border-[0.5px] border-slate-400 mx-5 mb-3 rounded-sm" />

                    <View className="h-10 flex-row justify-between mx-5 mb-5">
                        <View className="flex-row w-[48%] h-full border-[0.5px] border-slate-400  items-center justify-center">
                            <CheckBox
                            checked={checked}
                            onPress={toggleCheckbox}
                            title="Arquivar chat"
                            iconType="material-community"
                            checkedIcon="checkbox-marked"
                            uncheckedIcon="checkbox-blank-outline"
                            checkedColor="#14B67B"
                            iconRight
                            containerStyle={{
                                padding: 0,
                                backgroundColor: "transparent",
                            }}
                            textStyle={{
                                fontFamily: "Roboto_700Bold",
                                fontSize: 15,
                                lineHeight: 19,
                                color: "#333333",
                            }}
                        />
                        </View>
                        <View className="w-[48%] border-[0.5px] border-slate-400  h-full flex-row items-center justify-center">
                        <CheckBox
                            checked={checked}
                            onPress={toggleCheckbox}
                            title="Chatbot"
                            iconType="material-community"
                            checkedIcon="checkbox-marked"
                            uncheckedIcon="checkbox-blank-outline"
                            checkedColor="#14B67B"
                            iconRight
                            containerStyle={{
                                padding: 0,
                                backgroundColor: "transparent",
                            }}
                            textStyle={{
                                fontFamily: "Roboto_700Bold",
                                fontSize: 15,
                                lineHeight: 19,
                                color: "#333333",
                            }}
                        />
                        </View>
                    </View>

                    <Divider />

                    <Text className="mt-5 ml-5 mb-5 text-xl font-roboto-bold">Responsavel</Text>
                    <View className="h-9 mb-5 flex-row px-5 justify-between">
                        <View className="h-full w-[71%] border-[0.5px] border-slate-400"></View>
                        <View className="h-full w-[90px] border-[0.5px] border-slate-400 items-center justify-center">
                            <Text className="text-center text-xs text-slate-400">
                                Delegar{"\n"}para fila
                            </Text>
                        </View>
                    </View>

                    <Divider />

                    <View className="flex-row mx-5 mt-5 mb-5 items-center justify-between">           
                            <Text className="text-xl font-roboto-bold">Tags</Text>
                        <View className="bg-cg-green  rounded-sm h-6 w-6 items-center justify-center">
                            <AntDesign name="plus" size={20} color="#fff" />
                        </View>        
                    </View> 

                    <View className="mx-5 mb-5 flex-row flex-wrap gap-y-3 justify-around">
                            <View className="bg-pink-200 self-start px-3 py-1 rounded-2xl">
                                <Text>Nome da tag</Text>
                            </View>

                            <View className="bg-blue-200 self-start px-3 py-1 rounded-2xl">
                                <Text>Nome da tag</Text>
                            </View>

                            <View className="bg-red-200 self-start px-3 py-1 rounded-2xl">
                                <Text>Nome da tag</Text>
                            </View>

                            <View className="bg-green-200 self-start px-3 py-1 rounded-2xl">
                                <Text>Nome da tag</Text>
                            </View>

                            <View className="bg-purple-200 self-start px-3 py-1 rounded-2xl">
                                <Text>Nome da tag</Text>
                            </View>

                            <View className="bg-gray-200 self-start px-3 py-1 rounded-2xl">
                                <Text>Nome da tag</Text>
                            </View>

                            <View className="bg-orange-200 self-start px-3 py-1 rounded-2xl">
                                <Text>Nome da tag</Text>
                            </View>
                    </View>

                    <Divider />

                    <Text className="mt-5 ml-5 mb-5 text-xl font-roboto-bold">Campos personalizados</Text>
                    <View className="mx-5 mb-3 flex-row justify-between items-center">
                        <Text className="text-base h-9 text-slate-400">Nome da empresa:</Text>
                        <TextInput className="border-[0.5px] w-6/12 border-slate-400 h-full rounded-sm" />    
                    </View> 

                    <View className="mx-5 mb-3 flex-row justify-between items-center">
                        <Text className="text-base h-9 text-slate-400">Nome da empresa:</Text>
                        <TextInput className="border-[0.5px] w-6/12 border-slate-400 h-full rounded-sm" />    
                    </View> 

                    <View className="mx-5 mb-3 flex-row justify-between items-center">
                        <Text className="text-base h-9 text-slate-400">CNPJ:</Text>
                        <TextInput className="border-[0.5px] w-6/12 border-slate-400 h-full rounded-sm" />    
                    </View> 

                    <View className="mx-5 mb-3 flex-row justify-between items-center">
                        <Text className="text-base h-9 text-slate-400">E-mail:</Text>
                        <TextInput className="border-[0.5px] w-6/12 border-slate-400 h-full rounded-sm" />    
                    </View> 

                    <View className="mx-5 mb-3 flex-row justify-between items-center">
                        <Text className="text-base h-9 text-slate-400">Data de cadastro:</Text>
                        <TextInput className="border-[0.5px] w-6/12 border-slate-400 h-full rounded-sm" />    
                    </View> 

                    <View className="mx-5 mb-3 flex-row justify-between items-center">
                        <Text className="text-base h-9 text-slate-400">Data da conta:</Text>
                        <TextInput className="border-[0.5px] w-6/12 border-slate-400 h-full rounded-sm" />    
                    </View> 

                    <View className="mx-5 mb-5 flex-row justify-between items-center">
                        <Text className="text-base h-9 text-slate-400">Aparelho de origem:</Text>
                        <TextInput className="border-[0.5px] w-6/12 border-slate-400 h-full rounded-sm" />    
                    </View> 
          
                    </ScrollView>                
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>



    )

}