import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination } from "swiper/modules";

import "../Group/Group";
import smart from "./../../assets/smart4.png";
import rusiem from "./../../assets/rusiem.png";
import seceom from "./../../assets/seceon.png";
import ivideon from "./../../assets/ivideon.png";
import engy from "./../../assets/engy.png";
import fabit from "./../../assets/fabit.png";
import gs from "./../../assets/gs.png";
import abHandshake from "./../../assets/abhandshake.jpg";
const Partners = () => {
  return (
    <section className="group">
      <div className="container">
        <div className="group__wrapper">
          <div className="group__title">
            <h2>Our Partners</h2>
          </div>
          <Swiper
            centeredSlides={true}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://mn-soft.uz/">
                <img src={smart} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="">
                <img src={rusiem} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://seceom.uz/">
                <img src={seceom} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://ivideonbiznes.uz/">
                <img src={engy} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://en-gy.ru/">
                <img src={fabit} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a href="https://gslevel.uz/">
                <img src={gs} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://mn-soft.uz/">
                <img src={abHandshake} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://mn-solutions.uz/">
                <img src={rusiem} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://seceom.uz/">
                <img src={seceom} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className="swiper">
              <a target="_blank" href="https://ivideonbiznes.uz/">
                <img src={ivideon} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://en-gy.ru/">
                <img src={fabit} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://gslevel.uz/">
                <img src={gs} alt="" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
