import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../context/context';

function Header() {
  const [userName, setUserName] = useState('');
  const { setScreen } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    const localStorageInfo = localStorage.getItem('userInfo');
    const userInfo = JSON.parse(localStorageInfo);
    setUserName(userInfo.name);
  }, []);

  const registerOption = ({ target }) => {
    setScreen(target.value);
  };

  return (
    <header className="header">
      <div className="nav">
        <button
          onClick={ registerOption }
          value="produtos"
          type="button"
        >
          Produtos

        </button>
        <button
          onClick={ registerOption }
          value="Meus Pedidos"
          type="button"
        >
          Meus Pedidos

        </button>
      </div>
      <p>{userName}</p>
      <button onClick={ () => history.push('/login') } type="button">Sair</button>
    </header>
  );
}

export default Header;
