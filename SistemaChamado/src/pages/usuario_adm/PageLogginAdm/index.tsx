import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../../contexts/CrudUsers/AuthContext'
import './stylesLoginAdm.css'

const PageLogginAdm = () => {
  const { logandoAdm } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const usuario = {
      email,
      password,
    }
    logandoAdm(usuario)
  }

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              ></input>
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              ></input>
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  )
}
export default PageLogginAdm
