import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../pages/login"


const Auth = createNativeStackNavigator()

export default function AuthRoutes() {
    return (
        <Auth.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Auth.Screen name="Login" component={Login} />
        </Auth.Navigator>
    )
}