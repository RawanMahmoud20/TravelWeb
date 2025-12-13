import React from "react";
import styles from "../../../resourses/Css/cssModules/cities.module.css";
import Hotels from './../../page/Hotels';

const CityCard = ({ img, name }) => {
  return (
    <div className={styles.guideCard}>
      <img src={img} className={styles.cardImgTop} alt={name} />

      <div className={styles.cardBody}>
        <h5 className={styles.cityName}>{name}</h5>

        <button
          onClick={() => (window.location.href = '/hotels')}
          className={styles.bookBtn}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CityCard;
