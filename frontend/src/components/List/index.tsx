import { setupAPIClient } from '../../hooks/useApi'
import LinkComponent from '../Link';

type PropsList = {
  lista: Array<string | number | any > | any[] 
  Nameclass?: string;
}


const List = (props: PropsList) => {
  const api = setupAPIClient()

  const onDelete = (id: number) => {
    api.put(`/deleteChamado/${id}`)
  }
  console.log(props.lista)

  return (
    <ul>
      {props.lista.map((chamado) => (
        <div className={props.Nameclass}>
          <li>Id chamado: {chamado.id}</li>
          <li>Id do user que criou: {chamado.userId}</li>
          <li>Criado em: {chamado.createdAt}</li>
          <li>Descricao: {chamado.description}</li>
          <li>Status:{chamado.status}</li>
          <button onClick={() => onDelete(chamado.id)}>Cancelar chamado</button>
          <LinkComponent toPage={`/call/${chamado.id}`}>
                Acessar chamado
          </LinkComponent>
        </div>
      ))}
    </ul>
  )
}

export default List
