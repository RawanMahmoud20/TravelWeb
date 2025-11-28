import React from "react";
import styles from "../../../resourses/Css/cssModules/flights.module.css";

const FlightForm = () => {
  return (
    <form className={styles.flightForm}>
      
      <input type="text" placeholder="From" required />
      <input type="text" placeholder="To" required />
      <input type="text" placeholder="Notes" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default FlightForm;
