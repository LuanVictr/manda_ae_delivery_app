import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestSellers = async () => {
  const { data } = await api.get('/sellers');
  return data;
};

export const requestUserId = async (user) => {
  const { data } = await api.get(`/user/${user}`);
  return data;
};

export const requestLogin = async (body) => {
  const { data } = await api.post('/login', body);
  return data;
};

export const requestRegister = async (body) => {
  const { data } = await api.post('/register', body);
  return data;
};

export const requestProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

export const requestCreateSell = async (body) => {
  const { data } = await api.post('/sell', body);
  return data;
};

export const requestOrder = async (id) => {
  const { data } = await api.get(`/sell/${id}`);
  return data;
};

export const requestUser = async (id) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const requestOrdersFromUserId = async (id) => {
  const { data } = await api.get(`/orders/${id}`);
  return data;
};

export const requestStatusChange = async (id, status) => {
  const { data } = await api.put(`/orders/${id}`, { status });
  return data;
};

export const requestOrdersBySellerId = async (id) => {
  const { data } = await api.get(`/seller/orders/${id}`);
  return data;
};

export const requestAllUsers = async () => {
  const { data } = await api.get('/users');
  return data;
};

export default api;
