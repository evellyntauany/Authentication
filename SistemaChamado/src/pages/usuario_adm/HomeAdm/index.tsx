import LinkComponent from '../../../components/Link'
import ListUsuarios from '../ListUsuarios'
import Navbar from '../Navbar'
import './styleHomeAdm.css'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="Container_Adm">
        <div className="hero"></div>
        <div className="content_list">
          <section className="list_users">
            <div>
            <LinkComponent
              toPage="/listUsuarios"
              text="Acesar funcionarios cadastrados no sistema"
            ></LinkComponent>
            </div>
    
          </section>
          <section className="list_users">
            <div>
            <h4>Acesar clientes cadastrados no sistema</h4>
            </div>
          </section>

          
        </div>
      </div>
    </>
  )
}
export default Home
