import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import styles from "../../resourses/Css/cssModules/login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://travelgo.runasp.net/api/Auth/Login",
        {
          email: email,
          password: password,
          rememberMe: rememberMe
        },
        { headers: { "Content-Type": "application/json" } }
      );

      // حفظ الـ token إذا أرسله السيرفر
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are now logged in!"
      }).then(() => navigate("/"));

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.response?.data?.message || err.message
      });
    }
  };
// ---- Google Login ----
  const handleGoogleLogin = () => {
    // توجه المستخدم للسيرفر لبدء OAuth Google
    window.location.href = "https://travelgo.runasp.net/api/ExternalAuth/GoogleLogin";
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

          <div className={styles.rememberRow}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              id="rememberMe"
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

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
          <button className={`${styles.social} ${styles.google}`} onClick={handleGoogleLogin}>Google</button>
          <button className={`${styles.social} ${styles.facebook}`}>Facebook</button>
        </div>

        <p className={styles.footer}>
          Don't have an account? <Link to="/signup" className={styles.link}>Create one</Link>
        </p>
      </div>
    </div>
  );
}
