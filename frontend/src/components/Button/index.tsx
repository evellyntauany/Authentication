
const Button = (props :{ type?: 'submit' | 'reset' | 'button', text:string}) =>{
   return( <button
    type={props.type}
    >{props.text}
    </button>
   )
}
export default Button