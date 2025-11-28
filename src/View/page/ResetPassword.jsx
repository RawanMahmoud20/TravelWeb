import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../resourses/Css/cssModules/ResetPassword.module.css";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert("If the email exists you will receive a reset link.");
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.logo}>TravelGo</h1>
        <h2 className={styles.title}>Reset Password</h2>

        <form className={styles.form} onSubmit={handleReset}>
          <input className={styles.input} type="email" placeholder="Email address" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className={styles.primary} type="submit">Send Reset Link</button>
        </form>

        <p className={styles.footer}>
          Remembered? <Link to="/login" className={styles.link}>Back to login</Link>
        </p>
      </div>
    </div>
  );
}