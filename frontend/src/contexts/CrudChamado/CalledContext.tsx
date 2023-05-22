import { createContext } from "react";
import { description } from "../../types/Called";



export type CalledContextType = {
    createCalled:(description:description) =>Promise<void>
    
}


export const CalledContext = createContext<CalledContextType>(null!);