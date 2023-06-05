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
        <section className="card_create__text">
          <h1 className="bemVindo">Bem vindo, {user.user?.name}</h1>
          <p>O que podemos ajudar?</p>
        </section>
        <div className="row">
          {user.user && user.user?.userType === 2 ? (
            <LinkComponent className="link__called" toPage="/allchamados">
              <Card children={'Acessar chamados'} icon={FaClipboardList}></Card>
            </LinkComponent>
          ) : (
            <>
              {user.user ? (
                <>
                  <LinkComponent className="link__called" toPage="/chamados">
                    <Card
                      className={'card'}
                      children={'Meus chamados'}
                      icon={FaClipboardList}
                    ></Card>
                  </LinkComponent>
                  <LinkComponent
                    className="link__called"
                    toPage="https://www.dwu.com.br/manuais/suporte/manual-de-abertura-de-chamados-de-suporte/?doing_wp_cron=1685931538.6418991088867187500000"
                  >
                    <Card
                      className={'card'}
                      children={'Artigos'}
                      icon={FaClipboardList}
                    ></Card>
                  </LinkComponent>

                  <LinkComponent
                    className="link__called"
                    toPage="/create/chamado"
                  >
                    <Card
                      children={'Abrir solicitacao'}
                      icon={FaClipboardList}
                    ></Card>
                  </LinkComponent>
                </>
              ) : (
                ''
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
export default Home
