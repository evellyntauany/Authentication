import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import LinkComponent from '../../components/Link'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import Navbar from '../usuario_cliente/Navbar'
import { setupAPIClient } from './../../hooks/useApi'
import './profile.scss'

const Profile = () => {
  const api = setupAPIClient()
  const infos = useContext(AuthContext)
  let id = infos.user?.id
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const auth = useContext(AuthContext)

  const navegate = useNavigate()

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
        navegate('/')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <div className="ContainerUpdate">
        <h1>Minha conta</h1>
        <form onSubmit={handleSubmit}>
          <label className="profile__label">
            <section>Nome:</section>
            <input
              required
              className="profile__input"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="profile__label">
            <section>Email:</section>
            <input
              required
              className="profile__input"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="profile__label">
            <section>Nova senha:</section>
            <input
              className="profile__input"
              name="password"
              type="password"
            ></input>
          </label>

          <button className="btn__update_profile" type="submit">
            Salvar
          </button>
        </form>
        <LinkComponent toPage="/" children="Voltar"></LinkComponent>
      </div>
     
    </>
  )
}
export default Profile
