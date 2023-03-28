import { useState, useEffect } from 'react'
import Navbar from '../../usuario_adm/Navbar'
import { setupAPIClient } from './../../../hooks/useApi'
import { Link } from 'react-router-dom'
import './styleList.css';


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
  }, [])

  const myStateMap = myData.map((item) => {
    return (
      <div key={item.id}>
        <p> Id de usuario :{item.id}</p>
        <p> Nome :{item.name}</p>
        <p> Email:{item.email}</p>
        <button onClick={() => onDelete(item.id)} type="button">
          Excluir
        </button>
        <button type="button">
          <Link to={`/user/${item.id}`}>
          Atualizar
          </Link>
        </button>
        <br></br>
      </div>
    )
  })

  return (
    <div className="users">
      <Navbar></Navbar>

      <div>Listando todos os usuarios do banco</div>
      <br></br>
      <div className='allList'>{myStateMap}</div>
    </div>
  )
}
export default ListUsuarios
