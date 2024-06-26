import { StackRouter } from "@react-navigation/native"
import AuthRoutes from "./auth.routes"
import StackRoutes from "./stack.routes"
import DrawerRoutes from "./drawer.routes"
import tokenExists from '../store/auth';


export default function Routes() {
//    tokenExists((state) => state.token)
   let authStore = tokenExists((state) => state.token)
   
   return authStore ? <StackRoutes /> : <AuthRoutes />
}