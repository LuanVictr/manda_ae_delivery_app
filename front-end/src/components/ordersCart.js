import React from 'react';
import PropTypes from 'prop-types';
import '../styles/orderCard.style.css';

function OrdersCart({ id, status, total }) {
  return (
    <div className="order-card">
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
