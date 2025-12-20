import axiosInstance from "./axios";

// GET all hotels
export const fetchHotels = () => axiosInstance.get("/Hotel");

// SEARCH hotels by name
export const searchHotels = (name) =>
  axiosInstance.get(`/Hotel/search`, { params: { name } });
