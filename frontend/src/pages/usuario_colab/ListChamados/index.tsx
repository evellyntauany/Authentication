import { ReactNode, useContext, useEffect, useState } from 'react'
import { setupAPIClient } from '../../../hooks/useApi'
import { AuthContext } from '../../../contexts/Auth/AuthContext'
import { Ichamado } from '../../../types/Called'
import './listCall.scss'
import { User, UserId } from '../../../types/User'
import LinkComponent from '../../../components/Link'

const ListChamados = () => {
  const api = setupAPIClient()
  const auth = useContext(AuthContext)
  const [call, setCall] = useState('')
  const [objetos, setObjetos] = useState<Ichamado[]>([])
  const [userIdenco, setUserId] = useState<number[]>([])
  const [dadosUser, setdadosUser] = useState<UserId[]>([])

  //allchamados

  useEffect(() => {
    api
      .get('/allchamados')
      .then((res) => {
        setObjetos(res.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (objetos.length > 0) {
      const userIds = objetos.map((objeto) => objeto.userId)
      if (userIds !== userIdenco) {
        setUserId(userIds)
      }
    }
  }, [])

  const arraySemDuplicatas = Array.from(new Set(userIdenco))
 // console.log('iddddd testeeees->', arraySemDuplicatas)

  useEffect(() => {
    api
      .get(`/search/${arraySemDuplicatas}`)
      .then((res) => {
        setdadosUser(res.data.user)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])
  console.log('teste',dadosUser)

 // console.log('dados do banco=->', dadosUser.name)
  /*
  useEffect(() => {
    if (userId !== undefined) {
      api
        .get(`/search/${userId}`)
        .then((res) => {
         setdadosUser(res.data)
        })
        .catch((err) => {
          console.error('ops! ocorreu um erro' + err)
        })
    }
  }, [api, userId])*/

  // console.log('dados do user criador do chamado->>',dadosUser)

  return (
    <div className="table">
      <table className="table__list">
        <thead>
          <tr>
            <td>Id</td>
            <th>Id user</th>
            <th>Descricao</th>
            <th>Status</th>
            <th>Atribuido a</th>
          </tr>
        </thead>

        {objetos.map((objeto) => (
      
          <tr>
            <td key={objeto.id}>{objeto.id}</td>
            <td>{objeto.userId}</td>
            <td> {objeto.description}</td>
            <td>{objeto.status}</td>
            <td>
              <LinkComponent toPage={`/call/${objeto.id}`}>
                Acessar chamado
              </LinkComponent>
            </td>
            </tr>
        ))}
      </table>


    </div>
  )
}
export default ListChamados

/*    
  ))} */