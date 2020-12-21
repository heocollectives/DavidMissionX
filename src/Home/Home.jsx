// eslint-disable-next-line
import React, { useState } from "react";
import "../Home/HomeCSS/HomeMain.css";
import { BrowserRouter as Router } from "react-router-dom";
// Material UI Imports
import Modal from "@material-ui/core/Modal";
//External Components
import Body1 from './Body1';
import Body2 from "./Body2";
import DigitalTech from './DigitalTech';
import KeyComp from './Key';
import Footer from './Footer';
// Image Imports
import photo from "./HomeImages/Star Logo 07-2.png";
import flag1 from "./HomeImages/Maori flag.png";
import flag2 from "./HomeImages/NZ Flag.png";
import user from "./HomeImages/Main/profile.png";
import PrepYoung from "./HomeImages/Main/Group 4.png";
import buttonGroup from './HomeImages/Main/Group 2.png';


import { Teacher, Student } from "./Login-Signup";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClick = () => {
    if (open === true) {
      setOpen(false);
      setOpen2(true);
    } else if (open2 === true) {
      setOpen2(false);
      setOpen(true);
    }
  };

  return (
    <div>
      <Modal open={open} onBackdropClick={handleClose}>
        <Teacher
          handleClick={handleClick}
          handleClose={handleClose}
          onBackdropClick={handleClose} />
      </Modal>

      <Modal open={open2} onBackdropClick={handleClose}>
        <Student
          handleClick={handleClick}
          handleClose={handleClose}
          onBackdropClick={handleClose} />
      </Modal>

      <div className="topNav">
        <Router>
          <div className="logo">
            <img className="img-main" src={photo} alt="logo" />
          </div>
          <div className="navLinks">
            <ul>
              <a href="" className="navBar-link" target="blank" rel="navlink">
                <li>Home</li>
              </a>
              <a href="" className="navBar-link mid-link">
                <li>Features</li>
              </a>
              <a href="" className="navBar-link">
                <li>Teachers</li>
              </a>
            </ul>
          </div>
          <div className="sign">
            <div className="langDiv">
              <p className="langNav">LANG</p>
                <img className="img-flag" src={flag2} alt="logo" />
                <img className="img-flag" src={flag1} alt="logo" />
            </div>
            <div className="modalbuttons">
              <img className="usericon" src={user} alt="logo" />
              <button className="modalOpenButtons" onClick={handleOpen}>
                SIGN UP
              </button>
              |{" "}
              <button className="modalOpenButtons" onClick={handleOpen2}>
                LOG IN
              </button>
          </div>
          </div>
        </Router>
      </div>

      <div className="header">
        <img className="prep-young" src={PrepYoung} alt="header" />
      </div>
         <Body1 />
         <Body2 />
      <img className="buttongroups" src={buttonGroup} alt="buttons" />
          <KeyComp />
          <DigitalTech />
          <Footer />
    </div>
  );
};

export default Home;
