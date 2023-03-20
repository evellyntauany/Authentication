
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { useContext } from 'react';

const PageAcess=() =>{
    
   const user = useContext(AuthContext)

    return(<h1>
       Dashboard, Bem vindo {user.user?.name}
    </h1>)

}
export default PageAcess