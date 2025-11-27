import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../resourses/Css/cssModules/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TravelGo</div>

      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/flights"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Flights
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hotels"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Hotels
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/guides"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Guides
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={styles.userIcon}>
            <i className="fa-solid fa-user"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
