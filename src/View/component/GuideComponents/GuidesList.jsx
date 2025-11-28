import React from "react";
import GuideCard from "./GuideCard";
import styles from "../../../resourses/Css/cssModules/guides.module.css";
import imgMohamed from "../../../resourses/image/ImgMohamed.jpg";
import imgMarwa from "../../../resourses/image/ImgMarwa.jpg";
import imgSarah from "../../../resourses/image/ImgSarah.jpg";
import imgSalma from "../../../resourses/image/ImgSalma.jpg";
import imgShams from "../../../resourses/image/ImgShams.jpg";
import imgFriends from "../../../resourses/image/ImgFriends.jpg";
import imgSea from "../../../resourses/image/ImgSea.jpg";

const guidesData = [
  { name: "Mohamed", languages: "Arabic & English", image: imgMohamed },
  { name: "Sarah", languages: "French & English", image: imgSarah },
  { name: "Marwa", languages: "Spanish & English", image: imgMarwa },
  { name: "Salma", languages: "Spanish & English", image: imgSalma },
  { name: "Shams", languages: "Spanish & English", image: imgShams },
  { name: "Friends", languages: "Spanish & English", image: imgFriends },
  { name: "Sea", languages: "Spanish & English", image: imgSea },
];


const GuidesList = () => {
  return (
    <section className={styles.guideList}>
      {guidesData.map((guide, index) => (
        <GuideCard key={index} {...guide} />
      ))}
    </section>
  );
};

export default GuidesList;
