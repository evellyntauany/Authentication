import { useContext } from "react"
import PageLogginAdm from '../../pages/usuario_adm/PageLogginAdm/index';
import { AuthContextUser } from "./AuthContextUser";

export const RequireAuthAdm =({children}: {children:JSX.Element})=>{
const auth = useContext(AuthContextUser)

console.log(auth.userAdm)
    if(auth.userAdm){
        return <PageLogginAdm/>
    }
    else{
        return children
    }

    
}