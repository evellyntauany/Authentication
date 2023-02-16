import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const Register = () => {
    
    const auth = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
 

const handleSubmit= async ()=>{
  
}

const user ={
  name,
  email,
  password
}

console.log(user)
if (password !== confirmPassword){
  setError("As senhas precisam ser iguais!")
}

  return (
    <div>
      <h1>Login sistema</h1>
      <form>
      <div>
          <label>Nome:</label>
          <input name="name" type="text" required onChange={e=>setName(e.target.value)}/>
        </div>
        <div>
          <label>Email:</label>
          <input name="email" type="email"  required onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Senha:</label>
          <input name="password" type="password" required onChange={e=>setPassword(e.target.value)}></input>
        </div>
        <div>
          <label>Confirmar senha:</label>
          <input type="password" required onChange={e=>setConfirmPassword(e.target.value)}></input>
        </div>
        <div>
          <button
          type="submit"
          onClick={handleSubmit}
          >Entrar</button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
export default Register;
