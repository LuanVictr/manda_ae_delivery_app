import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {
  const [cartInfo, setCartInfo] = useState([]);
  const [total, setTotal] = useState(0);

  const value = useMemo(() => (
    {
      cartInfo,
      setCartInfo,
      total,
      setTotal,
    }
  ), [total, setTotal, cartInfo, setCartInfo]);

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
