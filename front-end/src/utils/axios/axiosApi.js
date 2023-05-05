import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestLogin = async (body) => {
  const result = await api.post('/login', body);
  return result;
};

export default api;
