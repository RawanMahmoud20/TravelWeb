import React from "react";
import styles from "../../../resourses/Css/cssModules/flights.module.css";

const CityCard = ({ img, name }) => {
  return (
    <div className={styles.guideCard}>
      <img src={img} className={styles.cardImgTop} alt={name} />

      <div className={styles.cardBody}>
        <h3 className={styles.cityName}>{name}</h3>

        <button
          onClick={() => (window.location.href = '/TravelForm')}
          className={styles.bookBtn}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CityCard;
