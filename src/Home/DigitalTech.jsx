import React, { Component } from "react";
import "../Home/HomeCSS/digitaltech.css";
//Sign up Section
import signUpImage from './HomeImages/Body1Images/signUpImage.png';

export class DigitalTech extends Component {
  render() {
    return (
      <div>
        <section id="signUp">
          <div className="row">
            <div className="col-lg-6">
              <img class="signUpImage" src={signUpImage} alt="signUp" />
            </div>
            <div className="col-lg-6">
              <div className="signUpCaption">
                <h1 className="waiting">What are you waiting for?</h1>
                <p className="signUpParagraph-1">
                  Start teaching Digital Technologies<br></br>today
                </p>
                <p className="signUpParagraph-2">
                  If you need more information, we are happy to answer<br></br>
                  any questions you may have.
                </p>
                <div className="signUpButtons">
                  <button className="buttonLeft btn-outline-primary">
                    ENQUIRE NOW
                  </button>
                  <button className="buttonRight btn-outline-danger">
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DigitalTech;
