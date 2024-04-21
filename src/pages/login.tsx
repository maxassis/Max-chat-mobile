import { KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
// import Logo from "../../assets/chatguru.svg"
import tokenExists from "../store/auth"

export default function Login() {
    let authStore = tokenExists((state) => state.setToken)

    return (
        <SafeAreaView className="flex-1">
            <KeyboardAvoidingView behavior="padding" enabled className="flex-1">
            <View className="flex-1 bg-cg-black items-center justify-center px-5">
                <View className="mb-16">
                    {/* <Logo width={240} /> */}
                    <Text className="text-white text-5xl">Max Chat</Text>
                    <Text className="text-white text-base text-center">Bem vindo a nossa plataforma!</Text>
               </View>

               <View className= "w-full">

                <Text className="text-white text-base">Email</Text>
                <TextInput className="bg-white mt-2 h-11 rounded pl-3"  />

                <Text className="text-white text-base mt-10 ">Senha</Text>
                <TextInput className="bg-white mt-2 h-11 rounded pl-3"  />
                            
               </View>

               <TouchableOpacity className="bg-cg-green mt-20 p-3 rounded w-full items-center" onPress={() => authStore()} >
                    <Text className="text-white text-base font-bold">Entrar</Text>
                </TouchableOpacity> 
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}