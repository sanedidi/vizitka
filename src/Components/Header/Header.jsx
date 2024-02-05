import React, { useState } from "react";
import "./Header.scss";

import Drawer from "react-modern-drawer";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import "react-modern-drawer/dist/index.css";
import axios from "axios";

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
    setMenuOpen(false); // Close the burger menu as well
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const token = '6817047605:AAEnX2sc0K_eVzH6qXLFn8OJmALVCx60DiY';
  const chat_id = '-4167825371';
  const apiUrl = 'https://api.telegram.org/bot' + token + '/sendMessage';

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
    if (name.trim() !== '' && phoneNumber.trim() !== '') {
      sendMessage(`Name: ${name}\nPhone Number: ${phoneNumber}`);
      // Clear input values
      setName('');
      setPhoneNumber('');
      // Additional actions upon subscription, if needed
    }
  };


  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

          <div className={`header__links`}>
            <button className="header__link" >Контакты</button>
            <button className="header__link">О себе</button>

          </div>
          <div className="header__logo">
            <h1 className="header__title">Nodir Pulatov</h1>
          </div>
          <div className="header__dev">
          <button className="header__link link" onClick={handleOpen}>
              Сотрудничество
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
              <button className="header__link"  >Контакты</button>
              <button className="header__link">О себе</button>
              <button className="header__link" onClick={handleOpen}>
                Сотрудничество
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
        <div className='newslatter'>
        <form onSubmit={subscribeHandler}>
          <input
            type='text'
            placeholder='Your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='tel'
            placeholder='Phone number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
        </Box>
      </Modal>
      
      
    </header>
  );
};

export default Header;
