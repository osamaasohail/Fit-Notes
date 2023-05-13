import axios from 'axios';
const client = axios.create({
  baseURL: 'http://ec2-18-189-44-153.us-east-2.compute.amazonaws.com:4000/',
  headers: {
    "auth-token" : `${localStorage.getItem("token")}`
  }
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers['auth-token'] = `${token}`;
  return config;
}, (error) => {
  return Promise.reject(error);
});

export { client };