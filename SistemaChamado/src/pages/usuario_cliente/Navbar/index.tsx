import { useContext } from 'react'
import LinkComponent from '../../../components/Link'


import { AuthContext } from '../../../contexts/Auth/AuthContext'
import './styles.scss'
const logo = require('../../../assets/logoSemFund.png')


const Navbar = () => {
  const { signout, user } = useContext(AuthContext)
  return (
    <div className="Container">
      <div className="Container__logo">
        <img height={80} src={logo}></img>
      </div>
      <div className="Container__linksBtn">
        <div className="Container__links">
          <LinkComponent toPage="/" text="Inicio"></LinkComponent>

          <LinkComponent toPage="/PageAcess" text="Dashboard"></LinkComponent>
          </div>

          <div className='Container__btns'>
          {user ? (
            <>
              <LinkComponent toPage="/Profile" text="Perfil"></LinkComponent>

              <div className="btn">
                
                <button className="btn__Singnout" onClick={() => signout()}>

                  {' '}
                  Sair
                </button>
              </div>
            </>
          ) : (
            <LinkComponent toPage="/PageLoggin" text="Logar"></LinkComponent>
          )}
          </div>
       
      </div>
    </div>
  )
}
export default Navbar
