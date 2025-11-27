import React from "react";
import NavBar from "../component/NavBar";
import FlightForm from "../component/FlightForm";
import FlightCard from "../component/FlightCard";
import img1 from "../../resourses/image/لافوثقققم.webp";
import img2 from "../../resourses/image/مةنةىاهخ.webp";
import img3 from "../../resourses/image/1355896-انظار-العالم-تتجه-إلى-برج-خليفة.jpg";

import  styles from   "../../resourses/Css/cssModules/flights.module.css";

const Flights = () => {
   const flights = [
    { img: img1, route: "Cairo -> Paris", departure: "06:12 AM", price: 450 },
    { img: img2, route: "Cairo -> Istanbul", departure: "12:45 AM", price: 280 },
    { img: img3, route: "Cairo -> Dubai", departure: "08:30 AM", price: 320 },
  ];
  
    return (
        <div>
            <NavBar />

            <header className={styles.headerFlights}>

                <h2>Find Your Perfect Flight</h2>
                <p>Best prices, fast booking, easy travel experience</p>
            </header>

            <section className={styles.searchSection}>
                <h2 className={styles.search}>Search Flights</h2>

                <FlightForm />

                <div className={styles.flightList}>
                   {flights.map((flight, index) => (
                    <FlightCard
                    key={index}
                    img={flight.img}
                    route={flight.route}
                    departure={flight.departure}
                    price={flight.price}
                    />
                   ))}
                </div>
            </section>
        </div>
    );
};

export default Flights;
