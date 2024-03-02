import React, { useState, useEffect } from "react";

import moment from "moment";
import "../styles/votelist.css";
import CITY_URL from "../assets/json/area_vote.json";

const votelist = () => {
  const [timer, setTimer] = useState(
    moment(new Date().getTime()).format("YYYY年MM月DD日 HH時mm分ss秒")
  );
  const [refresh, setRefresh] = useState(0);
  const [townname, setTownname] = useState([]);
  const [showdata, setShowdata] = useState([]);
  const handlecountry = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = CITY_URL.find(
      (country) => country.CityName === getcountryId
    ).AreaList;
    const filterData = getStatedata.filter((item) => {
      if (item.area !== undefined) {
        return item;
      }
    });
    setTownname(filterData);
    setShowdata(filterData);
  };
  //過濾掉undefined
  const filterData = townname.filter((item) => {
    if (item.area !== undefined) {
      return item;
    }
  });

  const handletown = (e) => {
    const gettownId = e.target.value;
    const getAreadata = filterData.find((item) => item.area === gettownId);

    if (getAreadata.han !== undefined) {
      setShowdata([getAreadata]);
    }
  };
  console.log(showdata);

  //時間更新
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRefresh((r) => r + 1);
      setTimer(
        moment(new Date().getTime()).format("YYYY年MM月DD日 HH時mm分ss秒")
      );
    }, 30000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [refresh]);
  // function drawBarChart(){
  //   d3.select('.chart svg').remove();

  //   const
  // }
  // 右邊的列表+按鈕  start
  return (
    <div id="voteList">
      <div id="searchList">
        {/* ↓縣市/鄉鎮下拉式選單↓  */}
        <div id="searchBar">
          <div className="select-area">
            <select
              name="area"
              className="area-town"
              id="area"
              onChange={(e) => handlecountry(e)}
            >
              <option value="">請選擇</option>
              {CITY_URL.map((getcity, index) => (
                <option value={getcity.CityName} key={index}>
                  {getcity.CityName}
                </option>
              ))}
              {/* 渲染縣市選單 */}
            </select>
          </div>
          <div className="select-area town">
            <select
              name="town"
              className="area-town"
              id="town"
              onChange={(e) => handletown(e)}
            >
              <option value="">請選擇</option>
              {/* {townname} */}
              {townname.map((getTown, index) => (
                <option
                  value={getTown.area}
                  className="city-option"
                  key={index}
                >
                  {getTown.area}
                </option>
              ))}
              {/* 渲染鄉鎮市區選單 */}
            </select>
          </div>
        </div>
        {/* ↓放更新時間和頻率↓ */}
        <div id="statusText">
          <p id="refresh-time">
            上次更新時間：{timer} <br />
            倒數下次更新時間：05分00秒
          </p>
        </div>
        <div id="sortList">
          {/* ↓一排長條圖塞這裡↓ */}

          {showdata.map((item, index) => {
            const GT = item.tsai;
            const Tsai = Number(item.tsai);
            const Han = Number(item.han);
            const Song = Number(item.song);
            const a = ((Tsai / (Tsai + Han + Song)) * 100).toFixed(1) + "%";
            const b = ((Han / (Tsai + Han + Song)) * 100).toFixed(1) + "%";
            const c = ((Song / (Tsai + Han + Song)) * 100).toFixed(1) + "%";
            console.log(a, b, c);
            return (
              <div id="listChart">
                <h4 key={index}>{item.area}</h4>
                <div className="nums-vote" id="nums-vote">
                  <div
                    className="chart_green"
                    alt={item.tsai}
                    style={{ width: `${a}` }}
                  ></div>
                  <div className="chart_blue" style={{ width: `${b}` }}></div>
                  <div className="chart_orange" style={{ width: `${c}` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ↓右邊那一列按鈕↓ */}
      <div id="voteListBtn">
        <div className="circleOF" id="cSearch">
          <img src="/icon/icon_search.png" alt="" />
        </div>
        <div className="circleOF" id="cRefresh">
          <img src="/icon/icon_refresh.png" alt="" />
        </div>
        <div id="cScroll"></div>
        <div className="circleOF" id="cInfor">
          <img src={url("../../public/icon/icon_information.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default votelist;
