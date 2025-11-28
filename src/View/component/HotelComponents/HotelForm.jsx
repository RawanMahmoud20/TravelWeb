import React from "react";
import styles from "../../../resourses/Css/cssModules/hotels.module.css";

const HotelForm = () => {
  return (
    <form className={styles.hotelForm}>
      <input type="text" placeholder="City / Country" />
      <input type="number" placeholder="Nights" />
      <button type="submit">Search</button>
    </form>
  );
};

export default HotelForm;
