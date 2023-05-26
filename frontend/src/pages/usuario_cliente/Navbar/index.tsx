import { useContext } from 'react'
import LinkComponent from '../../../components/Link'
import { FaSignOutAlt, FaUser } from "react-icons/fa";

import { AuthContext } from '../../../contexts/Auth/AuthContext'
import './styles.scss'
const logo = require('../../../assets/logoNova1.png')


const Navbar = () => {
  const { signout, user } = useContext(AuthContext)
  return (
    <div className="Container">
      <div className="Container__logo">
        <img className='Logo_img' height={80}  src={logo}></img>
      </div>
     
        <div className="Container__links">
         
          {user?.userType === 1 ? (
          <>
          <LinkComponent toPage="/boarding" children="Home"></LinkComponent>
          <LinkComponent toPage="/listUsuarios" children="Usuario cadastrados"></LinkComponent></>
          ) : (
            <LinkComponent toPage="/Home"  children="Home"></LinkComponent>     )   
            }    
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
       
            <div className="btns_nav">
            <LinkComponent className="btns_nav__signin" toPage="/Login">
              <span className="btns_nav__span"><FaUser className='btns_nav__user'/> Entrar</span>
            </LinkComponent>

            <LinkComponent className="btns_nav__register" toPage="/Register">
              <span className="btns_nav__register__new">Criar conta</span>
            </LinkComponent>
           </div>
          )}
          </div>
       
      
    </div>
  )
}
export default Navbar
