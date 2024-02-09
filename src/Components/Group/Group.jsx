import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import mnSoft from "../../assets/mn-soft.png";
import mnSolutions from "../../assets/mn-solution.png";
import sekuit from "../../assets/sekuit.jpg";
import Navin from "../../assets/logo2.png";
import Pba from "../../assets/PBAbiznes.jpg";
import sss from "../../assets/sss.jpg";
import anor from "../../assets/logo3.png";

import { Autoplay, Pagination } from "swiper/modules";
import "./Group.scss";
const Group = () => {
  return (
    <section className="group">
      <div className="group__wrapper">
        <div className="group__title">
          <h2>Group Of Companies</h2>
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
              <img src={mnSoft} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://mn-solutions.uz/">
              <img src={mnSolutions} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://sekuit.uz/">
              <img src={sekuit} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://navin.uz/">
              <img src={Navin} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://pbabiznes.uz/">
              <img src={Pba} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://en-gy.ru/">
              <img src={sss} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a href="https://anorlevel.uz/">
              <img src={anor} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://mn-soft.uz/">
              <img src={mnSoft} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://mn-solutions.uz/">
              <img src={mnSolutions} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://sekuit.uz/">
              <img src={sekuit} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://navin.uz/">
              <img src={Navin} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://pbabiznes.uz/">
              <img src={Pba} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://en-gy.ru/">
              <img src={sss} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <a target="_blank" href="https://anorlevel.uz/">
              <img src={anor} alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Group;
