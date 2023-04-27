import { useContext } from "react"
import PageAcess from "../../pages/usuario_cliente/PageAcess"
import Login from "../../pages/Loggin"
import { AuthContext } from "./AuthContext"

export const RequireAuth =({children}: {children:JSX.Element})=>{
    const auth=useContext(AuthContext)

    console.log(!auth.user)
    if(!auth.user){
        return <Login/>
    }
    else{
        return children
    }

    
}