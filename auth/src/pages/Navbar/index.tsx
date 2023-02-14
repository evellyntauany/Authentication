import { Link } from "react-router-dom"

const Navbar =()=>{
    return(
        <>
        <Link to={"/"}>Home</Link>
        <br></br>
        <Link to={"/PageLoggin"}>Logar</Link>
        </>
    )

}
export default Navbar