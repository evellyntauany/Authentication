import './style.scss'
import Navbar from '../usuario_cliente/Navbar/index'
import LinkComponent from '../../components/Link'
import { FaClipboardList } from 'react-icons/fa'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { useContext } from 'react'

;<style>
  @import uimport LinkComponent from './../../components/Link/index';
  rl('https://fonts.googleapis.com/css2?family=Dosis:wght@500&family=Inter:wght@300;400&display=swap');
</style>

const Home = () => {
  const user = useContext(AuthContext)
  return (
    <>
      <section className="card_create collum">
        <section>
          <h1>Bem vindo, {user.user?.name}</h1>
          <p>O que podemos ajudar?</p>
        </section>
        <div className="row">
          <div className="card blue">
            <h2>Meus chamados</h2>
            <FaClipboardList />
            <p>Verificar chamados abertos</p>
            <img className="image" alt="settings" />
          </div>

          <div className="card red">
            <h2>Artigos</h2>
            <p>Acesse artigos</p>
            <img className="image" alt="article" />
          </div>

          <LinkComponent className="link__called" toPage="/create/chamado">
            <div className="card red">
              <section>
                {' '}
                Abrir solicitacao <FaClipboardList />
              </section>
              <p>Abrir novo chamado</p>
            </div>
          </LinkComponent>
        </div>
      </section>
    </>
  )
}
export default Home
