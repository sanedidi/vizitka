import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import teoco from '../../assets/teoco.png'
import nokia from '../../assets/nokia.png'
import { Autoplay, Pagination } from "swiper/modules";
import "../Group/Group";
import rusiem from "./../../assets/rusiem.png";
import seceom from "./../../assets/seceon.png";
import ivideon from "./../../assets/ivideon.png";
import engy from "./../../assets/engy.png";
import fabit from "./../../assets/fabit.png";
import gs from "./../../assets/gs.png";
import abHandshake from "./../../assets/abhandshake.jpg";
import { useTranslation } from "react-i18next";
const Partners = () => {
  const {t}=useTranslation()

  return (
    <section className="group">
      <div className="container">
        <div className="group__wrapper">
          <div className="group__title">
            <h2>{t("part")}</h2>
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
              <a target="_blank" href="https://rusiem.com/">
                <img src={rusiem} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://www.seceon.com/">
                <img src={seceom} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://en-gy.ru/">
                <img src={engy} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://www.nokia.com/">
                <img src={nokia} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://fabit.ru/">
                <img src={fabit} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a href="https://www.gi-de.com/en/">
                <img src={gs} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://abhandshake.com/">
                <img src={abHandshake} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://rusiem.com/">
                <img src={rusiem} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://www.seceon.com/">
                <img src={seceom} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://www.teoco.com/">
                <img src={teoco} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className="swiper">
              <a target="_blank" href="https://ru.ivideon.com/">
                <img src={ivideon} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://fabit.ru/">
                <img src={fabit} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <a target="_blank" href="https://www.gi-de.com/en/">
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
