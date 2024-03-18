import { KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableNativeFeedbackComponent, TouchableOpacity, View } from "react-native"
import Logo from "../../assets/chatguru.svg"

export default function Login() {
    return (
        <SafeAreaView className="flex-1">
            {/* <KeyboardAvoidingView> */}
            <View className="flex-1 bg-cg-black items-center justify-center px-5">
                <View className="mb-16">
                    <Logo width={240} />
                    <Text className="text-white text-base text-center">Bem vindo a nossa plataforma!</Text>
               </View>

               <View className= "w-full">

                <Text className="text-white text-base">Email</Text>
                <TextInput className="bg-white mt-2 h-11 rounded pl-3"  />

                <Text className="text-white text-base mt-10 ">Senha</Text>
                <TextInput className="bg-white mt-2 h-11 rounded pl-3"  />
                            
               </View>

               <TouchableOpacity className="bg-cg-green mt-24 p-3 rounded w-full items-center">
                    <Text className="text-white text-base font-bold">Entrar</Text>
                </TouchableOpacity> 


            </View>
                
            {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
        
    )
}