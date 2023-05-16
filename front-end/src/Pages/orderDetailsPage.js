import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import { requestOrder, requestStatusChange, requestUser } from '../utils/axios/axiosApi';
import ProductCheckoutCard from '../components/ProductsCheckoutCard';
import '../styles/ordersDetails.style.css';

function DetailsOrdersPage() {
  const { id } = useParams();
  const [orderInfo, setOrderInfo] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [cart, setCart] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const history = useHistory();

  const validateMarkDeliveryButton = async () => {
    if (orderInfo.status === 'Entregue') {
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    async function fetchData() {
      async function fetchOrder() {
        const order = await requestOrder(id);
        return order;
      }
      async function fetchSellerName() {
        const seller = await requestUser(orderInfo.sellerId);
        return seller;
      }
      const order = await fetchOrder();
      const seller = await fetchSellerName();
      setOrderInfo(order);
      setSellerName(seller.name);
    }
    const cartLocalStorage = localStorage.getItem('cart');
    const cartParsed = JSON.parse(cartLocalStorage);
    setCart(cartParsed);
    fetchData();
    validateMarkDeliveryButton();
  }, [id, orderInfo.sellerId]);

  const calculateTotal = () => {
    const prices = cart.map((product) => product.price * product.quantity);
    const totalPrice = prices.reduce((acc, cur) => acc + cur, 0);
    return totalPrice.toFixed(2);
  };

  const markAsDelivered = () => {
    requestStatusChange(id, 'Entregue');
    history.push('/orders');
  };

  return (
    <div className="details-page">
      <Header />
      <div className="details-conteiner">
        <h2>Detalhes do pedido</h2>
        <div className="order-details">
          <h4>{`Pedido número ${orderInfo.id}`}</h4>
          <p>{`P.Vend: ${sellerName}`}</p>
          <p>{orderInfo.status}</p>
        </div>
        <div className="order-table">
          <table>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
            </tr>
            {cart.map((cartItem, index) => (<ProductCheckoutCard
              index={ index }
              name={ cartItem.name }
              quantity={ cartItem.quantity }
              price={ cartItem.price }
              key={ index }
            />))}
          </table>
          <div className="details-botton">
            <button
              disabled={ isDisabled }
              onClick={ markAsDelivered }
              type="button"
            >
              Marcar como entregue

            </button>
            <h3>{`Total: ${calculateTotal()}`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsOrdersPage;
