import { useContext } from "react"
import PageLogginAdm from '../../pages/usuario_adm/PageLogginAdm/index';
import { AuthContext } from "./AuthContext";

export const RequireAuthAdm =({children}: {children:JSX.Element})=>{
const auth = useContext(AuthContext)

console.log(auth.userAdm)
    if(!auth.userAdm){
        return <PageLogginAdm/>
    }
    else{
        return children
    }

    
}