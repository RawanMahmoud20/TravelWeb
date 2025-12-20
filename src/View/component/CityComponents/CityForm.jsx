import React from "react";
import styles from "../../../resourses/Css/cssModules/cities.module.css";

const CityForm = () => {
  return (
    <form className={styles.flightForm}>
      <input type="text" placeholder="Search" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default CityForm;
