import React from 'react';
import PropTypes from 'prop-types';
import '../styles/orderCard.style.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function OrdersCart({ id, status, total }) {
  const history = useHistory();
  return (
    <div
      aria-hidden
      onClick={ () => history.push(`/order/${id}`) }
      className="order-card"
    >
      <p>{`Pedido ${id}`}</p>
      <h4>{status}</h4>
      <p>{`Total: R$ ${total}`}</p>
    </div>
  );
}

OrdersCart.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  total: PropTypes.number,
}.isRequired;

export default OrdersCart;
