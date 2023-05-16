import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { requestProducts } from '../utils/axios/axiosApi';
import ProductsCards from './ProductCards';
import Context from '../context/context';
import '../styles/products.style.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const { cartInfo } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    async function fetchProducts() {
      const allProducts = await requestProducts();
      setProducts(allProducts);
      setIsFetched(true);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const cart = JSON.stringify(cartInfo);
    localStorage.setItem('cart', cart);
  }, [cartInfo]);

  return (
    <div className="products-page">
      <div className="products-conteiner">
        { isFetched
          ? (
            products.map(
              ({ name, price, urlImage, id }) => (<ProductsCards
                name={ name }
                price={ price }
                url={ urlImage }
                key={ id }
              />),
            )
          )
          : <p>loading</p>}
      </div>
      <button
        className="checkout-button"
        onClick={ () => history.push('/checkout') }
        type="button"
      >
        Finalizar pedido

      </button>
    </div>
  );
}

export default Products;
