import { useContext } from "react"
import LinkComponent from "../../../components/Link"


const Navbar =()=>{
   
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