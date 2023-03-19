import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import './stylesLogin.css';

const PageLoggin = () => {
    const navegate = useNavigate()
    const auth = useContext(AuthContext)
    const {user} = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit= async (e:FormEvent)=>{
  e.preventDefault();
  const usuario={
    email, password
  }
  auth.logando(usuario)
        if(user){
            navegate('/')
    }
  }

  return (
    <div className="Container">
    <div className="FormCont">
    <h1>Login sistema</h1>
    <form className="formRegister" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" onChange={e=>setPassword(e.target.value)}></input>
        </div>
        <div>
          <button className="btnLogin"
          type="submit"
          onClick={handleSubmit}
          >Entrar</button>
        </div>
      </form>
    </div>
    </div>
  );
};
export default PageLoggin;
