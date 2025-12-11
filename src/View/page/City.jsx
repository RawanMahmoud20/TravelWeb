import React from "react";
import NavBar from "../component/NavBar";
import CityForm from "../component/FlightComponents/CityForm";
import CityCard from "../component/FlightComponents/CityCard";
import ToParis from "../../resourses/image/ToParis.webp";
import ToIstanbul from "../../resourses/image/ToIstanbul.webp";
import ToDubai from "../../resourses/image/ToDubai.jpg";

import  styles from   "../../resourses/Css/cssModules/flights.module.css";

const Cities = () => {
   const cities = [
    { img: ToParis, name: "Paris Tour" },
    { img: ToIstanbul, name: "Istanbul Tour" },
    { img: ToDubai, name: "Dubai Tour" },
  ];

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
                   {cities.map((city, index) => (
                    <CityCard
                     key={index}
                    img={city.img}
                    name={city.name}
                    />
                   ))}
                </div>
            </section>
        </div>
    );
};

export default Cities;