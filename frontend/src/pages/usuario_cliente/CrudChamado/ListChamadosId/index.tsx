import { AuthContext } from '../../../../contexts/Auth/AuthContext'
import { setupAPIClient } from '../../../../hooks/useApi'
import { useState, useContext, useEffect } from 'react'
import { ReactNode } from 'react';
import './listChamados.scss'
import List from '../../../../components/List';
import { statusEnum } from '../../../../types/Called';


interface Ichamado {
  UserId: number
  createdAt: ReactNode
  description: string
  id: number
  status: statusEnum
  updatedAt: ReactNode
}

const ListChamadosId = () => {
  const api = setupAPIClient()
  const auth = useContext(AuthContext)
  const [chamados, setChamados] = useState<Ichamado[]>([])


  useEffect(() => {
    const userId = auth.user?.userId
    console.log(userId)
    api
      .get(`/chamadoId/${userId}`)
      .then((res) => {
        
        const id = res.data
        setChamados(id)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [api, auth])
  

  return (
      <List lista={chamados} Nameclass={'list__chamado'}></List>
  )
}
export default ListChamadosId
