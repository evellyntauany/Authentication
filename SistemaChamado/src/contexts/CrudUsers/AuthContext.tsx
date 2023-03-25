import { createContext } from "react";
import { UserRegister } from "../../types/User";



export type AuthContextType = {
    createUser:(usuario:UserRegister)=>Promise<void>;
    
}


export const AuthContext = createContext<AuthContextType>(null!);