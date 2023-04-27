import './style.css'
import Navbar from '../usuario_cliente/Navbar/index'
import LinkComponent from '../../components/Link'
import { FaClipboardList } from "react-icons/fa";

;<style>
  @import uimport LinkComponent from './../../components/Link/index';
  rl('https://fonts.googleapis.com/css2?family=Dosis:wght@500&family=Inter:wght@300;400&display=swap');
</style>

const Home = () => {
  return (
    <>
      <section className="card_create collum">
        <h1>O que podemos ajudar?</h1>
        <div className="chamado">
          <input type="text" className="pergunta"></input>
        </div>
        <div className="row">
          <div className="card blue">
            <h2>Configurações</h2>
            <p>Abrir chamado para configuracao</p>
            <img className="image" alt="settings" />
          </div>

          <div className="card red">
            <h2>Artigos</h2>
            <p>Acesse artigos</p>
            <img className="image" alt="article" />
          </div>

          <LinkComponent toPage="/create/chamado">
            <div className="card red">
              <section> Abrir solicitacao</section>
              <p>Solicite novo chamado</p>
              <FaClipboardList/>
            </div>
          </LinkComponent>
        </div>
      </section>
    </>
  )
}
export default Home
