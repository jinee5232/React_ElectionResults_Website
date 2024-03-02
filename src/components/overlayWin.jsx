import React, { useState, useEffect } from "react";

// j
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
      background: BGtasi,
      CloseIcon: CloseGbtn,
      photo: PTtasi,
      infoslogan: SLtasi,
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
      battle: BTtasi,
      triangle: TGtasi,
      quotes: [
        [
          <p class="p-1">「</p>,
          <div class="em-text red">中國</div>,
          <p class="p-2">只要</p>,
          <div className="em-text green">不擋</div>,
          <p class="p-2">，就是對我們最大的</p>,
          <div class="em-text green">幫助</div>,
          <p class="p-2">。」</p>,
        ],
        ,
        [
          <p class="p-1">「其實我……是</p>,
          <div class="em-text green">接近</div>,
          <p class="p-2">的，只是你不知道我在</p>,
          <div class="em-text green">接近</div>,
          <p class="p-2">你而已。」</p>,
        ],
        [
          <p class="p-1">「或許有些人一時</p>,
          <div class="em-text green">感受不到</div>,
          <p class="p-2">，我相信，</p>,
          <div class="em-text green">時間到了</div>,
          <p class="p-2">
            ，他們一定會感受到這是個很認真的政府，我有很認真的在
          </p>,
          <div class="em-text green">解決問題</div>,
          <p class="p-2">，也一定會有</p>,
          <div class="em-text green">成效</div>,
          <p class="p-2">的。」</p>,
        ],
        [
          <p class="p-1">「當年</p>,
          <div class="em-text red">製造問題</div>,
          <p class="p-2">的人不僅</p>,
          <div class="em-text blue">不反省</div>,
          <p class="p-2">，現在還反過來說要教訓</p>,
          <div class="em-text green">改革</div>,
          <p class="p-2">的人。」</p>,
        ],
        [
          <p class="p-1">「我們要提醒</p>,
          <div class="em-text green">全黨上下</div>,
          <p class="p-2">
            ，應該要用『誠惶誠恐，如履薄冰』的心情來看待人民的託付。我們可以
          </p>,
          <div class="em-text green">高興</div>,
          <p class="p-2">，但是我們從今天晚上開始，就要以這一次</p>,
          <div class="em-text blue">國民黨</div>,
          <p class="p-2">的</p>,
          <div class="em-text red">失敗</div>,
          <p class="p-2">為警惕。一個政府如果不站在</p>,
          <div class="em-text green">人民</div>,
          <p class="p-2">的這一邊，人民會隨時把權力</p>,
          <div class="em-text green">收回去</div>,
          <p class="p-2">。」</p>,
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
      quotes: [
        [
          <p class="p-1">「貨賣得出去，人跟錢進得來，高雄</p>,
          <div class="em-text blue">發大財</div>,
          <p class="p-2">！」</p>,
        ],
        [
          <p class="p-1">「得民心者得</p>,
          <div class="em-text blue">天下</div>,
          <p class="p-2">，得民調者得</p>,
          <div class="em-text red">痔瘡</div>,
          <p class="p-2">。」</p>,
        ],
        [
          <p class="p-1">「來高雄投資，給高雄</p>,
          <div class="em-text blue">一萬個</div>,
          <p class="p-2">工作機會，我就</p>,
          <div class="em-text red">以身相許</div>,
          <p class="p-2">，晚上跟你睡覺。。。是陪</p>,
          <div class="em-text green">泡茶聊天</div>,
          <p class="p-2">，不要想歪了！」</p>,
        ],
        [
          <p class="p-1">「我準備承擔任何</p>,
          <div class="em-text blue">重要職務</div>,
          <p class="p-2">，為了中華民國，不惜</p>,
          <div class="em-text red">粉身碎骨</div>,
          <p class="p-2">。」</p>,
        ],
        [
          <p class="p-1">「立足</p>,
          <div class="em-text green">台灣</div>,
          <p class="p-2">{">"}胸懷</p>,
          <div class="em-text red">大陸</div>,
          <p class="p-2">{">"}放眼</p>,
          <div class="em-text blue">世界</div>,
          <p class="p-2">{">"}征服宇宙∞」</p>,
        ],
        [
          <p class="p-1">「莫忘世上</p>,
          <div class="em-text blue">苦人</div>,
          <p class="p-2">多。」</p>,
        ],
        [
          <p class="p-1">「說出嘴的</p>,
          <div class="em-text blue">話語</div>,
          <p class="p-2">和吃進肚的</p>,
          <div class="em-text blue">東西</div>,
          <p class="p-2">同樣重要。」</p>,
        ],
        [
          <p class="p-1">「</p>,
          <div class="em-text blue">國民黨</div>,
          <p class="p-2">再不努力，這一支</p>,
          <div class="em-text red">股票</div>,
          <p class="p-2">就要下市了！進入</p>,
          <div class="em-text green">全額交割股</div>,
          <p class="p-2">！」</p>,
        ],
      ],
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
          <p class="p-1">「自古時勢造</p>,
          <div class="em-text orange">英雄</div>,
          <p class="p-2">，豈有</p>,
          <div class="em-text orange">主角</div>,
          <p class="p-2">等燈光！」</p>,
        ],
        [
          <p class="p-1">「你可以去問他們為什麼不讓宋楚瑜</p>,
          <div class="em-text orange">參選</div>,
          <p class="p-2">，其實</p>,
          <div class="em-text blue">藍白合</div>,
          <p class="p-2">只要推宋楚瑜出來參選，問題不就</p>,
          <div class="em-text orange">解決</div>,
          <p class="p-2">了嗎？」</p>,
        ],
        [
          <p class="p-1">「希望</p>,
          <div class="em-text blue">國民黨</div>,
          <p class="p-2">好朋友們，好好去看一看</p>,
          <div class="em-text green">古文觀止</div>,
          <p class="p-2">
            ，宋楚瑜只有兩萬票，不要自己四面楚歌、草木皆兵，就怕中了我的
          </p>,
          <div class="em-text orange">十面埋伏</div>,
          <p class="p-2">。」</p>,
        ],
        [
          <p class="p-1">「希望</p>,
          <div class="em-text orange">馬總統</div>,
          <p class="p-2">對八年來人民遇到的問題多費點心，而不是要評論</p>,
          <div class="em-text blue">下任總統</div>,
          <p class="p-2">是男性還是女性。」</p>,
        ],
        [
          <p class="p-1">「宋楚瑜也好，</p>,
          <div class="em-text orange">親民黨</div>,
          <p class="p-2">也好，不會去對於</p>,
          <div class="em-text green">民進黨</div>,
          <p class="p-2">
            新執政之後，要給他們去喬位置，去找什麼官來做。我們要提的是在
          </p>,
          <div class="em-text orange">立法院</div>,
          <p class="p-2">，我們</p>,
          <div class="em-text blue">共同協助</div>,
          <p class="p-2">，我們不要站在任何哪個政黨那一邊而是站在</p>,
          <div class="em-text orange">人民</div>,
          <p class="p-2">那一邊。」</p>,
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
            >
              <div className="overlay_controls">
                <img
                  src={`${item.CloseIcon}`}
                  alt="close"
                  onClick={() => overlayToLayout(false)}
                />
              </div>
              <div className="overlay_contain">
                {/* 左區塊開始 */}
                <div className="contain_left">
                  <img className="contain_photo" src={`${item.photo}`} alt="" />
                  <div className="contain_btn">
                    <Smallicon className="Smallicon btn" />
                    {/* <Bigicon className="Bigicon btn"></Bigicon>
                    <Shareicon className="Shareicon btn"></Shareicon> */}
                  </div>
                  <img
                    className="contain_photo"
                    src={`${item.infoslogan}`}
                    alt=""
                  />

                  <div className="content_history">
                    <h4>學歷</h4>
                    {item.educational.map((editem, index) => (
                      <p key={index}>{editem}</p>
                    ))}
                    <h4>經歷</h4>
                    {item.experience.map((exitem, index2) => (
                      <>
                        <p key={index2}>{exitem[0]}</p>
                        <p className="p_year">{exitem[1]}</p>
                      </>
                    ))}
                  </div>
                </div>
                {/* 右區塊開始 */}
                <div className="contain_right">
                  <div className="content_battle">
                    <h4>戰力指數</h4>
                  </div>
                  <div className="contain_slogan">
                    {item.quotes.map((quitem, index) => (
                      <div
                        key={index}
                        className="slogan_triangle"
                        style={{
                          backgroundImage: `url(${item.triangle})`,
                        }}
                      >
                        {quitem}
                      </div>
                    ))}
                  </div>

                  <img
                    className="battle_photo"
                    src={`${item.battle}`}
                    alt="battle_tasi"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default overlayWin;
