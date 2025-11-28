import React, { useState } from "react";
import styles from "../../../resourses/Css/cssModules/guides.module.css";

const UploadImage = () => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.memoryUpload}>
      <label htmlFor="imageUpload" className={styles.uploadBtn}>
        Choose a picture
      </label>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className={styles.uploadInput}
      />
      <div className={styles.previewContainer}>
        {preview ? (
          <img src={preview} className={styles.previewImage} alt="Preview" />
        ) : (
          <span className={styles.previewPlaceholder}>
            Your image will appear here after uploading
          </span>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
