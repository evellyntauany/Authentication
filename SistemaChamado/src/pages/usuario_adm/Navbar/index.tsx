import { useContext } from "react"
import LinkComponent from "../../../components/Link"
import { AuthContext } from "../../../contexts/Auth/AuthContext"


const Navbar =()=>{
    const {user,signout} = useContext(AuthContext)   
    return(

       <div className="ContainerNav">
        <LinkComponent
            toPage="/admin"
            text="Home"
       ></LinkComponent>

       

        <LinkComponent
            toPage="/logginAdm"
            text="Login"
       ></LinkComponent>
    
        </div>
    )

}
export default Navbar