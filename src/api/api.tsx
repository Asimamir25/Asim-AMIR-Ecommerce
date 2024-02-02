import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com", // Replace with your API base URL
  timeout: 5000, // Set a timeout for requests (optional)
  // Add any other configuration options here
});

export default axiosInstance;
