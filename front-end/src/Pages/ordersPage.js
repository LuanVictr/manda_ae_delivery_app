import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { requestOrdersBySellerId,
  requestOrdersFromUserId,
  requestUserId } from '../utils/axios/axiosApi';
import OrdersCart from '../components/ordersCart';

function OrdersPage() {
  const [userInfo, setUserInfo] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const userInfoStoraged = JSON.parse(localStorage.getItem('userInfo'));
      setUserInfo(userInfoStoraged);
      async function fetchUserId() {
        const id = await requestUserId(userInfo.name);
        return id;
      }
      async function fetchOrders(userId) {
        if (userInfoStoraged.role === 'customer') {
          const userOrders = await requestOrdersFromUserId(userId.userId);
          setOrders(userOrders);
        } else if (userInfoStoraged.role === 'seller') {
          const sellersOrders = await requestOrdersBySellerId(userId.userId);
          setOrders(sellersOrders);
        }
      }
      const userId = await fetchUserId();
      await fetchOrders(userId);
    }
    fetchData();
  }, [userInfo.name]);

  return (
    <div className="orders-page">
      <Header />
      <h3>Meus Pedidos</h3>
      {orders.map((order, index) => (<OrdersCart
        key={ index }
        id={ order.id }
        status={ order.status }
        total={ order.totalPrice }
      />))}
    </div>
  );
}

export default OrdersPage;
