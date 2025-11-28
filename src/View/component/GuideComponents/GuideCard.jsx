import React from "react";
import styles from "../../../resourses/Css/cssModules/guides.module.css";

const GuideCard = ({ name, languages, image }) => {
  return (
    <div className={styles.guideCard}>
      <img src={image} alt={name} className={styles.guideCardImg} />
      <h3 className={styles.guideCardH3}>{name}</h3>
      <p className={styles.guideCardP}>Languages: {languages}</p>
      <button className={styles.guideCardButton} 
      onClick={() => window.location.href='/travelForm'}>Book Now</button>
    </div>
  );
};

export default GuideCard;
