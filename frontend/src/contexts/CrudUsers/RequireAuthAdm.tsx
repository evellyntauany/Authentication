import { useContext } from "react"

import { AuthContextUser } from "./AuthContextUser";

export const RequireAuthAdm =({children}: {children:JSX.Element})=>{
const auth = useContext(AuthContextUser)

console.log(auth.userAdm)
    if(auth.userAdm){
        return 
    }
    else{
        return children
    }

    
}