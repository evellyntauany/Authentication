import { AuthContext } from '../../../../contexts/Auth/AuthContext'
import { setupAPIClient } from '../../../../hooks/useApi'
import { useState, useContext, FormEvent, useEffect } from 'react'
import { ReactNode } from 'react';
import './listChamados.scss'
import List from '../../../../components/List';

enum statusEnum {
  aberto,
  encerrado,
  pendente_usuário,
  pedente_solucionado,
  cancelado,
}

interface Ichamado {
  UserId: number
  createdAt: ReactNode
  description: string
  id: number
  status: statusEnum
  updatedAt: ReactNode
}

const ListChamados = () => {
  const api = setupAPIClient()
  const auth = useContext(AuthContext)
  const [chamados, setChamados] = useState<Ichamado[]>([])


  useEffect(() => {
    const userId = auth.user?.userId
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
export default ListChamados
