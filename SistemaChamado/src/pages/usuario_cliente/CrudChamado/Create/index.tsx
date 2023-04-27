import { FormEvent } from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../../../contexts/Auth/AuthContext";
import { CalledContext } from "../../../../contexts/CrudChamado/CalledContext";
import { AuthProviderCalled } from './../../../../contexts/CrudChamado/AuthProviderCalled';
import { setupAPIClient } from './../../../../hooks/useApi';




const ChamadoFormulario=()=> {
  const called = useContext(CalledContext)
  const api = setupAPIClient()
  const [description, setDescription] = useState('');
  const auth = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Lógica para submeter o chamado para o sistema de tickets
    console.log("Descrição do chamado: ", description);
   const id = auth.user?.id
   console.log("id user>",id)
    await api
    .post('/chamados', {
      description
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
   
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2> Formulario de criacao de chamado</h2>
      <label>
        Descrição:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ChamadoFormulario;
