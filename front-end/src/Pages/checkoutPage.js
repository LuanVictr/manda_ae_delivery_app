import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import ProductCheckoutCard from '../components/ProductsCheckoutCard';
import { requestCreateSell,
  requestSellers,
  requestUserId } from '../utils/axios/axiosApi';
import '../styles/checkout.style.css';

function CheckoutPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    number: '',
    selectedSeller: 'Fulana Pereira',
  });
  const [sellers, setSellers] = useState([]);
  const [userId, setUserId] = useState(0);
  const history = useHistory();

  const calculateTotal = () => {
    const prices = products.map((product) => product.price * product.quantity);
    const totalPrice = prices.reduce((acc, cur) => acc + cur, 0);
    return totalPrice.toFixed(2);
  };

  useEffect(() => {
    async function fetchData() {
      const sellersData = await requestSellers();
      setSellers(sellersData);
      const userInfo = localStorage.getItem('userInfo');
      const userInfoParsed = JSON.parse(userInfo);
      const userInfoId = await requestUserId(userInfoParsed.name);
      setUserId(userInfoId.userId);
    }
    const cart = localStorage.getItem('cart');
    const cartParsed = JSON.parse(cart);
    setProducts(cartParsed);
    setProductsLoaded(true);
    fetchData();
  }, []);

  const removeItem = ({ target }) => {
    const newProducts = products.map(
      (product) => product.name !== target.value && product,
    ).filter(Boolean);
    const newProductsStorage = JSON.stringify(newProducts);
    localStorage.setItem('cart', newProductsStorage);
    setProducts(newProducts);
  };

  const handleChange = ({ target }) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [target.name]: target.value,
    });
  };

  const createSell = async () => {
    const selectedSellerId = sellers.find(
      (seller) => seller.name === deliveryInfo.selectedSeller,
    );
    const newSell = await requestCreateSell({
      userId,
      sellerId: selectedSellerId.id,
      totalPrice: calculateTotal(),
      deliveryAddress: deliveryInfo.address,
      deliveryNumber: deliveryInfo.number,
      saleDate: new Date(),
      status: 'Pendente',
    });
    history.push(`/order/${newSell.id}`);
  };

  return (
    <div className="checkout-page">
      <Header />
      <div className="table-total">
        <table>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          {products.map((product, index) => (<ProductCheckoutCard
            removeItem={ removeItem }
            price={ product.price }
            quantity={ product.quantity }
            index={ index + 1 }
            name={ product.name }
            key={ product.name }
          />))}
        </table>
        { productsLoaded
          ? (
            <div className="total">
              <h4>Total</h4>
              <p>{`R$ ${calculateTotal()}`}</p>
            </div>
          )
          : <p>loading</p>}
      </div>
      <div className="delivery-info">
        <h3>Detalhes e Endereço para Entrega</h3>
        <form className="delivery-form">
          <select onClick={ handleChange } name="selectedSeller">
            {sellers.map((seller, index) => (
              <option
                key={ index }
                value={ seller.name }
              >
                {seller.name}
              </option>))}
          </select>
          <input
            className="address-input"
            value={ deliveryInfo.address }
            name="address"
            placeholder="Endereço"
            type="text"
            onChange={ handleChange }
          />
          <input
            className="number-input"
            onChange={ handleChange }
            value={ deliveryInfo.number }
            name="number"
            placeholder="Nº"
            type="number"
          />
        </form>
        <button onClick={ createSell } type="button">Finalizar pedido</button>
      </div>
    </div>
  );
}

export default CheckoutPage;
