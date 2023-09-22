import React from "react";

import style from "./Home.module.css"
import home from "../../assets/images/home.png"
import Btn from "../share/btn/Btn";
import TelWhite from "../share/telWhite/TelWhite";

const Home = () => {
  return (
    <section id="home">
      <div className={`container-lg ${style["home-container"]}`}>
        <div className={style["home-text"]}>
         <h1>Quality cleaning for your home</h1>
         <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
         <div className={style["home-info"]}>
            <Btn />
            <TelWhite />
         </div>
        </div>
        <div className={style["home-img"]}>
         <img src={home} alt="home-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
