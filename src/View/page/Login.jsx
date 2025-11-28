import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../resourses/Css/cssModules/login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    navigate("/");
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.logo}>TravelGo</h1>
        <h2 className={styles.title}>Welcome back</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email or mobile"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className={styles.row}>
            <Link to="/reset-password" className={styles.link}>
              Forgot password?
            </Link>
          </div>

          <button className={styles.primary} type="submit">
            Login
          </button>
        </form>

        <div className={styles.divider}>OR LOG IN USING</div>

        <div className={styles.socialRow}>
          <button className={`${styles.social} ${styles.google}`}>Google</button>
          <button className={`${styles.social} ${styles.facebook}`}>
            Facebook
          </button>
        </div>

        <p className={styles.footer}>
          Don't have an account? <Link to="/signup" className={styles.link}>Create one</Link>
        </p>
      </div>
    </div>
  );
}