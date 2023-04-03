import { createContext } from "react";
import { User, UserLogin, UserRegister } from "../../types/User";



export type AuthContextType = {
    createUser:(usuario:UserRegister)=>Promise<void>;
    userAdm: User | undefined ;
    logandoAdm: (usuario:UserLogin)=> Promise<void>;
    signout:() =>void;
    
    
}


export const AuthContext = createContext<AuthContextType>(null!);