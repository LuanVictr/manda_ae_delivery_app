import React, { useEffect, useState } from 'react';

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [registerInfo, setRegisterInfo] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const userNameMin = 12;
    const passwordMin = 6;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (registerInfo.email !== ''
    && registerInfo.password !== ''
    && registerInfo.userName !== '') {
      if (registerInfo.userName.length < userNameMin) {
        setErrorMessage('Nome completo deve possuir no minimo 12 caracteres');
      }
      if (regex.test(registerInfo.email) === false) {
        setErrorMessage('Email Inválido');
      }
      if (registerInfo.password.length < passwordMin) {
        setErrorMessage('Senha deve possuir no minimo 6 caracteres');
      }
    }
    if (registerInfo.userName.length > userNameMin
      && regex.test(registerInfo.email)
      && registerInfo.password.length > passwordMin) {
      setErrorMessage('');
      setIsDisabled(false);
    }
  }, [registerInfo]);

  const handleChange = ({ target }) => {
    setRegisterInfo({
      ...registerInfo,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <form className="register form">
        <input
          name="userName"
          onChange={ handleChange }
          value={ registerInfo.userName }
          data-testid="common_register__input-name"
          type="text"
          placeholder="Seu nome"
        />
        <input
          onChange={ handleChange }
          value={ registerInfo.email }
          name="email"
          data-testid="common_register__input-email"
          type="email"
          placeholder="Seu email"
        />
        <input
          onChange={ handleChange }
          value={ registerInfo.password }
          name="password"
          data-testid="common_register__input-password"
          type="password"
          placeholder="Sua senha"
        />
        <button
          disabled={ isDisabled }
          data-testid="common_register__button-register"
          type="button"
        >
          Cadastrar

        </button>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
}

export default LoginPage;
