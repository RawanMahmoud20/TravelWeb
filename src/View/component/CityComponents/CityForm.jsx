import React, { useState }  from "react";
import styles from "../../../resourses/Css/cssModules/cities.module.css";
import Swal from "sweetalert2";

const CityForm = ({onSearch}) => {
const [search, setSearch] = useState("");
  
const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the search logic here
    console.log("Searching for:", search);
    if (!search.trim() ) {
      Swal.fire("Error", "Please enter city name", "error");
      return;
    }
 onSearch(search, () => setSearch(""));  }
  
  return (
    <form className={styles.flightForm} onSubmit={handleSubmit}>
      <input type="text"
       placeholder="Search" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
       required />
      <button type="submit">Search</button>
    </form>
  );
};

export default CityForm;
