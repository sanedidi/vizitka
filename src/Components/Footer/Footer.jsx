import React from "react";
import "./Footer.scss";
import Request from "../Tgrequest/Request";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <h2 className="footer__title">
            We develop digital future Let's Talk
          </h2>
          <div className="footer__links">
            <a href="#" className="footer__link">
              Home
            </a>
            <a href="#" className="footer__link">
              Services
            </a>
            <a href="#" className="footer__link">
              About
            </a>
            <a href="#" className="footer__link">
              Shop
            </a>
            <a href="#" className="footer__link">
              Contacts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
