import React from "react";
import style from "./About.module.css"

import schedule from "../../assets/images/about1.png"
import pay from "../../assets/images/about2.png"
import clean from "../../assets/images/about3.png"
import  { Btn } from "../share/btn/Btn";
import Explore from "../share/explore/Explore";

const About = () => {
  return (
    <section id="about">
      <div className={`container ${style["about-container"]}`}>
        <h1>About Us</h1>
        <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        <div className={style["about-item"]}>
         <div className={style["about-card"]}>
            <img src={schedule} alt="schedule online" />
            <h3>1. Schedule online</h3>
            <h6>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</h6>
         </div>
         <div className={style["about-card"]}>
            <img src={pay} alt="schedule online" />
            <h3>2. Pay online easily</h3>
            <h6>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</h6>
         </div>
         <div className={style["about-card"]}>
            <img src={clean} alt="schedule online" />
            <h3>3. Get your house cleaned</h3>
            <h6>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</h6>
         </div>
        </div>
        <div className={style["about-btn"]}>
         <Btn />
         <Explore />
        </div>
      </div>
    </section>
  );
};

export default About;
