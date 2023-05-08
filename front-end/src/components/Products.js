import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { requestProducts } from '../utils/axios/axiosApi';
import ProductsCards from './ProductCards';
import Context from '../context/context';

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
    <div className="products">
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
      <button
        onClick={ () => history.push('/checkout') }
        type="button"
      >
        Finlizar pedido

      </button>
    </div>
  );
}

export default Products;
