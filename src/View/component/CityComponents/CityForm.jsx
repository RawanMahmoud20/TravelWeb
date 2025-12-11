import React from "react";
import styles from "../../../resourses/Css/cssModules/cities.module.css";

const CityForm = () => {
  return (
    <form className={styles.flightForm}>
      
      <input type="text" placeholder="From" required />
      <input type="text" placeholder="To" required />
      <input type="text" placeholder="Notes" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default CityForm;
