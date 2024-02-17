import React, { useState } from "react";
import "./Header.scss";

import Drawer from "react-modern-drawer";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import "react-modern-drawer/dist/index.css";
import axios from "axios";
import { info } from "sass";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const [showNewLatter, setShowNewLatter] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleCooperationClick = () => {
    setShowNewLatter(true);
  };

  const handleCloseNewLatter = () => {
    setShowNewLatter(false);
    setMenuOpen(false);
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Info, setInfo] = useState("");
  const token = "6817047605:AAEnX2sc0K_eVzH6qXLFn8OJmALVCx60DiY";
  const chat_id = "-4167825371";
  const apiUrl = "https://api.telegram.org/bot" + token + "/sendMessage";

  const sendMessage = (text) => {
    axios.get(apiUrl, {
      params: {
        chat_id: chat_id,
        text: text,
      },
    });
  };

  const subscribeHandler = (e) => {
    e.preventDefault();

    // Check if both name and phoneNumber are not empty
    if (name.trim() !== "" && phoneNumber.trim() !== "" && info.trim() !== "") {
      sendMessage(`Name: ${name}\nPhone Number: ${phoneNumber}\nInfo: ${Info}`);
      // Clear input values
      setName("");
      setPhoneNumber("");
      setInfo("");
    }
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className={`header__links`}>
            <button className="header__link">{t("link")}</button>

          </div>
          <div className="header__logo">
            <h1 className="header__title">Nodir Pulatov</h1>
          </div>
          <div className="header__dev">
            <button className="header__link link" onClick={handleOpen}>
              {t("corp")}
            </button>
          </div>
          <div onClick={toggleDrawer} className="header__burger">
            <span></span>
            <span></span>
            <span className="header__span"></span>
          </div>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="bla bla bla"
            size={"80%"}
          >
            {" "}
            <div className="header__mobile">
              <button onClick={()=> changeLanguage("eng")} className="header__link lang">ENG</button>
            <button onClick={()=> changeLanguage("rus")} className="header__link lang">RU</button>
              <button className="header__link" onClick={handleOpen}>
              {t("link2")}
              </button>
            </div>
          </Drawer>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="newslatter">
            <form onSubmit={subscribeHandler}>
              <input
              className="header__text name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                className="header__text tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="text"
                className="header__text info"
                placeholder="Describe Your Proposal In More Detail"
                value={Info}
                onChange={(e) => setInfo(e.target.value)}
              />
              <button className="header__btn" type="submit">{t("btn")}</button>
            </form>
          </div>
        </Box>
      </Modal>
    </header>
  );
};

export default Header;
