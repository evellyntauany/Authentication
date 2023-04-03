import { useContext } from 'react'
import LinkComponent from '../../../components/Link'

import { AuthContext } from '../../../contexts/Auth/AuthContext'
import './styles.css'

const Navbar = () => {
  const { signout, user } = useContext(AuthContext)
  return (
    <div className="ContainerNav">
      <LinkComponent toPage="/" text="Home"></LinkComponent>

      <LinkComponent toPage="/PageLoggin" text="Logar"></LinkComponent>

      <LinkComponent toPage="/PageAcess" text="Dashboard"></LinkComponent>

      {user ? (
        <>
          <LinkComponent toPage="/Profile" text="Perfil"></LinkComponent>
          <button className="btnSingnout" onClick={() => signout()}>
            {' '}
            Sair
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
export default Navbar
