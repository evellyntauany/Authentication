import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { Cha } from '../../../helpers/chamadasApi'
import { Ichamado } from '../../../types/Called'
import { setupAPIClient } from '../../../hooks/useApi'
import './oneCall.scss'
import { AuthContext } from '../../../contexts/Auth/AuthContext'
import { User } from '../../../types/User'
import LinkComponent from '../../../components/Link'

type mensagem = {
  id: number
  conteudo: string
  createdAt: Date
  updatedAt: Date
  usuarioId: number
}

const ListOne = (props: { idCall: any }) => {
  const [chamados, setChamados] = useState<Ichamado[]>([])
  const [conteudoResposta, setConteudoResposta] = useState('')
  const [mensagens, setMensagens] = useState<mensagem[]>([])
  const [name, setName] = useState('')
  const [userIdRes, setUserId] = useState(Number)
  const api = setupAPIClient()
  const { user } = useContext(AuthContext)
  const userId = user?.userId
  const [status, setStatus] = useState('');

  const meuNumero = parseInt(props.idCall, 10)
  //console.log('numero->>', meuNumero)
  

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      api.post(`/mensagens/`, {
        conteudo: conteudoResposta,
        usuarioId: userId,
        chamadoId: meuNumero,
      })
      //   console.log('Resposta criada:', resposta)
    } catch (error) {
      console.error('Erro ao criar resposta:', error)
    }

    setConteudoResposta('')
  }

  useEffect(() => {
    api
      .get(`/chamadoOne/${meuNumero}`)
      .then((res) => {
        const id = res.data
        //    console.log('vindo', res)
        setChamados(id)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    api
      .get(`/mensagens/${meuNumero}`)
      .then((res) => {
        //     console.log('vindo das mensagens', res.data)
        setMensagens(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [api])

  useEffect(() => {
    api
      .get(`/search/${userId}`)
      .then((res) => {
        setName(res.data.name)
        setUserId(res.data.userId)

        //   setInfoiduser(res.data.user)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [api])

   const atualizarStatusChamado = async (id:number, novoStatus:string) => {
    try {
      api.post(`/status/${id}`)
      console.log('Status do chamado atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o status do chamado:', error);
    }
  };

  return (
    <><section className="call">
      <div className="call__all">
        <div className="call__list">
          {chamados.map((chamado) => (
            <section>
              <p>{chamado.id}</p>
              <p>{chamado.description}</p>
            </section>
          ))}
        </div>

        <div className="call__mensagens">
          {mensagens.map((men) => (
            <section>
              {men.usuarioId == userIdRes ? <h3 className='call__you'>Você</h3> : <h3>{name}</h3>}
              <p>{men.conteudo}</p>
            </section>
          ))}
        </div>

        <form className="call__form" onSubmit={handleSubmit}>
          <textarea
            value={conteudoResposta}
            onChange={(event) => setConteudoResposta(event.target.value)}
            placeholder="Digite a resposta..." />
          <button type="submit">Enviar</button>
        </form>

        {chamados.map((st) => (
        <> <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">Selecione o status</option>
        <option value="aberto">Aberto</option>
        <option value="encerrado">Encerrado</option>
        <option value="pendente_usuário">Pendente Usuário</option>
        <option value="pendente_solucionado">Pendente Solucionado</option>
        <option value="cancelado">Cancelado</option>
      </select>
      <button onClick={() => atualizarStatusChamado(st.id, status)}>
        Atualizar Status do Chamado
      </button>
      </>
        ))}

      </div>
    </section>
   
    {user?.userType == 2?
    (<LinkComponent className='button_back' toPage={'/allchamados'}> Voltar</LinkComponent>):
    (<LinkComponent className='button_back' toPage={'/chamados'}> Voltar</LinkComponent>)
    }
    </>
  )
}

export default ListOne
