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

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "./Group.scss";
const Group = () => {
  return (
    <section className="group">
      <div className="group__wrapper">
        <div className="group__title">
          <h2>Group Of Companies</h2>
          <Swiper
            spaceBetween={10}
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
              <img src={mnSoft} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={mnSolutions} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={sekuit} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={Navin} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={Pba} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={sss} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={anor} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Group;
