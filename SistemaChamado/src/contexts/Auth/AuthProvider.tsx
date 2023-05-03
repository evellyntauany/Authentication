import { useEffect, useState } from 'react'
import { User, UserLogin, UserRegister } from '../../types/User'
import { AuthContext } from './AuthContext'
import { setupAPIClient } from '../../hooks/useApi'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User>()
  const api = setupAPIClient()
  const [error, setError] = useState('');
  const [sucess, setSucess] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser) //Para string
      setUser(foundUser)
    }else{
      setUser(undefined)
    }
  }, [setUser])

  async function register({ name, email, password }: UserRegister) {
    
    await api
      .post('/cadastrar', {
        name,
        email,
        password,
      })
      .then((response) => {
        if(response.status === 200) {
        const { name, email } = response.data
        const json = JSON.stringify(response.data) //para json
        localStorage.setItem('user', json) //seta no meu localStorage
        setUser({
          name,
          email,
        })
        setError('')
        setSucess("Cadastro efetuado com sucesso")
        
  }})
      .catch((erro) => {
        setSucess('')
        if(erro.response.status == 409){
        setError("Email já cadastrado");
        }
        else{
        setError("erro ao se registrar");
        }
        return false
      })
  }

  const logando = async ({ email, password }: UserLogin) => {
    await api
      .post('/signin', {
        email,
        password,
      })
      .then((response) => {
        const { name, email } = response.data
        const {id} = response.data.id
        console.log("dados usuario>>",response.data)
        console.log("dados usuario id>>",response.data.id)
        const json = JSON.stringify(response.data)
        localStorage.setItem('user', json)
        setUser({
          id,
          name,
          email
        })
      })
      .catch((error) => {
        if (error.status === 403) {
          alert('Senha incorreta')
        } else {
          alert("Erro ao logar")
        }
        return false
      })
  }

  const signout = async () => {
    console.log('signout está sendo executada.')
    setUser(undefined)
    localStorage.clear()
  }

  return (
    <AuthContext.Provider value={{error, sucess, user, logando, signout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
