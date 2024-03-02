import React, { useRef, useState } from "react";
// import { EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.mjs";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "../styles/carousel.css";
import "swiper/css/pagination";
import {
  EffectCards,
  Autoplay,
  Navigation,
  Pagination,
  Controller,
} from "swiper/modules";
const carousel = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  // Initialize Swiper
  // var mySwiper1 = new Swiper(".mySwiper1", {
  //   effect: "cards",
  //   grabCursor: true, // 屬標覆蓋Swiper時變成手掌形狀，拖動時變成抓手形狀。
  //   loop: true,
  //   allowTouchMove: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   autoplay: {
  //     delay: 3000,
  //     pauseOnMouseEnter: true,
  //   },
  // });

  // var mySwiper2 = new Swiper(".mySwiper2", {
  //   grabCursor: true,
  //   loop: true,
  //   allowTouchMove: true,
  //   currentClass: "swiper-pagination-current",
  //   controller: {
  //     control: mySwiper1,
  //   },
  // });

  // mySwiper1.controller.control = mySwiper2;
  return (
    <div>
      <div className="swiper-container">
        <img
          className="left-rect"
          src={url("../assets/homepage/left_rectangle.png")}
          alt=""
        />
        {/* Swiper 1 */}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Navigation, Pagination, Autoplay, Controller]}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          className="mySwiper1"
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide sShadow">
              <img
                src={url("../assets/homepage/cadicate_T2.png")}
                alt=""
                onclick="open01()"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide sShadow">
              <img
                src={url("../assets/homepage/cadicate_H2.png")}
                alt=""
                onclick="open02()"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide sShadow">
              <img
                src={url("../assets/homepage/cadicate_S2.png")}
                alt=""
                onclick="open03()"
              />
            </SwiperSlide>

            {/* Navigation buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </Swiper>
        <Swiper
          className="mySwiper2 slogan"
          modules={[Controller]}
          loop={true}
          grabCursor={true}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
        >
          {/*Swiper 2 */}

          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <img src={url("../assets/homepage/slogan_1.png")} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={url("../assets/homepage/slogan_2.png")} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={url("../assets/homepage/slogan_3.png")} alt="" />
            </SwiperSlide>
          </div>

          <img
            className="right-rect"
            src={url("../assets/homepage/right_rectangle.png")}
            alt=""
          />
        </Swiper>
      </div>
    </div>
  );
};

export default carousel;
