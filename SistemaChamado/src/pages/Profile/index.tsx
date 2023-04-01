import { useState, useEffect, useContext } from 'react'
import LinkComponent from '../../components/Link'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import Navbar from '../usuario_adm/Navbar'
import { setupAPIClient } from './../../hooks/useApi'
import './profile.scss'

const Profile = () => {
  const api = setupAPIClient()
  const infos = useContext(AuthContext)
  let id = infos.user?.id
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (id != undefined) {
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
    }
  }, [])

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    await api
      .put(`/updateId/${id}`, {
        name,
        email,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
    <Navbar></Navbar>
      <div className="ContainerUpdate">
        <h1>Atualizar cadastro</h1>
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Nova senha:</label>
          <input name="password" type="password"></input>
          <button className='button-update' type="submit">Atualizar</button>
        </form>
      </div>
      <LinkComponent toPage="/" text="Voltar"></LinkComponent>
    </>
  )
}
export default Profile
