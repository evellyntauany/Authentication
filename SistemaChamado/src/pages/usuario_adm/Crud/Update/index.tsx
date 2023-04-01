import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LinkComponent from '../../../../components/Link'
import { setupAPIClient } from '../../../../hooks/useApi'

const UpdateUser = () => {
  const api = setupAPIClient()
  const { id } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    api
      .get(`/search/${id}`)
      .then((res) => {
        const data = res.data
        setName(data.user.name)
        setEmail(data.user.email) 
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(name)
    console.log(email)
    await api.put(`/updateId/${id}`, {
      name,
      email,
    }) .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
         
  }
  return (
    <><div className="ContainerUpdate">
      <h1>Pagina de atualizacao de cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <label>Senha:</label>
        <input name="password" type="password"></input>
        <button className='button-update' type="submit">Atualizar</button>
      </form>

    </div>
    <LinkComponent toPage="/listUsuarios" text="Voltar"></LinkComponent></>
    
  )
}

export default UpdateUser
