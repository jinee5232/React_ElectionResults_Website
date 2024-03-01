import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/mapppage.css";
import Votelist from "../components/votelist";

const MapPage = () => {
  let [mapiframe, setMapiframe] = useState("https://plotdb.io/v/chart/34089");
  let [candidatename, setCandidatename] = useState("蔡英文");
  let [namecolor, setNamecolor] = useState({ color: "#1b9431" });
  let [percentage, setPercentage] = useState({
    width: "100%",
    background: "#1b9431",
  });
  let [vote, setVote] = useState("8,170,231");

  const changeMapblue = () => {
    setMapiframe("https://plotdb.io/v/chart/34088");
    setCandidatename("韓國瑜");
    setNamecolor({ color: "#000095" });
    setVote("5,522,119");
    setPercentage({ width: "67.59%", background: "#000095" });
  };
  const changeMapgreen = () => {
    setMapiframe("https://plotdb.io/v/chart/34089");
    setCandidatename("蔡英文");
    setNamecolor({ color: "#1b9431" });
    setVote("8,170,231");
    setPercentage({ width: "100%", background: "#1b9431" });
  };
  const changeMaporange = () => {
    setMapiframe("https://plotdb.io/v/chart/34083");
    setCandidatename("宋楚瑜");
    setNamecolor({ color: "#ff6310" });
    setVote("608,590");
    setPercentage({ width: "13%", background: "#ff6310" });
  };

  return (
    <div id="main">
      <div id="content">
        {/* 左邊的卡片  start */}
        <div id="voteCard">
          <div id="cardContent">
            {/* ↓地圖塞這裡↓ */}
            <div id="cardMap">
              <iframe
                className="mapgreen"
                src={mapiframe}
                width="100%"
                height="110%"
                allowfullscreen="true"
                frameborder="0"
              ></iframe>
            </div>
            {/* 地圖下面的東西 start */}
            <div id="cardVotes">
              {/* ↓地名+投票率↓ */}
              <div id="placeName">
                <h4>台灣</h4>
                <p>投票率74.9%</p>
              </div>
              {/* ↓候選人名字+得票數↓ */}

              <div id="candidate">
                <div>
                  <h5 style={namecolor}>{candidatename}</h5>
                  <div id="imgSeal"></div>
                </div>
                <p>得票數{vote}</p>
              </div>
              {/* ↓那條%數↓ */}
              <div id="voteRate">
                {/* ↓長條圖塞這裡↓  */}
                <div id="barChart" style={percentage}></div>
                <div className="barContent">
                  <p style={{ width: "33%" }}>57.1%</p>
                  <p style={{ width: "56%" }}>38.6%</p>
                  <p style={{ width: "10%" }}>4.3%</p>
                </div>
              </div>

              {/* ↓開票狀態↓ */}
              <div id="voteStatus">
                <p>未開票</p>
              </div>
              {/* ↓政黨顏色小科普↓ */}
              <div id="partyColor">
                <div id="Green_dom" onClick={changeMapgreen}>
                  <div className="partySquare" id="squareColor1"></div>
                  <p>民進黨</p>
                </div>
                <div id="Blue_dom" onClick={changeMapblue}>
                  <div className="partySquare" id="squareColor2"></div>
                  <p>國民黨</p>
                </div>
                <div id="Orange_dom" onClick={changeMaporange}>
                  <div className="partySquare" id="squareColor3"></div>
                  <p>親民黨</p>
                </div>
              </div>
            </div>
            {/* 地圖下面的東西 end  */}
          </div>
        </div>
        {/* 左邊的卡片  end */}

        <Votelist />
      </div>
    </div>
  );
};

export default MapPage;
