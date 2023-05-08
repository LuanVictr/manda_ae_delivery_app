import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/context';

function ProductsCards({ price, url, name }) {
  const [quantity, setQuantity] = useState(0);
  const { cartInfo, setCartInfo } = useContext(Context);

  useEffect(() => {
    if (cartInfo.find((item) => item.name === name)) {
      const newCart = cartInfo.map(
        (card) => (card.name !== name && card.quantity !== 0) && card,
      ).filter(Boolean);
      newCart.push({ name, price, quantity });
      setCartInfo(newCart);
    } else { setCartInfo([...cartInfo, { name, price, quantity }]); }
  }, [quantity]);

  const quantityHandle = async ({ target }) => {
    if (target.value === '+') {
      setQuantity(quantity + 1);
    }
    if (target.value === '-' && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <img src={ url } alt={ name } />
      <h4>{price}</h4>
      <p>{name}</p>
      <div className="quantity-conteiner">
        <button onClick={ quantityHandle } value="-" type="button">-</button>
        <p>{quantity}</p>
        <button onClick={ quantityHandle } value="+" type="button">+</button>
      </div>
    </div>
  );
}

ProductsCards.propTypes = {
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
/*   quantityHandle: PropTypes.func.isRequired, */
};

export default ProductsCards;
