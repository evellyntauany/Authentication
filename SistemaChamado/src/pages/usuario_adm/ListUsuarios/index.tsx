

const ListUsuarios = () => {

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
        <ul>{listItems}</ul>
    
    )

}
export default ListUsuarios