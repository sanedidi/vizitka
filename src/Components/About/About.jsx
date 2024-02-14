import "./About.scss";
import { useState, useEffect, useRef } from "react";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__top">
            <h2>About Me</h2>
          </div>
          <div className="about__title">
            <h2>
                    <span>Lorem  .</span>           Welcome! I'm Pulatov Nodir  Alimdjanovich, an experienced entrepreneur dedicated to
              driving innovation and achieving excellence in business. With a
              passion for collaboration and a commitment to making a positive
              impact, I've successfully led ventures across various industries.
              Join me as we push boundaries and redefine what's possible. Thanks
              for visiting!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
