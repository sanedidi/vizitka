import { t } from "i18next";
import "./About.scss";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t}=useTranslation()
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__top">
            <h2> {t("link3")}</h2>
          </div>
          <div className="about__title">
            <h2>
                    <span>Lorem  .</span>    {t("lorem")}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
