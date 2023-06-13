import React from 'react';
import PropTypes from 'prop-types';

function UsersCards({ index, name, email, password, role }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{password}</td>
      <td>{role}</td>
      <td><button type="button">Excluir</button></td>
    </tr>
  );
}

UsersCards.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  role: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default UsersCards;
