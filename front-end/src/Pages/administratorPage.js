import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { requestAllUsers } from '../utils/axios/axiosApi';

function AdministratorPage() {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const allUsersFetched = await requestAllUsers();
      setAllUsers(allUsersFetched);
    }
    fetchUsers();
  }, []);

  const handleChange = ({ target }) => {
    setNewUser({
      ...newUser,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <Header />
      <div>
        <h2>Cadastrar novo usuário</h2>
        <form>
          <input
            onChange={ handleChange }
            type="text"
            name="name"
            value={ newUser.name }
            placeholder="Nome"
          />
          <input
            onChange={ handleChange }
            type="email"
            name="email"
            value={ newUser.email }
            placeholder="Email"
          />
          <input
            onChange={ handleChange }
            type="password"
            name="password"
            value={ newUser.password }
            placeholder="Senha"
          />
          <select value={ newUser.role } name="role" onChange={ handleChange }>
            <option>customer</option>
            <option>seller</option>
          </select>
          <button type="button">Cadastrar</button>
        </form>
      </div>
      <div>
        <h4>Lista de usuários</h4>
        <table>
          <tr>
            <th>Índice</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AdministratorPage;
