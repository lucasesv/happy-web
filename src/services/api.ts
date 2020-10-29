import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_HAPPY_REST_API_BASE_URL
});

export default api;