import React from "react";
import NavBar from "../component/NavBar";
import GuidesList from '../component/GuideComponents/GuidesList';
import UploadImage from '../component/GuideComponents/UploadImage';
import styles from "../../resourses/Css/cssModules/guides.module.css";
const FeedBack = () => {
  return (
    <>
      <NavBar />
      <header className={styles.headerGuides}>
        <h2>Share a photo from your trip with us</h2>
        <p>Upload your favorite photo and make it a part of your memories with us</p>
      </header>
      <GuidesList />
      <UploadImage />
    </>
  );
};

export default FeedBack;
