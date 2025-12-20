import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://travelgo.runasp.net/api",
  headers: {
    Accept: "application/json",
  },
});

export default axiosInstance;
