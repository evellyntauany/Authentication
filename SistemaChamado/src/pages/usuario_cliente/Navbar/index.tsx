import { useContext } from 'react'
import LinkComponent from '../../../components/Link'
import { FaSignOutAlt, FaUser } from "react-icons/fa";

import { AuthContext } from '../../../contexts/Auth/AuthContext'
import './styles.scss'
const logo = require('../../../assets/logoSemFund.png')


const Navbar = () => {
  const { signout, user } = useContext(AuthContext)
  return (
    <div className="Container">
      <div className="Container__logo">
        <img className='Logo_img' height={80}  src={logo}></img>
      </div>
      <div className="Container__linksBtn">
        <div className="Container__links">
          <LinkComponent toPage="/"  children="Home"></LinkComponent>         
          </div>

          <div className='Container__btns'>
          {user ? (
            <>
              <LinkComponent toPage="/Profile"><FaUser className='App-logo'/></LinkComponent>

              <div className="btn_signout" onClick={() => signout()}>
                 <FaSignOutAlt className='icon_signout'/>
              </div>
            </>
          ) : (
       
            <LinkComponent className="btn_signin" toPage="/Login">
              <span className="btn_signin__span">Entrar</span>
              <span>Registrar</span>
            </LinkComponent>
          )}
          </div>
       
      </div>
    </div>
  )
}
export default Navbar
