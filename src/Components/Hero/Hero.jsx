import React, { useEffect, useState } from "react";
import "./Hero.scss";
import man from '../../assets/man.png'
import { useTranslation } from "react-i18next";
const Hero = () => {
  const {t}=useTranslation()

  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollValue = window.scrollY;
      setScrollValue(currentScrollValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  const backgroundOpacity = Math.min(scrollValue / 300, 1);

  useEffect(() => {
    document.body.style.backgroundColor = `rgb(0, 0, 0, ${backgroundOpacity})`;
    
    return () => {
      document.body.style.backgroundColor = "initial";

    };
  }, [backgroundOpacity]);

  const handleSectionEnd = () => {
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = "white";
    setTimeout(() => {
      document.body.style.transition = "initial";
      document.body.style.color = "white"
    }, 500);
  };

  return (
    
    <div className="hero" onScroll={handleSectionEnd}>
      <div className="container">
        <div className="hero__wrapper">
          {/* <div className="hero__left">
            <img src={man} alt="" />
          </div> */}
          <div className="hero__right">
          <div className="hero__top">
            <p className={ !scrollValue ? "hero__text" : 'hero__text white'}>{t("name")} </p>
            <h2 className={!scrollValue ? "hero__title" : "hero__title white"}>{t("fam")}</h2>
          </div>
          <div className="hero__content">
            <p className={!scrollValue ? "hero__text-btm" : "hero__text-btm white"}>
              {t("own")}
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
