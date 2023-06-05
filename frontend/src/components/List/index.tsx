import { setupAPIClient } from '../../hooks/useApi'
import LinkComponent from '../Link'
import './listStyled.scss'

type PropsList = {
  lista: Array<string | number | any> | any[]
  Nameclass?: string
}

const List = (props: PropsList) => {
  const api = setupAPIClient()

  const onDelete = (id: number) => {
    api.put(`/deleteChamado/${id}`)
  }

  return (
    <section className="map__list">
      {props.lista.map((chamado) => (
        <LinkComponent toPage={`/call/${chamado.id}`}>
          <div className={props.Nameclass}>
            <li>Id chamado: {chamado.id}</li>
            <li>Id do user que criou: {chamado.userId}</li>
            <li>Criado em: {chamado.createdAt}</li>
            <li>Descricao: {chamado.description}</li>
            <li>Status:{chamado.status}</li>
            {chamado.status != 'cancelado' ? (
              <button onClick={() => onDelete(chamado.id)}>
                cancelar chamado
              </button>
            ) : (
              ''
            )}
          </div>
        </LinkComponent>
      ))}
    </section>
  )
}

export default List
