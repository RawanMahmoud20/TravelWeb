import React from "react";
import styles from "../../../resourses/Css/cssModules/travelForm.module.css";

const BookNow = () => {
  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <h2>Booking</h2>
        <p className={styles.subtitle}>Complete your booking details</p>

        <form>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="travelDate">Travel Date</label>
            <input
              type="date"
              id="travelDate"
              className={styles.dateInput}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="travelers">Number of Travelers</label>
            <input type="number" id="travelers" min="1" defaultValue="1" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="adults">Adults</label>
            <input type="number" id="adults" min="1" defaultValue="1" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="children">Children</label>
            <input type="number" id="children" min="0" defaultValue="0" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="rooms">Rooms</label>
            <input type="number" id="rooms" min="1" defaultValue="1" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="notes">Notes (Optional)</label>
            <textarea
              id="notes"
              placeholder="Write any other details..."
            ></textarea>
          </div>

          {/* Price Summary */}
          <div className={styles.priceSummaryBox}>
            <div className={styles.sectionTitle}>Price Summary</div>

            <div className={styles.priceItem}>
              <span className={styles.priceLabel}>
                2 Rooms × 1 Night × $150
              </span>
              <span className={styles.priceValue}>$300</span>
            </div>

            <div className={styles.priceItem}>
              <span className={styles.priceLabel}>Fees & Tax</span>
              <span className={styles.priceValue}>$30</span>
            </div>

            <div className={styles.total}>
              <span>Summary</span>
              <span className={styles.totalValue}>$330</span>
            </div>

            <button type="submit" className={styles.submitBtn}
            onClick={()=>window.location.href='/checkout'}>
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
