import React from 'react'
import './Request.scss'
import axios from 'axios';
import { useState } from 'react';
import { info } from "sass";
const Request = () => {
    
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
        // Additional actions upon subscription, if needed
      }
    };
  return (
    <section className='req'>
        <div className="container">
            <div className="req__wrapper">
            <div className="req__letter">
            <form onSubmit={subscribeHandler}>
              <input
              className="req__text name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                className="req__text tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="text"
                className="req__text info"
                placeholder="Describe Your Proposal In More Detail"
                value={Info}
                onChange={(e) => setInfo(e.target.value)}
              />
              <button className="req__btn" type="submit">Subscribe</button>
            </form>
          </div>
            </div>
        </div>
    </section>
  )
}

export default Request