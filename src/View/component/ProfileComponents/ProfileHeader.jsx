import React from 'react';
import styles from '../../../resourses/Css/cssModules/profile.module.css';

export default function ProfileHeader({ user }) {
  return (
    <header className={styles.profileHeader}>
      <img
        src={user.avatar || '/img/user.png'}
        alt={user.name}
        className={styles.avatar}
      />
      <div className={styles['user-info']}>
        <h2 className={styles.username}>{user.name}</h2>
        <p className={styles.meta}>{user.email}</p>
        <p className={styles.meta}>{user.location}</p>

        <div className={styles.controls}>
          <button className={styles.editBtn}>Edit Profile</button>
          <button className={styles.logoutBtn}>Logout</button>
        </div>
      </div>
    </header>
  );
}