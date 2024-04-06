import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Chatlist from '../pages/chatlist';
import Chat from '../pages/chat';
import DrawerRoutes from './drawer.routes';
import Informations from '../pages/informations';
import Notes from '../pages/notes';
import Funnel from '../pages/funnel';
import Chatbot from '../pages/chatbot';
import Nps from '../pages/nps';
import Delegated from '../pages/delegated';
import Media from '../pages/media';
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
            <App.Screen name="Informations" component={Informations} />
            <App.Screen name="Notes" component={Notes} />
            <App.Screen name="Funnel" component={Funnel} />
            <App.Screen name="Chatbot" component={Chatbot} />
            <App.Screen name="Nps" component={Nps} />
            <App.Screen name="Delegated" component={Delegated} />
            <App.Screen name="Media" component={Media} />
        </App.Navigator>
    )
}