
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

type PrivateRouteProps = {
  permission: number
  redirectPath: string // Caminho para redirecionar caso a permissão seja negada
  component:React.ComponentType<any>;
}

function PrivateRoute({
  permission,
  component: Component,
  redirectPath,
  ...rest
}: PrivateRouteProps): JSX.Element {
  const auth = useContext(AuthContext)
  const TypeUser = auth.user?.userType

  if (TypeUser === permission) {
    return <Navigate to={redirectPath} />;
  } else {
    return <Navigate to='/erro' />;
  }
};


export default PrivateRoute;
