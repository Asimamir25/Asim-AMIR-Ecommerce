import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 5000,
});

export default axiosInstance;
