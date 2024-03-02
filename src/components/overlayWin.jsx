import React, { useState, useEffect } from "react";

// import Bigicon from "../../public/icon/Svg/font_big.svg?react";
// import Smallicon from "../../public/icon/Svg/font_small.svg?react";
// import Shareicon from "../../public/icon/Svg/share.svg?react";
import Bigicon from "../../public/icon/Svg/font_big.svg";
import Smallicon from "../../public/icon/Svg/font_small.svg";
import Shareicon from "../../public/icon/Svg/share.svg";
import "../styles/overlay.css";
import CloseGbtn from "../../public/icon/btn_close_green.png";
import CloseBbtn from "../../public/icon/btn_close_blue.png";
import CloseObtn from "../../public/icon/btn_close_orange.png";
import BGtasi from "../../public/images/tasi_bg.png";
import PTtasi from "../../public/images/tasi_photo.png";
import SLtasi from "../../public/images/tasi_slogan.png";
import BTtasi from "../../public/images/tasi_battle.png";
import TGtasi from "../../public/icon/tasi_triangle.png";
import BGhan from "../../public/images/han_bg.png";
import PThan from "../../public/images/han_photo.png";
import SLhan from "../../public/images/han_slogan.png";
import BThan from "../../public/images/han_battle.png";
import TGhan from "../../public/icon/han_triangle.png";
import BGsong from "../../public/images/song_bg.png";
import PTsong from "../../public/images/song_photo.png";
import SLsong from "../../public/images/song_slogan.png";
import BTsong from "../../public/images/song_battle.png";
import TGsong from "../../public/icon/song_triangle.png";

const overlayWin = ({ isOpen, overlayToLayout, inData }) => {
  const OverlayData = [
    {
      id: 0,
      color: "#D8B9C3",
      background: "../../public/images/tasi_bg.png",
      CloseIcon: { CloseGbtn },
      photo: { PTtasi },
      infoslogan: { SLtasi },
      educational: [
        "英國倫敦政治經濟學院法學博士學位",
        "美國康乃爾大學法學院法學碩士",
        "國立臺灣大學法律系法學學士",
      ],
      experience: [
        ["民進黨主席", "-- 2014－迄今"],
        ["行政院副院長", "-- 2006－2007"],
        ["民進黨不分區立法委員", "-- 2004－2006"],
      ],
      battle: { BTtasi },
      triangle: { TGtasi },
      quotes: [
        [
          "「",
          "red",
          "中國",
          "只要",
          "green",
          "不擋",
          "，就是對我們最大的",
          "green",
          "幫助",
          "。」",
        ],
      ],
    },
    {
      id: 1,
      color: "#000095",
      background: BGhan,
      CloseIcon: CloseBbtn,
      photo: PThan,
      infoslogan: SLhan,
      educational: [
        "北京大學政府管理研究所博士班",
        "國立政治大學法學院東亞研究所法學碩士",
        "東吳大學外文學院英文學系文學學士",
      ],
      experience: [
        ["財團法人典亮慈善基金會董事長", "--2022－迄今"],
        ["中國國民黨中央委員會常務委員", "--2020－迄今"],
        ["高雄市第3屆市長", "--2018－2020"],
      ],
      battle: BThan,
      triangle: TGhan,
      quotes: [["「貨賣得出去，人跟錢進得來，高雄", "blue", "發大財", "！」"]],
    },
    {
      id: 2,
      color: "orange",
      background: BGsong,
      CloseIcon: CloseObtn,
      photo: PTsong,
      infoslogan: SLsong,
      educational: [
        "喬治城大學政治學博士",
        "柏克萊加利福尼亞大學政治學碩士",
        "加利福尼亞大學柏克萊分校國際關係碩士",
        "國立政治大學外交學系法學學士",
      ],
      experience: [
        ["親民黨主席", "--2000－迄今"],
        ["臺北市政府市政顧問總召集人", "--2014－2021"],
        ["中華民國總統府資政", "--2016－2019"],
      ],
      battle: BTsong,
      triangle: TGsong,
      quotes: [
        [
          "「自古時勢造",
          "orange",
          "英雄",
          "豈有",
          "orange",
          "主角",
          "等燈光！」",
        ],
        [
          "「你可以去問他們為什麼不讓宋楚瑜",
          "orange",
          "參選",
          "，其實",
          "blue",
          "藍白合",
          "只要推宋楚瑜出來參選，問題不就",
          "orange",
          "解決",
          "了嗎？」",
        ],
      ],
    },
  ];

  const result = OverlayData.filter((item) => item.id === inData);
  return (
    <>
      {isOpen ? (
        <div className="overlay" id="intr_window">
          <div
            className="overlay_background"
            onClick={() => overlayToLayout(false, 0)}
          ></div>
          {result.map((item, index) => (
            <div
              className="overlay_container"
              style={{
                backgroundImage: `linear-gradient(
                  rgba(253, 250, 250, 0.9),
                  rgba(255, 255, 255, 0.9)
                ), url(${item.background})`,
              }}
              key={index}
            ></div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default overlayWin;
