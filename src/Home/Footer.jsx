import React, { Component } from "react";
import "../Home/HomeCSS/Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footerCol">
          <h3 className="footer-style">Company</h3>
          <ul className="footer-style2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="footerDivComp">
          <h3 className="footer-style">Register</h3>
          <ul className="footer-style2">
            <li>Register</li>
            <li>Login</li>
            <li>Projects</li>
            <li>Teachers</li>
            <li>Parents</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="footerDivComp">
          <h3 className="footer-style">Support</h3>
          <ul className="footer-style2">
            <li>FAQS</li>
            <li>Helpdesk</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footerDivComp">
          <h3 className="footer-style">Legal</h3>
          <ul className="footer-style2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footerContent">
          <h3 className="footer-style3">LevelUp Works</h3>
          <p>
            LevelUp Works is an Auckland-based Enterprise dedicated to
            developing game-based learning softward to help teachers in response
            to the New Zealand Digital Technologies & Hangarau Matihiko.
          </p>
          <p>alan@levelupworks.com</p>
          <p>(021) 668 185</p>
        </div>
      </div>
    );
  }
}

export default Footer;
