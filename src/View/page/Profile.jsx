import React from 'react';
import NavBar from '../component/NavBar';
import ProfileHeader from '../component/ProfileComponents/ProfileHeader';
import BookingCard from '../component/ProfileComponents/BookingCard';
import ExperienceCard from '../component/ProfileComponents/ExperienceCard';
import styles from '../../resourses/Css/cssModules/profile.module.css';

const mockUser = {
  name: 'Ahmed Ali',
  email: 'ahmed.ali@example.com',
  location: 'Cairo, Egypt',
  avatar: '/img/user.png'
};

const mockBookings = [
  {
    id: 1,
    img: '/img/hotel.jpg',
    title: 'Pyramids Tour - Cairo',
    date: 'Dec 20, 2025',
    travelers: 2,
    price: '$120'
  }
];

const mockExperiences = [
  {
    id: 1,
    rating: 4.8,
    date: 'Nov 12, 2026',
    text: 'Amazing experience! The tour guide was friendly and the hotel was clean and comfortable.'
  }
];

export default function Profile() {
  return (
    <>
      <NavBar />
      <main className={styles.page}>
        <div className={styles.container}>
          <ProfileHeader user={mockUser} />
          <section className={styles.statsRow}>
            <div className={styles.statBox}>
              <h3>12</h3>
              <p>Saved Places</p>
            </div>
            <div className={styles.statBox}>
              <h3>4.8</h3>
              <p>Rating</p>
            </div>
            <div className={styles.statBox}>
              <h3>3</h3>
              <p>Trips</p>
            </div>
          </section>

          <h2 className={styles.sectionTitle}>My Booking</h2>
          <div className={styles.list}>
            {mockBookings.map(b => (
              <BookingCard key={b.id} booking={b} />
            ))}
          </div>

          <h2 className={styles.sectionTitle}>My Experience</h2>
          <div className={styles.list}>
            {mockExperiences.map(e => (
              <ExperienceCard key={e.id} experience={e} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}