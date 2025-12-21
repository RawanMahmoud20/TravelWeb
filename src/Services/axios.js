import axios from "axios";
// Create an axios instance with default configurations
// such as baseURL and headers
// for making HTTP requests to the API
const axiosInstance = axios.create({
  baseURL: "https://travelgo.runasp.net/api",
  headers: {
    Accept: "application/json",
  },
});

export default axiosInstance;
