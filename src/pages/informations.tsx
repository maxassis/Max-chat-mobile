import { useState } from "react";
import { SafeAreaView, View, Text, KeyboardAvoidingView, TextInput } from "react-native";
import HeaderMenu from "../components/HeaderMenu";
import { CheckBox, Divider } from "@rneui/themed";

export default function Informations() {
    const [checked, setChecked] = useState(true);
    const toggleCheckbox = () => setChecked(!checked);

    return (
        <SafeAreaView className="flex-1">
            <KeyboardAvoidingView behavior="padding" enabled className="flex-1">
                <HeaderMenu selected="informations" />
                <View className="flex-1 mt-5">
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
                </View>

                

            </KeyboardAvoidingView>
        </SafeAreaView>



    )

}