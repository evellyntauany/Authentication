import { AuthContext } from '../../../contexts/Auth/AuthContext'
import { useContext } from 'react'
import Navbar from '../../usuario_cliente/Navbar'
import './access.scss'

const PageAcess = () => {
  const user = useContext(AuthContext)

  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard">
        <h1>
          Dashboard
          <p>Bem vindo,  {user.user?.name}</p>
          <section className="chamado_new"></section>
        </h1>
      </div>
    </>
  )
}
export default PageAcess
