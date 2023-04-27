import { ReactNode } from "react"
import { Link } from "react-router-dom"

type PropsLink = {
    toPage:string, 
    children?: ReactNode
    className?:string
}

const LinkComponent = (props:PropsLink) => {
    return(
        <Link className={props.className} to={props.toPage}>{props.children}</Link>
    )
}
export default LinkComponent