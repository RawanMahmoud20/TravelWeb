import React from "react";
import styles from "../../resourses/Css/cssModules/flights.module.css";

const FlightCard = ({ img, route, departure, price }) => {
  return (
    <div className={styles.guideCard}>
      <img src={img} className={styles.cardImgTop} alt={route} />
      <div className={styles.cardBody}>
        <span className={styles.textBlack50}>{route}</span>
        <p>Departure: {departure}</p>
        <p>Price: {price}$</p>
        <button
          onClick={() => (window.location.href = 'travel-form.html')}
          className={styles.bookBtn}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
