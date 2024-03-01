import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../component/carousel";
import "../styles/homepage.css";

const Homepage = () => {
  return (
    <div class="container">
      <div class="main-section">
        <div class="left-section">
          {/* <img
        class="bgTriangle"
        src="./images/01_homepage/triangle.png"
        alt=""
      />  */}
          <h1>
            2020
            <br />
            總統大選
          </h1>
          <div id="invoicing">
            <Link to="/mappage" class="check_btn">
              <span>看開票！</span>
            </Link>
          </div>
        </div>

        <Carousel />

        <div class="text-container">
          <p class="text">歡迎收看 2020 年總統</p>
          <div class="em-text">格鬥大會</div>
          <p class="text">
            ，我們這次有三位參賽者，各有千秋，搭配不同的專屬技能，歡迎全台民眾，一同來觀賞他們的即時演出吧！
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
