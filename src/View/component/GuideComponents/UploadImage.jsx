import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import styles from "../../../resourses/Css/cssModules/guides.module.css";

const UploadImage = () => {
  const [preview, setPreview] = useState(null);
  const [comment, setComment] = useState("");

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
        <label className={styles.commentLabel}>Add your comment</label>
      {/* صندوق التعليق + أيقونة رفع الصورة */}
      <div className={styles.commentInputWrapper}>
        <input
          type="text"
          placeholder="Add your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={styles.commentInputInline}
        />

        <FaCameraRetro
          className={styles.uploadIconInline}
          size={22}
          onClick={() => document.getElementById("imageUpload").click()}
        />
      </div>

      {/* input file مخفي */}
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className={styles.realInput}
      />

      {/* المعاينة */}
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
