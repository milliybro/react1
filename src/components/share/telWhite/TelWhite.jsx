import React from "react";
import phone from "../../../assets/images/phone.png";
import style from "./TelWhite.module.css"

const TelWhite = () => {
  return (
    <div className={style["phone"]}>
      <img src={phone} alt="phone-img" />
      <div className={style["phone-call"]}>
        <h6>Call us now</h6>
        <h3>(414) 567 - 2109</h3>
      </div>
    </div>
  );
};

export default TelWhite;
