import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../../resourses/Css/cssModules/Checkout.module.css';

export default function Checkout() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCvv] = useState('');
  const [toast, setToast] = useState({ visible: false, text: '' });

  const handlePlaceOrder = () => {
    setToast({ visible: true, text: `Order placed successfully` });
    setTimeout(() => {
      setToast({ visible: false, text: '' });
      navigate('/');
    }, 1400);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <button
          aria-label="Close"
          className={styles.closeBtn}
          onClick={() => navigate(-1)}
        >
          ×
        </button>

        <h2 className={styles.sectionTitle}>Check Out</h2>
        <p className={styles.lead}>Complete your purchase securely</p>

        <h4 className={styles.sectionTitle}>Payment Information</h4>

        <div className={styles.secureBadge}>
          <span className={styles.lock}>🔒</span>
          <span>Your information is protected with 256‑bit SSL encryption</span>
        </div>

        <div
          className={`${styles.paymentOption} ${method === 'card' ? styles.selected : ''}`}
          onClick={() => setMethod('card')}
          role="button"
        >
          <div className={styles.left}>
            <span className={styles.icon}>💳</span>
            <span>Credit Card</span>
          </div>
          <input
            className={styles.radio}
            type="radio"
            name="paymentMethod"
            checked={method === 'card'}
            onChange={() => setMethod('card')}
          />
        </div>

        <div className={styles.formRow}>
          <label className={styles.formLabel}>Card Number</label>
          <input
            className={styles.formControl}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
          />
        </div>

        <div className={styles.formRow}>
          <label className={styles.formLabel}>Cardholder Name</label>
          <input
            className={styles.formControl}
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Enter cardholder name"
          />
        </div>

        <div className={styles.rowGrid}>
          <div>
            <label className={styles.formLabel}>Expiration Date</label>
            <input
              className={styles.formControl}
              value={exp}
              onChange={(e) => setExp(e.target.value)}
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className={styles.formLabel}>CVV</label>
            <input
              className={styles.formControl}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
            />
          </div>
        </div>

        <div
          className={`${styles.paymentOption} ${method === 'paypal' ? styles.selected : ''}`}
          onClick={() => setMethod('paypal')}
          role="button"
        >
          <div className={styles.left}>
            <img src="/image/PayPal-Symbol.png" alt="Paypal" className={styles.paypalImg}/>
            <span>PayPal</span>
          </div>
          <input
            className={styles.radio}
            type="radio"
            name="paymentMethod"
            checked={method === 'paypal'}
            onChange={() => setMethod('paypal')}
          />
        </div>

        <div
          className={`${styles.paymentOption} ${method === 'cash' ? styles.selected : ''}`}
          onClick={() => setMethod('cash')}
          role="button"
        >
          <div className={styles.left}>
            <span className={styles.icon}>💵</span>
            <span>Cash</span>
          </div>
          <input
            className={styles.radio}
            type="radio"
            name="paymentMethod"
            checked={method === 'cash'}
            onChange={() => setMethod('cash')}
          />
        </div>

        <div className={styles.actions}>
          <button className={styles.btnOutline} onClick={() => navigate(-1)}>Back To Cart</button>
          <button className={styles.btnPrimary} onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>

      {toast.visible && (
        <div className={styles.toast} role="status" aria-live="polite">
          {toast.text}
        </div>
      )}
    </div>
  );
}