import { FormEvent } from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../../../contexts/Auth/AuthContext";
import { CalledContext } from "../../../../contexts/CrudChamado/CalledContext";
import { AuthProviderCalled } from './../../../../contexts/CrudChamado/AuthProviderCalled';
import { setupAPIClient } from './../../../../hooks/useApi';
import  './createChamado.scss'



const ChamadoFormulario=()=> {
  const api = setupAPIClient()
  const [description, setDescription] = useState('');
  const auth = useContext(AuthContext);

  const handleSubmity = async (e: FormEvent) => {
    e.preventDefault();
    if(description){
    // Lógica para submeter o chamado para o sistema de tickets
    console.log("Descrição do chamado: ", description);
   const userId = auth.user?.userId


    await api
    .post('/chamados', {
      description,
      userId
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  else{
    alert('Preencha o campo')
  }
  
  };

  return (
    <form className="open_chamado" onSubmit={handleSubmity}>
        <h2> Abertura de chamado</h2>
      <label className="open_chamado__label">
        Descrição:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ChamadoFormulario;
