import { createContext } from "react";
import { User } from "../../types/User";


export type AuthContextType = {
    user:User | null;
    logando: (email:string, password:string)=> Promise<boolean>;
    signout:() =>void;
    register:(user:User)=>Promise<boolean>;
}


export const AuthContext = createContext<AuthContextType>(null!);