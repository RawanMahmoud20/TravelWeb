
import {
  fetchCities,
  searchCities,
  createCity, } from "../Api/CityApi"


export const GetAllCities = async () => {
  const res = await fetchCities();
  return res.data;
};
export const SearchCities = async (keyword) => {
  const res = await searchCities(keyword);
  return res.data;
};

export const AddCity = async (formData) => {
  await createCity(formData);
};