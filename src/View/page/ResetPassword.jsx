import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import styles from "../../resourses/Css/cssModules/ResetPassword.module.css";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire("Error", "Please enter your email.", "error");
      return;
    }

    try {
      // خطوة 1: إرسال البريد لطلب Reset Code
      await axios.post(
        "https://travelgo.runasp.net/api/Auth/forgetpassword", // تأكد من هذا الـ endpoint
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      let success = false;

      while (!success) {
        // خطوة 2: طلب Reset Code
        const { value: resetCode } = await Swal.fire({
          title: "Enter Reset Code",
          input: "text",
          inputLabel: "Reset Code",
          inputPlaceholder: "Enter the code sent to your email",
          showCancelButton: true
        });

        if (!resetCode) {
          Swal.fire("Cancelled", "You must enter the reset code to proceed.", "error");
          return;
        }

        // خطوة 3: طلب كلمة المرور الجديدة
        const { value: newPassword } = await Swal.fire({
          title: "Enter New Password",
          input: "password",
          inputLabel: "New Password",
          inputPlaceholder: "Enter your new password",
          showCancelButton: true,
          inputAttributes: { autocapitalize: "off", autocorrect: "off" }
        });

        if (!newPassword) {
          Swal.fire("Cancelled", "You must enter a new password.", "error");
          return;
        }

        try {
          // خطوة 4: إرسال البريد + Reset Code + كلمة المرور الجديدة للتحقق والتخزين
          await axios.post(
            "https://travelgo.runasp.net/api/Auth/ResetPassword", // endpoint التحقق النهائي
            { email, resetCode, newPassword },
            { headers: { "Content-Type": "application/json" } }
          );

          success = true;
          Swal.fire({
            icon: "success",
            title: "Password Reset Successful",
            text: "Your password has been updated. You can now login with your new password."
          }).then(() => navigate("/login"));;

        } catch (err) {
          // عرض رسالة الخطأ من السيرفر وإعادة المحاولة
          Swal.fire({
            icon: "error",
            title: "Reset Failed",
            html: err.response?.data?.message || "Invalid code or password. Please try again."
          });
        }
      }

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Request Failed",
        text: err.response?.data?.message || err.message
      });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.logo}>TravelGo</h1>
        <h2 className={styles.title}>Reset Password</h2>

        <form className={styles.form} onSubmit={handleReset}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.primary} type="submit">Send Reset Code</button>
        </form>

        <p className={styles.footer}>
          Remembered? <Link to="/login" className={styles.link}>Back to login</Link>
        </p>
      </div>
    </div>
  );
}
