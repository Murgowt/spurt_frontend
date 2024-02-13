import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://51.20.55.14',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customAxios;
