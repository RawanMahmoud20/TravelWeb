import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../resourses/Css/cssModules/Signup.module.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    navigate("/");
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.logo}>TravelGo</h1>
        <h2 className={styles.title}>Create Account</h2>

        <form className={styles.form} onSubmit={handleCreate}>
          <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required />
          <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email or mobile" required />
          <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <button className={styles.primary} type="submit">Sign Up</button>
        </form>

        <p className={styles.footer}>
          Already have an account? <Link to="/login" className={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
}