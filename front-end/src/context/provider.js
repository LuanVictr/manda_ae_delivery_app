import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {
  const [screen, setScreen] = useState('');
  const [cartInfo, setCartInfo] = useState([]);

  const value = useMemo(() => (
    {
      screen,
      setScreen,
      cartInfo,
      setCartInfo,
    }
  ), [screen, setScreen, cartInfo, setCartInfo]);

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
