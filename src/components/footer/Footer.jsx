import React from "react";

import style from "./Footer.module.css";

import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className={`container ${style["footer-container"]}`}>
        <div className={style["quality"]}>
          <h2>Quality cleaning for your home</h2>
          <p>
            Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.
          </p>
          <div className={style["rectangles"]}>
            <div className={style["rectangel"]}></div>
            <div className={style["rectangel"]}></div>
            <div className={style["rectangel"]}></div>
            <div className={style["rectangel"]}></div>
            <div className={style["rectangel"]}></div>
          </div>
        </div>
        <div className={style["contact"]}>
          <h4>Contact us</h4>
          <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
          <p className={style["parag-num"]}>(414) 567 - 2109</p>
          <p>contact@cleaning.com</p>
        </div>
        <div className={style["hours"]}>
          <h4>Hours</h4>
          <h5>Monday to Friday</h5>
          <p>6:00 AM - 9:00 PM</p>
          <h5>Saturday & Sunday</h5>
          <p>8:00 AM - 8:00 PM</p>
        </div>
        <div className={style["free"]}>
          <h4>Get a free estimate</h4>
          <h2>(414) 567 - 2109</h2>
          <p>
            Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
          </p>
          <div className={style["main-btn"]}>
            <button>Get a free quote</button>
          </div>
        </div>
      </div>
      <div className="container">
        <hr className={style["hrf"]} />
        <div className={style["footer-down"]}>
          <img src={logo} alt="" />
          <h4>
            Copyright © Cleaning X | Designed by <span>BRIX Templates </span>-
            Powered by <span>Webflow</span>
            <span> -Licenses</span>
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
