import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Chatlist from '../pages/chatlist';
import Chat from '../pages/chat';
import DrawerRoutes from './drawer.routes';
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
            initialRouteName="ChatlistInitial"
        >
            <App.Screen name="ChatlistInitial" component={DrawerRoutes} />
            <App.Screen name="Chat" component={Chat} />
        </App.Navigator>
    )
}