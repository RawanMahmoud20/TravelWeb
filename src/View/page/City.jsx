import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import CityForm from "../component/CityComponents/CityForm";
import CityCard from "../component/CityComponents/CityCard";
import ToParis from "../../resourses/image/ToParis.webp";
import ToIstanbul from "../../resourses/image/ToIstanbul.webp";
import ToDubai from "../../resourses/image/ToDubai.jpg";

import  styles from   "../../resourses/Css/cssModules/cities.module.css";
import { GetAllCities } from "../../hooks/UseCity";
import { searchCities } from "../../Services/CityServices";

const Cities = () => {
const [Cities, setCities] = useState([]);

// GET ALL
  useEffect(() => {
    loadCities();
  }, []);

const loadCities = async () => {
  const res = await GetAllCities();
  setCities(res.data); // نستخدم data فقط
};

  // SEARCH
  const handleSearch = async (keyword) => {
    if (!keyword) {
      loadCities();
      return;
    }
    const res  = await searchCities(keyword);
    setCities(res.data);
  };  
//    const cities = [
//     { img: ToParis, name: "Paris Tour" },
//     { img: ToIstanbul, name: "Istanbul Tour" },
//     { img: ToDubai, name: "Dubai Tour" },
//   ];

    return (
        <div>
            <NavBar />

            <header className={styles.headerFlights}>

                <h2>Find Your Perfect City</h2>
                <p>Best prices, fast booking, easy travel experience</p>
            </header>

            <section className={styles.searchSection}>
            <h2 className={styles.search}>Search Cities</h2>

                <CityForm />

                <div className={styles.flightList}>
                  {Array.isArray(Cities) &&
                    Cities.map((city) => (
                        <CityCard
                        key={city.cityId}
                        img={`https://travelgo.runasp.net${city.photo}`}
                        name={city.cityName}
                        />
                    ))}

                </div>
            </section>
        </div>
    );
};

export default Cities;