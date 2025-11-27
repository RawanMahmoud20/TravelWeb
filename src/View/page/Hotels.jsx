import React from "react";
import  styles from   "../../resourses/Css/cssModules/hotels.module.css";

// Dummy data for hotels
import img1 from "../../resourses/image/d.jpg";
import img2 from "../../resourses/image/ة.jpg";
import img3 from "../../resourses/image/0.jpg";
import NavBar from './../component/NavBar';
import HotelForm from './../component/HotelForm';
import HotelCard from './../component/HotelCard';

const Hotels = () => {
  const hotels = [
    { img: img1, name: "Burj Al Arab", location: "DUBAI" },
    { img: img2, name: "Marina Bay ", location: "SINGAPORE" },
    { img: img3, name: "Palazzo Versace", location: "DUBAI" },
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
