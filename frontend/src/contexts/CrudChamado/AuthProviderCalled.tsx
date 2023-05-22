import { useEffect, useState } from 'react'
import { setupAPIClient } from '../../hooks/useApi'
import { description } from '../../types/Called'
import { CalledContext } from './CalledContext'

export const AuthProviderCalled = ({ children }: { children: JSX.Element }) => {
  const api = setupAPIClient()
 
  async function createCalled({id,description }: description) {
    alert(description)


    await api
      .post('/chamados', {
        description
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    }


  return (
    <CalledContext.Provider
      value={{ createCalled }}
    >
      {children}
    </CalledContext.Provider>
  )
}
