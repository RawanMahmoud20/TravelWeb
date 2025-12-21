import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import CityForm from "../component/CityComponents/CityForm";
import CityCard from "../component/CityComponents/CityCard";
import  styles from   "../../resourses/Css/cssModules/cities.module.css";
import { GetAllCities } from "../../hooks/UseCity";
import { searchCities  } from "../../Services/CityServices";
import Swal from "sweetalert2";

const Cities = () => {
const [cities, setCities] = useState([]);

// GET ALL
  useEffect(() => {
    loadCities();
  }, []);

const loadCities = async () => {
  try {
    // لتجلب كل المدن من API
      const res = await GetAllCities();
      if (res.success) {
        setCities(res.data); // data فقط
      }
    } catch (error) {
      Swal.fire("Error", "Cannot fetch cities", "error");
    }
};

  // SEARCH
  const handleSearch = async (keyword, resetInput) => {
  const trimmed = keyword.trim();
  if (!trimmed) {
    Swal.fire("Error", "Please enter a city name", "error");
    return;
  }
    try {
    const res = await searchCities(trimmed);

      if (res.data.success &&res.data.data.length > 0) {
        Swal.fire("Success ✅", res.data.message, "success");
        setCities(res.data.data);// data من البحث
      } else {
        Swal.fire("Not Found", "No city found", "warning");
         setCities([]);  // فراغ إذا ما في نتائج
      }
      // هنا resetInput() هي الدالة الممررة من CityForm التي تفريغ حالة الـ input (setSearch("")).
    if (resetInput) resetInput();
    } catch (error) {
      Swal.fire("Error", "Server error", "error");
    }
  };  

    return (
        <div>
            <NavBar />

            <header className={styles.headerFlights}>

                <h2>Find Your Perfect City</h2>
                <p>Best prices, fast booking, easy travel experience</p>
            </header>

            <section className={styles.searchSection}>
            <h2 className={styles.search}>Search Cities</h2>

          <CityForm onSearch={handleSearch} />

                <div className={styles.flightList}>
                  {Array.isArray(cities) &&
                    cities.map((city) => (
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