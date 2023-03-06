import { createContext } from "react";
import { User, UserLogin, UserRegister } from "../../types/User";


export type AuthContextType = {
    user: User | undefined ;
    logando: (usuario:UserLogin)=> Promise<void>;
    signout:() =>void;
    register:(usuario:UserRegister)=>Promise<void>;
    isAuthenticaded: ()=>boolean;
}


export const AuthContext = createContext<AuthContextType>(null!);