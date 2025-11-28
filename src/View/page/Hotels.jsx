import React from "react";
import  styles from   "../../resourses/Css/cssModules/hotels.module.css";

// Dummy data for hotels
import BurjAlArab from "../../resourses/image/BurjAlArab.jpg";
import MarinaBay from "../../resourses/image/MarinaBay.jpg";
import AlazzoVersace from "../../resourses/image/AlazzoVersace.jpg";
import NavBar from './../component/NavBar';
import HotelForm from '../component/HotelComponents/HotelForm';
import HotelCard from '../component/HotelComponents/HotelCard';

const Hotels = () => {
  const hotels = [
    { img: BurjAlArab, name: "Burj Al Arab", location: "DUBAI" },
    { img: MarinaBay, name: "Marina Bay ", location: "SINGAPORE" },
    { img: AlazzoVersace, name: "Palazzo Versace", location: "DUBAI" },
  ];

  return (
    <div>
      <NavBar />
      <header className={styles.headerHotels}>
        <h1>Find the Best Hotels</h1>
        <p>Choose from hundreds of luxury hotels around the world</p>
      </header>
      <section className={styles.hotelSearch}>
        <h2 className={styles.search}>Search Hotels</h2>
        <HotelForm/>
        <div className={styles.guideList}>
          {hotels.map((hotel, index) => (
            <HotelCard
              key={index}
              img={hotel.img}
              name={hotel.name}
              location={hotel.location}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hotels;
