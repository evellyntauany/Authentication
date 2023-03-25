
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { AuthContext } from "../../contexts/Auth/AuthContext";
import './stylesRegister.css';



const Register = () => {
    
  const auth = useContext(AuthContext)
  const navegate = useNavigate()

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

async function handleSubmit(e:FormEvent) {
  e.preventDefault()
  const usuario ={
    name,
    email,
    password,
  }
  auth.register(usuario)
  return navigate('/')
 
}
  return (
    
    <div className="Container">
      <div className="FormCont">
      <h1>Register sistema</h1>
      <form className="formRegister" onSubmit={handleSubmit}>
      <div>
          <label>Nome:</label>
          <input name="name" type="text" onChange={e=>setName(e.target.value)}/>
        </div>
        <div>
          <label>Email:</label>
          <input name="email" type="email" onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Senha:</label>
          <input name="password" type="password" onChange={e=>setPassword(e.target.value)}></input>
        </div>
        <div>
          <label>Confirmar senha:</label>
          <input type="password" onChange={e=>setConfirmPassword(e.target.value)}></input>
        </div>
          <button className="btn-reg"
          type="submit"
          >Registrar</button>

      </form>
      </div>
      </div>
  );
};
export default Register;
