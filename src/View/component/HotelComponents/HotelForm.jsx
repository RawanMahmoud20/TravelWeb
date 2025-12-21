import React, { useState } from "react";
import styles from "../../../resourses/Css/cssModules/hotels.module.css";

const HotelForm = ({ onSearch }) => {
  const [hotelName, setHotelName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(hotelName.trim());
    }
  };

  return (
    <form className={styles.hotelForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Hotel name"
        value={hotelName}
        onChange={(e) => setHotelName(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default HotelForm;
