import axios from 'axios';
import { useState, useEffect } from 'react';
import { setupAPIClient } from './../../../hooks/useApi';

const api = setupAPIClient();
const ListUsuarios = () => {


 
  const [newData, setNewData] = useState({});

  useEffect(() => {
    api
      .get("/admin/users")
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


    const users = [{
        "nome":"evellyn",
        "email":"eve@gmail.com"
    },
    {
        "nome":"sara",
        "email":"sara@gmail.com"
    }
    ]
    const listItems = users.map((user) =>
    <li>{user.nome}</li>
  );

    return(
       <p>{listItems}</p>
    
    )

}
export default ListUsuarios