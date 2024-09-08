import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VITE_APP_API_URL, // base URL
  headers: { Authorization: `Bearer ${process.env.VITE_APP_API_KEY}` },
});

export default axiosInstance;
