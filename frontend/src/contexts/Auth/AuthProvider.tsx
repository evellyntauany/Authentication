import { useEffect, useState } from 'react'
import { User, UserLogin, UserRegister } from '../../types/User'
import { AuthContext } from './AuthContext'
import { setupAPIClient } from '../../hooks/useApi'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User>()
  const api = setupAPIClient()
  const [error, setError] = useState('');
  const [sucess, setSucess] = useState('');

  useEffect(() => {
    const checkLocalStorage = () => {
      const data = localStorage.getItem('user');
      if (data) {
        const user = JSON.parse(data);

        if (user.userId) {
          setUser({
            userId: user.userId,
            name:user.name,
            email:user.email,
          })
        }
        const foundUser = JSON.parse(data)
        setUser(foundUser)
      }
    };
  
    checkLocalStorage();
  
    const handleStorageChange = (event: StorageEvent) => {
      // Verifica se a chave específica foi alterada
      if (event.key === 'user') {
        // Chama a função de verificação
        checkLocalStorage();
      }
    };
  
    // Adiciona o ouvinte de evento "storage"
    window.addEventListener('storage', handleStorageChange);
  
    // Função de limpeza para remover o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [api,user]);

  



  async function register({ name, email, password,selectedOption }: UserRegister) {
    
    await api
      .post('/cadastrar', {
        name,
        email,
        password,
        selectedOption
      })
      .then((response) => {
        if(response.status === 200) {
        const {  userId, name, email, userType } = response.data
        const json = JSON.stringify(response.data) //para json
        localStorage.setItem('user', json) //seta no meu localStorage
        
        setUser({
          userId,
          name,
          email,
          userType
        })
        setError('')
        setSucess("Cadastro efetuado com sucesso")
        
  }})
      .catch((erro) => {
        setSucess('')
        if(erro.response.status == 409){
        setError("Email já cadastrado");
        }
        else{
        setError("erro ao se registrar");
        }
        return false
      })
  }

  const logando = async ({ email, password }: UserLogin) => {
    await api
      .post('/signin', {
        email,
        password,
      })
      
      .then((response) => {
        const { name, email, userType } = response.data
        const {userId} = response.data.userId
        const json = JSON.stringify(response.data)
        localStorage.setItem('user', json)
        
        alert('sucesso ao logar')
        setSucess('Sucesso no login')
        
        setUser({
          userId: userId,
          name,
          email,
          userType
        })
       
      })
      .catch((error) => {
        
        if (error.status == 403) {
          alert('Senha incorreta')
        } else {
          alert("Erro ao logar")
        }
        return false
      })

  }

  const signout = async () => {
    console.log('signout está sendo executada.')
    setUser(undefined)
    localStorage.clear()
  }



  return (
    <AuthContext.Provider value={{error, sucess, user, logando, signout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
