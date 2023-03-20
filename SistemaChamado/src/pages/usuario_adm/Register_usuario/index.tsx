
import { useState } from 'react';
import { FormEvent } from 'react';
const RegisterUsuario = () => {
    
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  

async function handleSubmit(e:FormEvent) {
  e.preventDefault()
  const usuario ={
    name,
    email,
    password,
  }   
 
}
  return (
    
    <div className="Container">
      <div className="FormCont">
      <h1>Pagina de registro de usuario funcionario</h1>
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
          <button className="btn-reg"
          type="submit"
          >Registrar</button>

      </form>
      </div>
      </div>
  );
};
export default RegisterUsuario;
