import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import styles from "../../resourses/Css/cssModules/Signup.module.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please make sure your password and confirm password are identical."
      });
      return;
    }

    try {
      // إرسال البيانات لإنشاء الحساب (السيرفر يرسل كود التفعيل)
      await axios.post(
        "https://travelgo.runasp.net/api/Auth/Register",
        {
          fullName: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        },
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.response?.data?.message || err.message
      });
      return;
    }

    const { value: activationCode } = await Swal.fire({
      title: "Enter Activation Code",
      input: "text",
      inputLabel: "Activation Code",
      inputPlaceholder: "Enter the code sent to your email",
      showCancelButton: true,
      inputAttributes: { autocapitalize: "off", autocorrect: "off" }
    });

    if (!activationCode) {
      Swal.fire({
        icon: "error",
        title: "Activation Required",
        text: "You must enter the activation code to proceed."
      });
      return;
    }

    try {
      // إرسال كود التفعيل لتفعيل الحساب
      await axios.post(
        "https://travelgo.runasp.net/api/Auth/activecode",
        {
          email: email,
          activationCode: activationCode
        },
        { headers: { "Content-Type": "application/json" } }
      );

      Swal.fire({
        icon: "success",
        title: "Account Activated",
        text: "Your account has been successfully activated!"
      }).then(() => navigate("/login"));

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Activation Failed",
        text: err.response?.data?.message || err.message
      });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.logo}>TravelGo</h1>
        <h2 className={styles.title}>Create Account</h2>

        <form className={styles.form} onSubmit={handleCreate}>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
          />

          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <input
            className={styles.input}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />

          <button className={styles.primary} type="submit">
            Sign Up
          </button>
        </form>

        <p className={styles.footer}>
          Already have an account?{" "}
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
