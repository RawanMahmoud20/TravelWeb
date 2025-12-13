import React from "react";
import styles from "../../../resourses/Css/cssModules/hotels.module.css";
import HotelDetails from './HotelDetails';

const HotelCard = ({ img, name, location }) => {
  return (
    <div className={styles.guideCard}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{location}</p>
      <button onClick={() => window.location.href='/hotelsDetails'}>
        Book Now
      </button>
    </div>
  );
};

export default HotelCard;
