import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../styles/header.style.css';

function Header() {
  const [userInfo, setUserInfo] = useState('');
  const history = useHistory();

  useEffect(() => {
    const localStorageInfo = localStorage.getItem('userInfo');
    const userInfoStoraged = JSON.parse(localStorageInfo);
    setUserInfo(userInfoStoraged);
  }, []);

  const checkRole = () => {
    if (userInfo.role === 'customer') {
      return (
        <div className="nav">
          <button
            onClick={ () => history.push('/products') }
            value="produtos"
            type="button"
          >
            Produtos
          </button>
          <button
            onClick={ () => history.push('/orders') }
            value="Meus Pedidos"
            type="button"
          >
            Meus Pedidos

          </button>
        </div>
      );
    } if (userInfo.role === 'seller') {
      return (
        <div className="nav">
          <button
            onClick={ () => history.push('/orders') }
            value="Meus Pedidos"
            type="button"
          >
            Meus Pedidos

          </button>
        </div>
      );
    } if (userInfo.role === 'administrator') {
      return (
        <div className="nav">
          <button
            type="button"
            onClick={ () => history.push('/administrator') }
          >
            Gerenciar Usuários

          </button>
        </div>
      );
    }
  };

  return (
    <header className="header">
      {
        checkRole()
      }
      <p>{`Olá ${userInfo.name}`}</p>
      <button
        className="logout"
        onClick={ () => history.push('/login') }
        type="button"
      >
        Sair

      </button>
    </header>
  );
}

export default Header;
