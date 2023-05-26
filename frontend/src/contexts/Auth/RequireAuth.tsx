import { useContext } from 'react'
import Login from '../../pages/Loggin'
import { AuthContext } from './AuthContext'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext)

 const TypeUser = auth.user?.userType
 
  if (!auth.user) {
    return <Login />
  } else {
    return children
  }
}
