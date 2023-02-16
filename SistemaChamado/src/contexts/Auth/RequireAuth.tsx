import { useContext } from "react"
import PageLoggin from "../../pages/PageLoggin"
import { AuthContext } from "./AuthContext"

export const RequireAuth =({children}: {children:JSX.Element})=>{
    const auth=useContext(AuthContext)

    if(!auth.user){
        return <PageLoggin/>
    }

    return children
}