import React from "react";
import styles from "../../../resourses/Css/cssModules/hotelDetails.module.css";

// import img1 from "../../../resourses/image/e97cce6111d3035ecc710bab7c54b9d99f2bead3.png";
// import img2 from "../../../resourses/image/df808745d4eeae509bbfb902288411fb819999c2.jpg";

import {
  FaArrowLeft,
  FaBell,
  FaMapMarkerAlt,
  FaUtensils,
  FaSwimmer,
  FaWifi,
  FaParking,
  FaStar,
} from "react-icons/fa";

const HotelDetails = () => {
  const hotel = {
    name: "Ap Arab Jumeraihe",
    location: "Paris, France",
    price: 150,
    rating: 4.8,
    reviewer: "Ahmed Ramy",
    reviewTime: "2 hours ago",
  };

  return (
    <>
      {/* Header */}
      <div className={styles.header}>
        {/* <img src={img1} alt="Hotel view" /> */}

        <div className={styles.topIcon}>
          <button aria-label="Go back">
            <FaArrowLeft />
          </button>
          <button aria-label="Notifications">
            <FaBell />
          </button>
        </div>
      </div>

      {/* Hotel Info */}
      <div className={styles.hotelInfo}>
        <h2 className={styles.hotelName}>{hotel.name}</h2>

        <div className={styles.hotelLocation}>
          <FaMapMarkerAlt />
          <span>{hotel.location}</span>
        </div>

        <div className={styles.hotelPrice}>${hotel.price} / night</div>

        <p className={styles.hotelDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          eligendi magnam modi.
          <button className={styles.readMore}>Read More</button>
        </p>

        {/* Offers */}
        <h3 className={styles.sectionTitle}>What We Offer!</h3>

        <div className={styles.offers}>
          <div className={styles.offerItem}>
            <FaUtensils />
            <span>3 Meals</span>
          </div>

          <div className={styles.offerItem}>
            <FaSwimmer />
            <span>Swimming Pool</span>
          </div>

          <div className={styles.offerItem}>
            <FaWifi />
            <span>Free Wifi</span>
          </div>

          <div className={styles.offerItem}>
            <FaParking />
            <span>Parking Spots</span>
          </div>
        </div>

        {/* Review */}
        <div className={styles.review}>
          {/* <img src={img2} alt="Reviewer avatar" /> */}

          <div className={styles.reviewContent}>
            <div className={styles.reviewHeader}>
              <strong>{hotel.reviewer}</strong>
              <span>{hotel.reviewTime}</span>
            </div>

            <div className={styles.reviewRating}>
              <span>{hotel.rating}</span>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>

            <p className={styles.reviewText}>
              It is a wonderful hotel to stay highly recommended.
              <button className={styles.seeAll}>See all reviews</button>
            </p>
          </div>
        </div>

        {/* Action */}
        <div className={styles.actionButtons}>
          <button
          onClick={()=>window.location.href='/booking'}
           className={styles.bookBtn}>Book Now!</button>
        </div>
      </div>
    </>
  );
};

export default HotelDetails;
