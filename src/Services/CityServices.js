import axiosInstance from "./axios";

// GET all cities

export const fetchCities = async () => {
    return await axiosInstance.get("/City");
}
// SEARCH cities
export const searchCities = async (name) => {
    return await axiosInstance.get(`/City/search?name=${name}`);
}

// GET city by ID
export const fetchCityById = async (id) => {
    return await axiosInstance.get(`/City/${id}`);
}
// POST create new city
export const createCity = async (formData) => {
 return axiosInstance.post(
    "/City",
    formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}