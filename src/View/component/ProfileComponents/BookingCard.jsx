import React from 'react';
import styles from '../../../resourses/Css/cssModules/profile.module.css';

export default function BookingCard({ booking }) {
  return (
    <article className={styles.bookingCard}>
      <img src={booking.img} alt={booking.title} className={styles.bookingImg} />
      <div className={styles.bookingInfo}>
        <h3 className={styles.bookingName}>{booking.title}</h3>
        <p className={styles.details}>Date: {booking.date} · Travelers: {booking.travelers}</p>
        <p className={styles.price}>{booking.price}</p>
        <div className={styles.bookingBtns}>
          <button className={styles.viewBtn}>View / Edit</button>
          <button className={styles.cancelBtn}>Cancel Booking</button>
        </div>
      </div>
    </article>
  );
}