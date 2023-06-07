import axios from "axios";
const client = axios.create({
  baseURL: "https://3.23.244.114:3000/",
  // baseURL: 'http://localhost:4000/',
  headers: {
    "auth-token": `${localStorage.getItem("token")}`,
  },
});

client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers["auth-token"] = `${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { client };
