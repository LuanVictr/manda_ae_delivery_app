import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestLogin = async (body) => {
  const result = await api.post('/login', body);
  return result;
};

export const requestRegister = async (body) => {
  const result = await api.post('/register', body);
  return result;
};

export default api;
