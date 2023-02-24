import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const PageLoggin = () => {
    const navegate = useNavigate()
    const auth = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit= async ()=>{
    if(email && password){
        const isLogged = await auth.signin(email,password)
        if(isLogged){
            navegate('/')
        }else{
            alert("nao deu certo")
        }
    }

}
  return (
    <div>
      <h1>Login sistema</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" onChange={e=>setPassword(e.target.value)}></input>
        </div>
        <div>
          <button
          type="submit"
          onClick={handleSubmit}
          >Entrar</button>
        </div>
      </form>
    </div>
  );
};
export default PageLoggin;
