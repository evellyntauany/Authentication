
import { useState, useEffect, useContext } from 'react';
import { FormEvent } from 'react';
import { AuthContext } from '../../../contexts/CrudUsers/AuthContext';
import { setupAPIClient } from '../../../hooks/useApi';
import {useNavigate} from 'react-router-dom';
import './register.scss'


const RegisterUsuario = () => {
    
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const api = setupAPIClient();
  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const [error,setError] =useState('')
  
  

async function handleSubmituser(e:FormEvent) {
  console.log("clicando no botao")
  e.preventDefault()
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    setError('Por favor, digite um endereço de e-mail válido');
    return
  }
  if (!name || !email || !password ) {
    setError('Por favor, preencha todos os campos obrigatórios');
    return
  }
  const user ={
    name,
    email,
    password,
  }
  createUser(user)
  return navigate('/listUsuarios')
}
  return (
    
    <div className="Container">
      <div className="FormCont">
      <h1>Pagina de registro de usuario funcionario</h1>
      <form className="formRegister" onSubmit={handleSubmituser}>
      {error}
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
          <button className="btn-reg"
          type="submit"
          >Registrar</button>

      </form>
      </div>
      </div>
  );
};
export default RegisterUsuario;
