import { useContext } from 'react'
import LinkComponent from '../../../components/Link'
import { AuthContext } from '../../../contexts/CrudUsers/AuthContext'

const Navbar = () => {
  const { userAdm, signout } = useContext(AuthContext)
  return (
    <div className="ContainerNav">
      <LinkComponent toPage="/admin" text="Home"></LinkComponent>


    
      {!userAdm ? (
      <LinkComponent toPage="/logginAdm" text="Login"></LinkComponent>
      ) : (
        ''
      )}
      {userAdm ? (
        <>
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
