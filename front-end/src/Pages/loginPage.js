import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestLogin } from '../utils/axios/axiosApi';
import '../styles/login.style.css';
import logoImage from '../styles/images/mandaelogo.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => history.location.pathname === '/' && history.push('/login'), []);

  const validateButton = () => {
    const minPasswordLength = 6;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (password.length >= minPasswordLength && regex.test(email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    const minPasswordLength = 6;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== '' || password !== '') {
      if (regex.test(email) === false) {
        setErrorMessage('Email Inválido');
      } else { setErrorMessage(''); }
      if (password !== '' && password.length < minPasswordLength) {
        setErrorMessage('Senha deve possuir no mínimo 6 caracteres');
      }
    } else { setErrorMessage(''); }
    validateButton();
  }, [email, password]);

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      setEmail(target.value);
    }
    if (target.name === 'password') {
      setPassword(target.value);
    }
  };

  const login = async () => {
    try {
      const response = await requestLogin({ email, password });
      if (response) {
        const localStorageInfo = JSON.stringify(response);
        localStorage.setItem('userInfo', localStorageInfo);
        if (response.role === 'customer') {
          return history.push('/products');
        } if (response.role === 'seller') {
          return history.push('/orders');
        } if (response.role === 'administrator') {
          return history.push('/administrator');
        }
      }
    } catch (error) {
      setErrorMessage('Usuário ou senha inválidas');
    }
  };

  return (
    <div className="login-page">
      <form className="login-form">
        <img className="logo" src={ logoImage } alt="logo" />
        <div className="inputs">
          <input
            data-testid="common_login__input-email"
            onChange={ handleChange }
            name="email"
            value={ email }
            type="email"
            placeholder="Email"
          />
          <input
            data-testid="common_login__input-password"
            onChange={ handleChange }
            name="password"
            value={ password }
            type="password"
            placeholder="Senha"
          />
        </div>
        <button
          className="login-button"
          onClick={ login }
          disabled={ isDisabled }
          data-testid="common_login__button-login"
          type="button"
        >
          Login

        </button>
        <button
          className="sign-button"
          onClick={ () => history.push('/register') }
          data-testid="common_login__button-register"
          type="button"
        >
          Cadastrar-se

        </button>
        <p
          className="error-text"
          data-testid="common_login__element-invalid-email"
        >
          {errorMessage}

        </p>
      </form>
    </div>
  );
}

export default LoginPage;
