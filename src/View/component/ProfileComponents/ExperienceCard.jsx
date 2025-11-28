import React from 'react';
import styles from '../../../resourses/Css/cssModules/profile.module.css';

export default function ExperienceCard({ experience }) {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.experienceHeader}>
        <span className={styles.rating}>★ {experience.rating}</span>
        <span className={styles.experienceDate}>{experience.date}</span>
      </div>
      <p className={styles.review}>{experience.text}</p>
      <div className={styles.reviewFooter}>
        <button className={styles.editReview}>Edit Review</button>
        <button className={styles.addReview}>Add New Review</button>
      </div>
    </div>
  );
}