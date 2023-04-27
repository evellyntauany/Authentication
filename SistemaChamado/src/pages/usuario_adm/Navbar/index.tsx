import { useContext } from 'react'
import LinkComponent from '../../../components/Link'
import { AuthContextUser } from '../../../contexts/CrudUsers/AuthContextUser'

const Navbar = () => {
  const { userAdm, signout } = useContext(AuthContextUser)
  return (
    <div className="ContainerNav">
      <LinkComponent toPage="/admin" children="Home"></LinkComponent>


    
      {!userAdm ? (
      <LinkComponent toPage="/logginAdm" children="Login"></LinkComponent>
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
