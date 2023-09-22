import React from "react";
import Explore from "../share/explore/Explore";
import Btn from "../share/btn/Btn";
import style from "./Service.module.css";

import house from "../../assets/images/service1.png";
import office from "../../assets/images/service2.png";
import industrial from "../../assets/images/service3.png";
import phone from "../../assets/images/phone.png";

const Service = () => {
  return (
    <section id="service">
      <div className="container">
        <div className={style["service-header"]}>
          <h1>Our Services</h1>
          <Explore />
        </div>
        <div className={style["service-item"]}>
          <div className={style["service-card"]}>
            <img src={house} alt="" />
            <h4>House cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className={style["service-card"]}>
            <img src={office} alt="" />
            <h4>Office cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className={style["service-card"]}>
            <img src={industrial} alt="" />
            <h4>Industrial cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
        <div className={style["card"]}>
          <div className={style["card-img"]}></div>
          <div className={style["card-text"]}>
            <h6>Covid-19 sanitization</h6>
            <h2>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h2>
            <p>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className={style["card-btn"]}>
              <Btn />
              <div className={style["phone"]}>
                <img src={phone} alt="phone-img" />
                <div className={style["phone-call"]}>
                  <h6>Call us now</h6>
                  <h3>(414) 567 - 2109</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Service;
