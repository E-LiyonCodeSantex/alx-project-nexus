import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://e-commerce-backend-hvtu.onrender.com/api",
  withCredentials: true, // ✅ Send cookies with every request
});

export default axiosInstance;
