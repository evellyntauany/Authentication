import { useEffect, useState } from 'react'
import { User, UserLogin, UserRegister } from '../../types/User'
import { AuthContext } from './AuthContext'
import { setupAPIClient } from '../../hooks/useApi'


export const AuthProviderAdm = ({ children }: { children: JSX.Element }) => {
    const api = setupAPIClient();


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
      value={{ createUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
