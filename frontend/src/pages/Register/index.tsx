import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ValidationError from '../../components/validations_error'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { ValidationEmail } from '../../helpers/validationEmail'
import Navbar from '../usuario_cliente/Navbar'
import './stylesRegister.scss'

const Register = () => {
  const auth = useContext(AuthContext)
  const navegate = useNavigate()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [Error, setError] = useState('')
  const [selectedOption, setSelectedOption] = useState<number>(3);

  const navigate = useNavigate()
  const logo = require('../../assets/logoSemFund.png')
  const { user } = useContext(AuthContext)

  const [form, setForm] = useState({
    email: {
      hasChanged: false,
      value: '',
    },
    password: {
      hasChanged: false,
      value: '',
    },
  })

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(event.target.value);
    setSelectedOption(selectedValue);
    console.log("setando o numero->>",selectedValue);
  };
  console.log(selectedOption)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (password == confirmPassword) {
      console.log('entrou aqui')
      console.log(selectedOption)
      const usuario = {
        name,
        email,
        password,
        selectedOption
      }

      auth.register(usuario)
      const sucesso = auth.sucess
      if (sucesso) {
        navegate('/')
      }
    } else {
      console.log('Senhas não são iguais')
      setError('As senhas não são iguais')
    }
  }
  return (
    <>
      <div className="ContainerRegister">
        <div className="form__login">
          {auth.error ? <p className="error_class">{auth.error}</p> : ''}

          <div className="form__login__lgo">
            <h1>Crie sua conta</h1>
            <section className="Logo">
              <img className="Logo__login" src={logo}></img>
            </section>
          </div>

          <form className="form__login__data" onSubmit={handleSubmit}>
            <label className="label_login">
              <section> Nome:</section>
              <input
                className="input_login"
                name="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="label_login">
              <section>Email:</section>
              <input
                className="input_login"
                name="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value)
                  setForm({
                    ...form,
                    email: {
                      hasChanged: true,
                      value: e.target.value,
                    },
                  })
                }}
              />
              <ValidationError
                hasChanged={form.email.hasChanged}
                errorMessage="Email é obrigatório"
                testId="email-required"
                type="required"
                value={form.email.value}
              />

              <ValidationError
                hasChanged={form.email.hasChanged}
                errorMessage="Email é inválido"
                testId="email-invalid"
                type="email"
                value={form.email.value}
              />
            </label>

            <label className="label_login">
              <section>Senha:</section>
              <input
                className="input_login"
                name="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value)
                  setForm({
                    ...form,
                    password: {
                      hasChanged: true,
                      value: e.target.value,
                    },
                  })
                }}
                data-testid="password"
              />
              <ValidationError
                hasChanged={form.password.hasChanged}
                errorMessage="Senha é obrigatória"
                testId="password-required"
                type="required"
                value={form.password.value}
              />
            </label>

            <label className="label_login">
              <section>Confirmar senha:</section>
              <input
                className="input_login"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
              {Error ? <p className="error">{Error}</p> : ''}
            </label>

            {user?.userType === 1 ? (
              <label className="label_login label__select">
                Permissao de usuario
                <select value={selectedOption} onChange={handleSelectChange} name="nivel">
                  <option value="1" >1 - Administrador</option>
                  <option value="2">2 - Colaborador</option>
                  <option value="3">3- Cliente</option>
                </select>
              </label>
            ) : (
              ''
            )}

            <section className="section_btnLogin">
              <button
                className="section_btnLogin__submit"
                disabled={
                  !ValidationEmail(form.email.value) || !form.password.value
                }
                type="submit"
              >
                Registrar
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  )
}
export default Register
