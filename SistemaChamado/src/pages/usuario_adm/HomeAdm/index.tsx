import Navbar from '../Navbar';
import './styleHomeAdm.css';


const Home = () => {
  
  return (
    <><Navbar></Navbar>
    <div className="Container_Adm">
    <div className="hero"></div>
    <div className="content_list">
    <section className="list_users">
      <h4>Acesar funcionarios cadastrados no site</h4>
    </section>
    <section className="list_users">
      <h4>Acesar clientes cadastrados no site</h4>
    </section>
    </div>

    </div>

    </>
  );
};
export default Home;
