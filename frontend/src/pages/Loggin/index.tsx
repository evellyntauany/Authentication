import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import LinkComponent from '../../components/Link'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import './stylesLogin.scss'

const Loggin = () => {
  const navegate = useNavigate()
  const auth = useContext(AuthContext)
  const { user } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const logo = require('../../assets/logoSemFund.png')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const usuario = {
      email,
      password,
    }
    await auth.logando(usuario)
    
    if (auth.sucess) {
      console.log(auth.sucess)
      navegate('/')
    }
  }

  return (
    <div className="ContainerRegister">
      <div className="form__login">
        <div className="form__login__lgo">
          <h1>Bem vindo</h1>
          <section className="Logo">
            <img className="Logo__login" src={logo}></img>
          </section>
        </div>

        <form className="form__login__data" onSubmit={handleSubmit}>
          <label className="label_login">
            <span>Email:</span>
            <input
              className="input_login"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="label_login">
            <span>Senha:</span>
            <input
              className="input_login"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <section className="section_btnLogin">
            <button
              className="section_btnLogin__submit"
              type="submit"
              onClick={handleSubmit}
            >
              Entrar
            </button>
          </section>
        </form>

        <section className="link_Register">
          <LinkComponent
            toPage="/Register"
            children="Não tem uma conta? Registre-se"
            className="link_Register__btn"
          ></LinkComponent>
        </section>
      </div>
    </div>
  )
}
export default Loggin
