import LinkComponent from '../../../components/Link'
import ListUsuarios from '../Crud/ListUsuarios'
import './styleHomeAdm.scss'

const Home = () => {
  return (
    <>
      <div className="Container_Adm">
        <div className="hero"></div>
        <div className="content_list">
          <section className="list_users">
            <div className="content_button">
              <LinkComponent
                toPage="/listUsuarios"
                children="Acessar funcionarios cadastrados no sistema"
              ></LinkComponent>
            </div>
          </section>
          <section className="list_users">
            <div className="content_button">
            <LinkComponent
                toPage="/#"
                children="Acessar clientes cadastrados no sistema"
              ></LinkComponent>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
export default Home



