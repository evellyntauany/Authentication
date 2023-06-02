import LinkComponent from '../../components/Link'
import { FaBook, FaClipboardList } from 'react-icons/fa'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { useContext } from 'react'
import Card from '../../components/Card'
import './style.scss'

const Home = () => {
  const user = useContext(AuthContext)

  console.log(user.user?.userType)

  return (
    <>
      <section className="card_create collum">
        <section>
          <h1>Bem vindo, {user.user?.name}</h1>
          <p>O que podemos ajudar?</p>
        </section>
        <div className="row">
          {user.user?.userType === 2 ? (

            <LinkComponent className="link__called" toPage="/allchamados">
              <Card children={'Acessar chamados'} icon={FaClipboardList}></Card>
            </LinkComponent>
            
          ) : (
            <>
              <LinkComponent className="link__called" toPage="/chamados">
                <Card
                  className={'card'}
                  children={'Meus chamados'}
                  icon={FaClipboardList}
                ></Card>
              </LinkComponent>

              <LinkComponent className="link__called" toPage="/">
                <Card children={'Artigos'} icon={FaBook}></Card>
              </LinkComponent>

              <LinkComponent className="link__called" toPage="/create/chamado">
                <Card
                  children={'Abrir solicitacao'}
                  icon={FaClipboardList}
                ></Card>
              </LinkComponent>
            </>
          )}
        </div>
      </section>
    </>
  )
}
export default Home
