import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chatlist from '../pages/chatlist';
import Chats from '../pages/chat';
//import Filters from '../pages/filters';
//import TabRoutes from './tabs.routes';
//import DrawerRoutes from './drawer.routes';
//import Configurations from '../pages/Configurations';


const App = createNativeStackNavigator()

export default function AppRoutes() {
    return (
        <App.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Chatlist"
        >
            <App.Screen name="Chatlist" component={Chatlist} />
            <App.Screen name="Chats" component={Chats} />
        </App.Navigator>
    )
}