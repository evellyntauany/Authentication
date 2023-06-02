import { useEffect, useState } from "react"
import { Cha } from "../../../helpers/chamadasApi"
import { Ichamado } from "../../../types/Called"
import { setupAPIClient } from "../../../hooks/useApi"
import List from "../../../components/List"




const ListOne = (props:{idCall: any})=>{
      const [chamados, setChamados] = useState<Ichamado[]>([])
      const api = setupAPIClient()

      
      const meuNumero = parseInt(props.idCall, 10);

      useEffect(() => {
            api
              .get(`/chamadoId/${meuNumero}`)
              .then((res) => {
                const id = res.data
                console.log('vindo',res)
                setChamados(id)
              })
              .catch((error) => {
                console.log(error)
              })
          }, [])


    console.log('recebido->>',chamados)
  



  return (
      <>
        <table className="">
          <thead>
            <tr>
              <td>Id</td>
              <th>Id user</th>
              <th>Descricao</th>
              <th>Status</th>
            </tr>
          </thead>
  
          {chamados.map((chamado) => (
            <tr>
              <td key={chamado.id}>{chamado.id}</td>
              <td>{chamado.userId}</td>
              <td> {chamado.description}</td>
              <td>{chamado.status}</td>
            </tr>
          ))}
        </table>
      </>
    )
  }

export default ListOne