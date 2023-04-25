import './style.css'
import Navbar from '../usuario_cliente/Navbar/index'
;import LinkComponent from '../../components/Link';
<style>
  @import
  uimport LinkComponent from './../../components/Link/index';
rl('https://fonts.googleapis.com/css2?family=Dosis:wght@500&family=Inter:wght@300;400&display=swap');
</style>

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <section  className="card_create collum">
        <h1>O que podemos ajudar?</h1>
        <div className="chamado">
          <input type="text" className="pergunta"></input>
        </div>
        <div className='row'>
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

    
          <div className="card red">
          <LinkComponent toPage="/create/chamado" text="TI"></LinkComponent>
            <p>Criar solicitacao</p>
            <img className="image" alt="article" />
           
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
