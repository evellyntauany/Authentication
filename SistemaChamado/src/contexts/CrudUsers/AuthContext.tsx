import { createContext } from "react";



export type AuthContextType = {
    createUser: (id:number)=> Promise<void>;
 //   readUser: (usuario:UserLogin)=> Promise<User>;
    updateUser: (id:number)=> Promise<void>;
    deleteUser: (id:number)=> Promise<void>;
    
}


export const AuthContext = createContext<AuthContextType>(null!);