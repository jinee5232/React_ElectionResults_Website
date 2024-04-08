import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel.jsx";
import "../styles/homepage.css";

const Homepage = () => {
  return (
    <div className="container">
      <div className="main-section">
        <div className="left-section">
          <h1>
            2020
            <br />
            總統大選
          </h1>
          <div id="invoicing">
            <Link to="mappage" className="check_btn">
              <span>看開票！</span>
            </Link>
          </div>
        </div>

        <Carousel />

        <div className="text-container">
          <p className="text">歡迎收看 2020 年總統</p>
          <div className="em-text">格鬥大會</div>
          <p className="text">
            ，我們這次有三位參賽者，各有千秋，搭配不同的專屬技能，歡迎全台民眾，一同來觀賞他們的即時演出吧！
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
