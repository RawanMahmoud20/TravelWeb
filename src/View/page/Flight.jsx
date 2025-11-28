import React from "react";
import NavBar from "../component/NavBar";
import FlightForm from "../component/FlightComponents/FlightForm";
import FlightCard from "../component/FlightComponents/FlightCard";
import ToParis from "../../resourses/image/ToParis.webp";
import ToIstanbul from "../../resourses/image/ToIstanbul.webp";
import ToDubai from "../../resourses/image/ToDubai.jpg";

import  styles from   "../../resourses/Css/cssModules/flights.module.css";

const Flights = () => {
   const flights = [
    { img: ToParis, route: "Cairo -> Paris", departure: "06:12 AM", price: 450 },
    { img: ToIstanbul, route: "Cairo -> Istanbul", departure: "12:45 AM", price: 280 },
    { img: ToDubai, route: "Cairo -> Dubai", departure: "08:30 AM", price: 320 },
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
