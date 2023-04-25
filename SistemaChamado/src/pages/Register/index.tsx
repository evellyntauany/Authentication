import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ValidationError from '../../components/validations_error'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { ValidationEmail } from '../../helpers/validationEmail'
import './stylesRegister.css'

const Register = () => {
  const auth = useContext(AuthContext)
  const navegate = useNavigate()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  

  const navigate = useNavigate()

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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()


    if (password == confirmPassword) {
      console.log('entrou aqui')
      const usuario = {
        name,
        email,
        password,
      }
      auth.register(usuario)
      return navegate('/')
    }
  }
  return (
    <div className="ContainerRegister">
      <div className="FormCont">
        {auth.error ? <p className="error_class">{auth.error}</p> : ''}
        <h1>Register sistema</h1>

        <form className="formRegister" onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label>Email:</label>
          <input
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

          <div>
            <label>Senha:</label>
            <input
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
          </div>

          <div>
            <label>Confirmar senha:</label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>

          <button
            className="btn-reg"
            disabled={!ValidationEmail(form.email.value) || !form.password.value}
            type="submit"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  )
}
export default Register
