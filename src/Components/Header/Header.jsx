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
          <div className="header__logo">
            <h1 className="header__title">Nodir Pulatov</h1>
          </div>

          <div className="header__dev">
            
            <button
              onClick={() => changeLanguage("eng")}
              className="header__link lang"
            >
              ENG{" "}
              <svg
                width="20"
                height="20"
                viewBox="0 0 81 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5136_23060)">
                  <path
                    d="M0.0859375 0.177734H80.0859V60.1777H0.0859375"
                    fill="#BD3D44"
                  />
                  <path
                    d="M0.0859375 7.08984H80.0859ZM0.0859375 16.3023H80.0859ZM0.0859375 25.5523H80.0859ZM0.0859375 34.8023H80.0859ZM0.0859375 44.0523H80.0859ZM0.0859375 53.3023H80.0859Z"
                    fill="black"
                  />
                  <path
                    d="M0.0859375 7.08984H80.0859M0.0859375 16.3023H80.0859M0.0859375 25.5523H80.0859M0.0859375 34.8023H80.0859M0.0859375 44.0523H80.0859M0.0859375 53.3023H80.0859"
                    stroke="white"
                    stroke-width="4.625"
                  />
                  <path
                    d="M0.0859375 0.177734H45.6859V32.4902H0.0859375"
                    fill="#192F5D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5136_23060">
                    <rect
                      width="80"
                      height="60"
                      fill="white"
                      transform="translate(0.0859375 0.177734)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              onClick={() => changeLanguage("rus")}
              className="header__link lang"
            >
              RU
              <svg
                width="21"
                height="21"
                viewBox="0 0 81 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5136_23070)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.265625 0.269531H80.2656V60.2695H0.265625V0.269531Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.265625 20.2695H80.2656V60.2695H0.265625V20.2695Z"
                    fill="#0039A6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.265625 40.2695H80.2656V60.2695H0.265625V40.2695Z"
                    fill="#D52B1E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5136_23070">
                    <rect
                      width="80"
                      height="60"
                      fill="white"
                      transform="translate(0.265625 0.269531)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            
          </div>
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
              <button className="header__btn" type="submit">
                {t("btn")}
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </header>
  );
};

export default Header;
