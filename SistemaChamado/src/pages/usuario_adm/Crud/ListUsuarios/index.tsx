import { useState, useEffect } from 'react'
import Navbar from '../../Navbar'
import { setupAPIClient } from '../../../../hooks/useApi'
import { Link } from 'react-router-dom'
import './styleList.scss'
import RegisterUsuario from '../../RegisterUsuario'
import LinkComponent from '../../../../components/Link'

interface usersdb {
  id: number
  name: string
  email: string
}

const ListUsuarios = () => {
  const api = setupAPIClient()
  const [myData, setMyData] = useState<usersdb[]>([])

  const onDelete = (id: number) => {
    console.log(id)
    api.delete(`/delete/${id}`)
  }

  useEffect(() => {
    api
      .get('/admin/users')
      .then((response) => setMyData(response.data.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [onDelete])

  const myStateMap = myData.map((item) => {
    return (
      <div className="user">
        <div className="user__each">
          <li key={item.id}> Id de usuario :{item.id}</li>
          <li> Nome :{item.name}</li>
          <li> Email:{item.email}</li>
        </div>
        <div className="buttons">
          <button
            className="button-delete"
            role="button"
            onClick={() => onDelete(item.id)}
            type="button"
          >
            Excluir
          </button>
          <button className="button-update" role="button" type="button">
            <Link className="button-update__link" to={`/user/${item.id}`}>
              Atualizar
            </Link>
          </button>
        </div>
      </div>
    )
  })

  return (
    <>
      <Navbar></Navbar>
      <div className="users">
        <div className="users__div">
          <LinkComponent
            toPage="/RegisterUsers"
            text="Registrar novo usuario no sistema"
          ></LinkComponent>
        </div>
        <h1 className="content_link__h1">
          Listando todos os usuarios do banco
        </h1>
        <div className="content_link"></div>

        <br></br>
        <div className="allList">{myStateMap}</div>
      </div>
    </>
  )
}
export default ListUsuarios
