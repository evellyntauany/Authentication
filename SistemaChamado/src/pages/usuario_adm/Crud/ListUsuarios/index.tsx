import { useState, useEffect } from 'react'
import Navbar from '../../Navbar'
import { setupAPIClient } from '../../../../hooks/useApi'
import { Link } from 'react-router-dom'
import './styleList.scss'
import LinkComponent from '../../../../components/Link'
import { FaRegTrashAlt } from 'react-icons/fa'

interface usersdb {
  id: number
  name: string
  email: string
}

interface Item {
  id: number
  name: string
}

const ListUsuarios = () => {
  const api = setupAPIClient()
  const [myData, setMyData] = useState<usersdb[]>([])

  const [listaCompleta, setListaCompleta] = useState<usersdb[]>([])
  const [listaExibida, setListaExibida] = useState<usersdb[]>([])
  const [paginaAtual, setPaginaAtual] = useState(1)
  const itensPorPagina = 10

  const onDelete = (id: number) => {
    console.log(id)
    api.delete(`/delete/${id}`)
  }

  useEffect(() => {
    setListaExibida(
      listaCompleta.slice(
        (paginaAtual - 1) * itensPorPagina,
        paginaAtual * itensPorPagina,
      ),
    )
  }, [listaCompleta, paginaAtual])

  useEffect(() => {
    api
      .get('/admin/users')
      .then((response) => setListaCompleta(response.data.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <div>
      <div className="users__div">
          <LinkComponent
            toPage="/Register"
            children="Registrar novo usuario no sistema"
          ></LinkComponent>
        </div>

      <div className="user">
        <h1 className="content_link__h1">
          Listando todos os usuarios do banco
        </h1>
        

        <div className='list_user'>
            <table className='list_user__table'>
              <thead>
                <tr>
                  <td>Id</td>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Ações</th>
                </tr>
              </thead>
           
            {listaExibida.map((item) => (
              <>
              <tr>
                <td key={item.id}>{item.id}</td>
                <td >{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <div className="buttons">
                  <button
                    className="button-delete"
                    role="button"
                    onClick={() => onDelete(item.id)}
                    type="button"
                  >
                  <FaRegTrashAlt/>
                  </button>
                  <button className="button-update" role="button" type="button">
                    <Link
                      className="button-update__link"
                      to={`/user/${item.id}`}
                    >
                      Atualizar
                    </Link>
                  </button>
                </div>
                </td>
              </tr>
              
                
              </>
            ))}
             </table>
          </div>
          <div className='btnsUser'>
            <button
            className='btnsUser__prev'
              onClick={() => setPaginaAtual(paginaAtual - 1)}
              disabled={paginaAtual === 1}
            >
              Anterior
            </button>
            <button
              className='btnsUser__next'
              onClick={() => setPaginaAtual(paginaAtual + 1)}
              disabled={
                paginaAtual === Math.ceil(listaCompleta.length / itensPorPagina)
              }
            >
              Próxima
            </button>
          </div>
       
      </div>
      </div>
    </>
  )
}
export default ListUsuarios
