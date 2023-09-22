import logo from "../../assets/images/logo.png";
import React from "react";
import styles from "./Header.module.css";

import GetBtn from "../share/getBtn/GetBtn";

import menu from "../../assets/images/hamburger.svg"

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className={`container ${styles["nav-container"]}`}>
          <div className={styles["nav-content"]}>
            <div className="nav-logo">
              <img src={logo} alt="logo" />
            </div>
            <ul className={styles["nav-link"]}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#article">Articles</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles["nav-btn"]}>
            <h6>Cart (<span>0</span>)</h6>
            <GetBtn />
          </div>
            <img className={styles["menu"]} src={menu} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
