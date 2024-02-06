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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sapiente repellat ad maxime doloremque sunt, cumque sint porro
              tenetur dolor ipsa perspiciatis pariatur corrupti autem possimus
              maiores saepe cupiditate impedit doloribus inventore similique
              quisquam quod! At vitae tempora iusto alias voluptatibus voluptate
              quidem accusantium quibusdam, adipisci, ex ea corrupti!
              Voluptatibus?
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
