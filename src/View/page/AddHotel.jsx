import React, { useState } from 'react';
import styles from '../../resourses/Css/cssModules/AddHotel.module.css';
import headerImg from '../../resourses/image/AddHotelHeader.jpg';

export default function AddHotel() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    classification: '',
    description: '',
    city: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    price: '',
    rooms: '',
    rating: '',
    arrival: '',
    images: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Hotel added successfully!');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={headerImg} alt="Header" />
        <div className={styles.headerOverlay}>
          <h2 className={styles.headerText}>Hello Mr Ahmed!</h2>
        </div>
      </div>

      <div className={styles.progressContainer}>
        <div className={`${styles.progressLine} ${step >= 1 ? styles.active : ''}`} />
        <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>1</div>
        <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>2</div>
        <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>3</div>
        <div className={`${styles.step} ${step >= 4 ? styles.active : ''}`}>4</div>
        <div className={styles.stepLabel} style={{ left: 'calc(0% - 30px)' }}>Basic info</div>
        <div className={styles.stepLabel} style={{ left: 'calc(32% - 30px)' }}>Location & Contact</div>
        <div className={styles.stepLabel} style={{ left: 'calc(65% - 30px)' }}>Prices</div>
        <div className={styles.stepLabel} style={{ left: 'calc(97% - 30px)' }}>Pictures & Services</div>
      </div>

      <div className={styles.section}>
        <h3>Basic information</h3>
        <div className={styles.mb3}>
          <label className={styles.label}>Hotel Name</label>
          <input
            type="text"
            name="name"
            className={styles.control}
            placeholder="Name of the hotel"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.label}>Classification</label>
          <select
            name="classification"
            className={styles.control}
            value={formData.classification}
            onChange={handleChange}
          >
            <option value="" disabled>Resort, Family...</option>
            <option>5 Stars</option>
            <option>4 Stars</option>
            <option>3 Stars</option>
            <option>Budget</option>
          </select>
        </div>
        <div className={styles.mb3}>
          <label className={styles.label}>Description</label>
          <textarea
            name="description"
            className={styles.control}
            rows="3"
            placeholder="Enter specific description of the hotel"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h3>Location & contact</h3>
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>City, Country</label>
            <input
              type="text"
              name="city"
              className={styles.control}
              placeholder="Name of city/country"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Full address</label>
            <input
              type="text"
              name="address"
              className={styles.control}
              placeholder="Write the address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Phone Number</label>
            <input
              type="text"
              name="phone"
              className={styles.control}
              placeholder="Phone number of the hotel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.col}>
            <label className={styles.label}>E-Mail</label>
            <input
              type="email"
              name="email"
              className={styles.control}
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Website Link</label>
            <input
              type="text"
              name="website"
              className={styles.control}
              placeholder="Website link"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>


      <div className={styles.section}>
        <h3>Prices & description</h3>
        <div className={styles.mb3}>
          <label className={styles.label}>Price for one night</label>
          <input
            type="number"
            name="price"
            className={styles.control}
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.label}>Number of rooms</label>
          <input
            type="number"
            name="rooms"
            className={styles.control}
            placeholder="Rooms"
            value={formData.rooms}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.label}>Rating out of 5</label>
          <input
            type="number"
            name="rating"
            className={styles.control}
            min="0"
            max="5"
            step="0.1"
            placeholder="Enter rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.label}>Time of arrival</label>
          <input
            type="time"
            name="arrival"
            className={styles.control}
            value={formData.arrival}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.label}>Upload pictures</label>
          <div className={styles.uploadBox}>
            <div className={styles.uploadIcon}>📤</div>
            <p>Click or drag files here</p>
          </div>
        </div>
      </div>

      <div className={styles.textCenter}>
        <button className={styles.btnSubmit} onClick={handleSubmit}>
          Add Hotel
        </button>
      </div>
    </div>
  );
}