import { Link } from "react-router-dom"

const LinkComponent = (props:{toPage:string,text:string}) => {
    return(
        <Link className="linkComponent" to={props.toPage}>{props.text}</Link>
        
    )
}
export default LinkComponent