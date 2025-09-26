import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://e-commerce-backend-hvtu.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

