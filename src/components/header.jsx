import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Bigicon from "../../public/icon/Svg/font_big.svg?react";
import Smallicon from "../../public/icon/Svg/font_small.svg?react";
import Shareicon from "../../public/icon/Svg/share.svg?react";

const header = () => {
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
                  <img src="icon/headphones2.png" alt="" />
                  開票地圖
                </Link>
              </li>
              <li onClick={() => headerToLayout(true, 0)}>
                <a>辣小英</a>
              </li>
              <li onClick={() => headerToLayout(true, 1)}>
                <a>韓導</a>
              </li>
              <li onClick={() => headerToLayout(true, 2)}>
                <a>辣個男人</a>
              </li>
            </ul>
          </nav>
          <ul className="socialList">
            <li>
              <a href="#" className="btnFontSize">
                <Smallicon className="smallIcon"></Smallicon>
              </a>
            </li>
            <li>
              <a href="#" className="btnFontSize">
                <Bigicon className="bigIcon"></Bigicon>
              </a>
            </li>
            <li>
              <a href="#" className="btn-share" onClick={sendMove}>
                <Shareicon className="shareIcon"></Shareicon>
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
          <img
            onClick={setBack}
            src={"../../public/icon/Facebook.png"}
            alt=""
          />
          <img
            onClick={setBack}
            src={"../../public/icon/Instagram.png"}
            alt=""
          />
          <img
            onClick={setBack}
            src={"../../public/icon/TwitterX.png"}
            alt=""
          />
          <img onClick={setBack} src={"../../public/icon/LINE.png"} alt="" />
          <img onClick={setBack} src={"../../public/icon/Plurk.png"} alt="" />
        </div>
      </header>
    </div>
  );
};

export default header;
