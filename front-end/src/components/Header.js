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

  return (
    <header className="header">
      {userInfo.role === 'customer'
        ? (
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
        )
        : (
          <div className="nav">
            <button
              onClick={ () => history.push('/orders') }
              value="Meus Pedidos"
              type="button"
            >
              Meus Pedidos

            </button>
          </div>
        )}
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
