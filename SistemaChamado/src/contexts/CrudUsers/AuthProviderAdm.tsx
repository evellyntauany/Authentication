import { useEffect, useState } from 'react'
import { User, UserLogin, UserRegister } from '../../types/User'
import { AuthContext } from './AuthContext'
import { setupAPIClient } from '../../hooks/useApi'


export const AuthProviderAdm = ({ children }: { children: JSX.Element }) => {
    const api = setupAPIClient();
    const [userAdm, setUserAdm] =  useState<User>()


    useEffect(() => {
      const loggedInUser = localStorage.getItem('userAdm')
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser) //Para string
        setUserAdm(foundUser)
      }
    }, [setUserAdm])

const logandoAdm = async ({ email, password }: UserLogin) => {
  await api
    .post('/signinAdm', {
      email,
      password,
    })
    .then((response) => {
      const { name, email } = response.data
      const {id} = response.data.id
      console.log("dados usuario>>",response.data)
      console.log("dados usuario id>>",response.data.id)
      const json = JSON.stringify(response.data)
      localStorage.setItem('userAdm', json)
      setUserAdm({
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
  setUserAdm(undefined)
  localStorage.clear()
}


  async function createUser({ name, email, password }: UserRegister) {
      await api.post('/cadastrar', {
        name,
        email,
        password,
      }).then(response => {
        console.log( response.data)
      }) .catch(error => {
        alert(error.response.data.message); // Imprime a mensagem de erro retornada pelo servidor
        return false
      });
  }

return (
<AuthContext.Provider
  value={{ createUser, userAdm,logandoAdm,signout  }}
>
  {children}
</AuthContext.Provider>
)
}