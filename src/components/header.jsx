import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Bigicon from "../assets/Svg/font_big.svg";
import Smallicon from "../assets/Svg/font_small.svg";
import Instrgram from "../../public/icon/Instagram.png";
import Twitter from "../../public/icon/TwitterX.png";
import Facebook from "/icon/Facebook.png";
import Livephoto from "/icon/headphones2.png";
// import Shareicon from "../assets/Svg/share.svg?react";
import Shareicon from "../assets/Svg/share.svg";
const header = (headerToLayout) => {
  // const Image = {
  //   livephoto: require("../../public/icon/headphones2.png"),
  // };
  const [sharebtn, setsharebtn] = useState(false);
  const [shareMove, setShareMove] = useState(false);
  const sendMove = () => {
    setShareMove(true);
    setsharebtn(false);
  };
  const setBack = () => {
    setsharebtn(true);
  };

  return (
    <div>
      <header className="isTop">
        <div className="wrap">
          <div className="logo">
            <Link to="/">
              <div id="logo_img"></div>
              {/* <img
                  src={{ Img }}
                  onMouseEnter={LOGOChange}
                  onMouseLeave={LOGOback}
                  alt=""
                /> */}
            </Link>
          </div>
          <nav>
            <ul className="menu">
              <li>
                <Link to="/mappage">
                  <img src={Livephoto} alt="" />
                  開票地圖
                </Link>
              </li>
              <li onClick={headerToLayout(true, 0)}>
                <a>辣小英</a>
              </li>
              <li onClick={headerToLayout(true, 1)}>
                <a>韓導</a>
              </li>
              <li onClick={headerToLayout(true, 2)}>
                <a>辣個男人</a>
              </li>
            </ul>
          </nav>
          <ul className="socialList">
            <li>
              <a href="#" className="btnFontSize">
                <img src={Smallicon} className="smallIcon" alt="" />
                {/* <Smallicon className="smallIcon"></Smallicon> */}
              </a>
            </li>
            <li>
              <a href="#" className="btnFontSize">
                <img src={Bigicon} className="bigIcon" alt="" />
              </a>
            </li>
            <li>
              <a href="#" className="btn-share" onClick={sendMove}>
                <img src={Shareicon} className="shareIcon" alt="" />
                {/* <Shareicon className="shareIcon"></Shareicon> */}
              </a>
            </li>
          </ul>
          <button type="button" className="menuOpenBtn">
            <span></span>
          </button>
        </div>
        <div
          className={`share social-software ${
            sharebtn
              ? "share-animation-back"
              : shareMove
              ? "share_animation"
              : ""
          }`}
        >
          <img onClick={setBack} src={Facebook} alt="facebook" />
          <img onClick={setBack} src={Instrgram} alt="instagram" />
          <img onClick={setBack} src={Twitter} alt="twitter" />
          <img onClick={setBack} src="../../public/icon/LINE.png" alt="line" />
          <img
            onClick={setBack}
            src="../../public/icon/Plurk.png"
            alt="plurk"
          />
        </div>
      </header>
    </div>
  );
};

export default header;
