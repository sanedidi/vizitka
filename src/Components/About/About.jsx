import "./About.scss";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [sectionEntered, setSectionEntered] = useState(false);

  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollValue = window.scrollY;
      setScrollValue(currentScrollValue);

      const aboutRect = aboutRef.current.getBoundingClientRect();
      const isSectionVisible = aboutRect.top <= window.innerHeight;

      if (isSectionVisible && !sectionEntered) {
        setSectionEntered(true);
        document.body.style.transition = "background-color 1s all ease-in";
        document.body.style.backgroundColor = "white";
      } else if (!isSectionVisible && sectionEntered) {
        setSectionEntered(false);
        document.body.style.transition = "background-color 0.5s ease";
        document.body.style.backgroundColor = "black";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.transition = "initial";
    };
  }, [sectionEntered]);

  const backgroundOpacity = Math.min(scrollValue / 300, 1);

  useEffect(() => {
    if (!sectionEntered) {
      document.body.style.backgroundColor = `rgba(0, 0, 0, ${backgroundOpacity})`;
    }

    return () => {
      if (!sectionEntered) {
        document.body.style.backgroundColor = "white";
      }
    };
  }, [backgroundOpacity, sectionEntered]);

  return (
    <section className="about" ref={aboutRef}>
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
