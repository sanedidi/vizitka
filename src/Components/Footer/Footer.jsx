import React from "react";
import "./Footer.scss";
import { t } from "i18next";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p className="footer__rights">2024  {t("rights")}</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
