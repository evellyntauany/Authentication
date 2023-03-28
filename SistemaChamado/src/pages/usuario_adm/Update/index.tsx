import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { setupAPIClient } from './../../../hooks/useApi'

const UpdateUser = () => {
  const api = setupAPIClient()
  const { id } = useParams()
  const [myData, setMyData] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    api
      .get(`/search/${id}`)
      .then((res) => {
        const data = res.data // data is already of type any
        setMyData(data) // use .json() method
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
    <div className="Container">
      <h1>Pagina de atualizacao de cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          name="name"
          type="text"

          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha:</label>
        <input name="password" type="password"></input>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  )
}

export default UpdateUser
