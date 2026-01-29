import axios from 'axios';

// Create a basic Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || 'https://klab-nodejs-api.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;