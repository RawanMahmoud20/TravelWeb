import React, { useEffect, useState } from "react";
import styles from "../../resourses/Css/cssModules/hotels.module.css";
import NavBar from "../component/NavBar";
import HotelForm from "../component/HotelComponents/HotelForm";
import HotelCard from "../component/HotelComponents/HotelCard";
import { GetAllHotels, SearchHotels } from "../../hooks/UseHotel";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [searched, setSearched] = useState(false);

  // GET ALL
  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    const res = await GetAllHotels();
    setHotels(res.data);
    setSearched(false);
  };

  // SEARCH
  const handleSearch = async (keyword) => {
    if (!keyword) {
      loadHotels();
      return;
    }
    const res = await SearchHotels(keyword);
    setHotels(res.data);
    setSearched(true);
  };

  return (
    <div>
      <NavBar />
      <header className={styles.headerHotels}>
        <h1>Find the Best Hotels</h1>
        <p>Choose from hundreds of luxury hotels around the world</p>
      </header>
      <section className={styles.hotelSearch}>
        <h2 className={styles.search}>Search Hotels</h2>
        <HotelForm onSearch={handleSearch} />
        <div className={styles.guideList}>
          {Array.isArray(hotels) && hotels.length > 0 ? (
            hotels.map((hotel) => (
              <HotelCard
                key={hotel.hotelId}
                img={`https://travelgo.runasp.net${hotel.imageGallery[0]}`}
                name={hotel.name}
                location={hotel.address}
              />
            ))
          ) : searched ? (
            <div className={styles.noResults}>
              <p>No hotels found</p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Hotels;
