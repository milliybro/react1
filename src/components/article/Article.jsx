import React from "react";
import Btn from "../share/btn/Btn";

import style from "./Article.module.css";

import articlef from "../../assets/images/article1.png"
import articles from "../../assets/images/article2.png"
const Article = () => {
  return (
    <section id="article">
      <div className="container">
        <div className={style["article-header"]}>
          <h1>Articles & resources</h1>
          <div className={style["article-header-btn"]}>
            <Btn />
            <div className={style["explore-btn"]}>
              <button>Browse articles</button>
            </div>
          </div>
        </div>
        <div className={style["article-item"]}>
         <div className={style["article-card"]}>
            <img src={articlef} alt="" />
            <div className={style["article-card-text"]}>
               <h3>8 best vacuum cleaners to clean any mess for your home in 2022</h3>
               <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
               <div className={style["article-card-footer"]}>
               <h5>Jan 28, 2022</h5>
               <div className={style["rectangel"]}>

               </div>
               </div>
            </div>
         </div>
         <div className={style["article-card"]}>
            <img src={articles} alt="" />
            <div className={style["article-card-text"]}>
               <h3>How to properly disinfect your phone and other electronics</h3>
               <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
               <div className={style["article-card-footer"]}>
               <h5>Feb 1, 2022</h5>
               <div className={style["rectangel"]}>

               </div>
               </div>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
