import { fetchHotels, searchHotels } from "../Services/HotelServices";

export const GetAllHotels = async () => {
  const res = await fetchHotels();
  return res.data;
};

export const SearchHotels = async (keyword) => {
  const res = await searchHotels(keyword);
  return res.data;
};