import { Link } from "react-router-dom"

const Navbar =()=>{
    return(
        <>
        <Link to={"/"}>Home</Link>
        <br></br>
        <Link to={"/PageLoggin"}>Logar</Link>
        <Link to={"/Register"}>Register</Link>
        </>
    )

}
export default Navbar