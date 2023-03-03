import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import './stylesRegister.css';



const Register = () => {
    
  const auth = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
 

async function handleSubmit(e:FormEvent) {
  e.preventDefault()
  const user ={
    name,
    email,
    password,
  }
  console.log(user)
}

  return (
    
    <div className="Container">
      <div className="FormCont">
      <h1>Register sistema</h1>
      <form onSubmit={handleSubmit}>
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
          <input name="password" type="number" onChange={e=>setPassword(e.target.value)}></input>
        </div>
        <div>
          <label>Confirmar senha:</label>
          <input type="password" onChange={e=>setConfirmPassword(e.target.value)}></input>
        </div>
          <button
          type="submit"
          >Registrar</button>
        {error && <p>{error}</p>}
      </form>
      </div>
      </div>
  );
};
export default Register;
