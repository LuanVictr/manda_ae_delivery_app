import React, { useState } from "react";
import PropTypes from 'prop-types';
import Context from "./context";;

function Provider({children}) {
  const [test, setTest] = useState('working');

  const value = {
    test,
    setTest,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;