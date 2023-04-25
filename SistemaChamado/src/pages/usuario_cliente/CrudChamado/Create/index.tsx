import { FormEvent } from "react";
import { useState } from "react";

function ChamadoFormulario() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Lógica para submeter o chamado para o sistema de tickets
    console.log("Título do chamado: ", titulo);
    console.log("Descrição do chamado: ", descricao);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2> Formulario de criacao de chamado</h2>
      <label>
        Título:
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </label>
      <label>
        Descrição:
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ChamadoFormulario;
