import React from "react";
import TelWhite from "../share/telWhite/TelWhite";

import style from "./Contact.module.css";

export const Contacta = () => {
  return (
    <section id="contact" className={style["contact"]}>
      <div className={`container ${style["contact-container"]}`}>
        <div className={style["contact-info"]}>
          <h2>Contact Us</h2>
          <p>
            In dignissim euismod pretium amet enim a eu nam ut urna accumsan
            pellentesque lacus duis pharetra eutortor.
          </p>
          <TelWhite />
          <hr className={style["hr"]} />
          <h5>Not convinced yet?</h5>
          <p>
            Massa bibendum consectetur maurisid gravida purus, dolor dui amet
            morbi non nunc urna purus diam.
          </p>
          <div className={style["explore-btn"]}>
            <button>Browse our packages</button>
          </div>
        </div>
        <div className={style["contact-form"]}>
          <div className={style["form-item"]}>
            <div className={style["form-card"]}>
              <h4>Full name</h4>
              <input type="text" />
            </div>
            <div className={style["form-card"]}>
              <h4>Phone number</h4>
              <input type="text" />
            </div>
          </div>
          <div className={style["form-item"]}>
            <div className={style["form-card"]}>
              <h4>Address</h4>
              <input type="text" />
            </div>
            <div className={style["form-card"]}>
              <h4>Email</h4>
              <input type="text" />
            </div>
          </div>
          <div className={style["form-item"]}>
            <div className={style["form-card"]}>
              <h4>Requested service</h4>
              <input type="text" />
            </div>
            <div className={style["form-card"]}>
              <h4>Day of service</h4>
              <input type="text" />
            </div>
          </div>
          <div className={style["form-textarea"]}>
            <h4>Add a note</h4>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className={style["main-btn"]}>
            <button>Submit message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacta;
