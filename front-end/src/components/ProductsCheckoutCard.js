import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/products-cart-checkout.style.css';

function ProductCheckoutCard({ removeItem, index, name, quantity, price }) {
  const [haveRemoveItem, setHaveRemoveItem] = useState(false);

  useEffect(() => {
    if (removeItem) {
      setHaveRemoveItem(true);
    }
  }, []);

  return (
    <tr className="checkout-item">
      <td>{index}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{`R$ ${price}`}</td>
      <td className="button-td">{`R$ ${(quantity * price).toFixed(2)}`}</td>
      {haveRemoveItem === true && (
        <td>
          <button
            value={ name }
            onClick={ removeItem }
            type="button"
          >
            Remover Item
          </button>

        </td>)}
    </tr>
  );
}

ProductCheckoutCard.propTypes = {
  price: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  index: PropTypes.number,
  removeItem: PropTypes.func,
}.isRequired;

export default ProductCheckoutCard;
