import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // API URL of your backend
});

export const getUserById = (id) => {
  return api.get(`/users/${id}`);
};

export const getAllUsers = () => {
  return api.get('/users');
};
