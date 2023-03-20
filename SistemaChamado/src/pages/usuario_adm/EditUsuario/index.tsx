import React, { useState } from 'react';
import axios from 'axios';
import { FormEvent } from 'react';

//function UserEditForm(props) {
function UserEditForm() {
  //const [name, setName] = useState(props.user.name);
  //const [email, setEmail] = useState(props.user.email);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    const user = {
        name,
        email,
        password,
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        E-mail:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Nova senha:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Atualizar</button>
    </form>
  );
}

export default UserEditForm;
