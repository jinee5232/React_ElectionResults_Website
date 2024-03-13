import React, { useState, useEffect } from "react";

import moment from "moment";
import "../styles/votelist.css";
import CITY_URL from "../assets/json/area_vote.json";
import Information from "/icon/icon_information.png";
import Refresh from "/icon/icon_refresh.png";
import Search from "/icon/icon_search.png";

const votelist = ({ county, handleSelectedArea }) => {
  const [timer, setTimer] = useState(
    moment(new Date().getTime()).format("YYYY年MM月DD日 HH時mm分ss秒")
  );
  const [selectedArea, setSelectedArea] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [townname, setTownname] = useState([]);
  const [showdata, setShowdata] = useState([]);
  // const [CitydataA, setCitydata] = useState([]);
  const handlecountry = (e) => {
    const getcountryId = e.target.value;

    // setCitydata(getcountryId);
    // console.log(setCitydata);
    document.getElementById("town").value = ""; // 或者您可以將 '' 替換為您想要的預設值
    if (getcountryId !== "") {
      // 尋找縣市有沒有符合，生出列表
      const getStatedata = CITY_URL.find(
        (country) => country.CityName === getcountryId
      ).AreaList;
      const filterData = getStatedata.filter((item) => {
        if (item.area !== undefined) {
          return item;
        }
      });
      // console.log(filterData);
      setTownname(filterData);
      setShowdata(filterData);
      handletown(e);
    } else {
      // 清空townname，顯示所有縣市的數據
      setTownname([]);
      setShowdata(Totaldata2);
    }
    handleSelectedArea(getcountryId);
    // setTownname(null);
  };
  //過濾掉區和鄉undefined

  const handletown = (e) => {
    if (townname !== "") {
      const gettownId = e.target.value;
      const getAreadata = townname.find((item) => item.area === gettownId);

      if (getAreadata !== undefined) {
        setShowdata([getAreadata]);
      }
    }
  };
  // console.log(showdata);

  const RefreshTime = () => {
    setTimer(
      moment(new Date().getTime()).format("YYYY年MM月DD日 HH時mm分ss秒")
    );
  };
  const Totaldata = CITY_URL.map((city) =>
    city.AreaList.find((area) => area.total)
  ).filter(Boolean);
  const Totaldata2 = Totaldata.map((item) => ({
    area: item.total,
    song: item.song,
    han: item.han,
    tsai: item.tsai,
  }));
  useEffect(() => {
    setShowdata(Totaldata2);
    // console.log(Totaldata2);
  }, []);
  //時間更新
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRefresh((r) => r + 1);
      RefreshTime();
    }, 30000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [refresh]);
  // function drawBarChart(){
  //   d3.select('.chart svg').remove();
  useEffect(() => {
    //console.log(county);
    if (county !== null) {
      //console.log(county);
      const getStatedata = CITY_URL.find(
        (country) => country.CityName === county
      ).AreaList;
      const filterData = getStatedata.filter((item) => {
        if (item.area !== undefined) {
          return item;
        }
      });
      setTownname(filterData);
      setShowdata(filterData);
      setSelectedArea(county);
    }
  }, [county]);
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
              value={selectedArea} // 将 selectedArea 作为 value 属性
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
        <div id="sortList" className="scollbar">
          {/* ↓一排長條圖塞這裡↓ */}
          {showdata.map((item, index) => {
            const GT = item.area;
            const Tsai = Number(item.tsai);
            const Han = Number(item.han);
            const Song = Number(item.song);
            // console.log(item.tsai, item.han, item.song);
            // console.log(Tsai, Han, Song);
            const a = ((Tsai / (Tsai + Han + Song)) * 100).toFixed(1) + "%";
            const b = ((Han / (Tsai + Han + Song)) * 100).toFixed(1) + "%";
            const c = ((Song / (Tsai + Han + Song)) * 100).toFixed(1) + "%";
            // console.log(a, b, c);
            return (
              <div key={index} id="listChart">
                <h4>{item.area}</h4>
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
          <img src={Search} alt="" />
        </div>
        <div className="circleOF" id="cRefresh" onClick={RefreshTime}>
          <img src={Refresh} alt="" />
        </div>
        <div id="cScroll"></div>
        <div className="circleOF" id="cInfor">
          <img src={Information} alt="" />
        </div>
      </div>
    </div>
  );
};

export default votelist;
