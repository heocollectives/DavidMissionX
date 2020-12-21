import React, { Component } from 'react';
import '../Home/HomeCSS/body1.css';

import rectangleImage from "./HomeImages/Body1Images/Group 2.png";
import lionKing from "./HomeImages/Body1Images/lionKing.png";
import baseball from "./HomeImages/Body1Images/baseball.png";
import cartoon from "./HomeImages/Body1Images/cartoon.png";
import alan from "./HomeImages/Body1Images/alan.png";


export class Body1 extends Component {
    render() {
        return (

<div className="row">
  <div className="col-lg-6">
    <div className="firstBody-container">
      <div className="body1-caption">
        <h1 className="offer">What we offer</h1>
        <p>
          The Creative Problem Solving programme is series of
          digital creation projects aimed to encourage self-
          motivation and student agency, designed by New 
          Zealand’s leading IT industry experts and schools.
        </p>
        <div className="rectangle_section">
          <h2 className="students">What will students create?</h2>
          <img
            class="rectangle-container"
            src={rectangleImage}
            alt="rectangle"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="carousel-container">
      <div
        id="carouselIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-dots carousel-indicators">
          <li
            data-target="#carouselIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
          <li data-target="#carouselIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              class="lionking-slide"
              src={lionKing}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              class="baseball-slide"
              src={baseball}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              class="cartoon-slide"
              src={cartoon}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img class="alan-slide" src={alan} alt="Fourth slide" />
          </div>
        </div>
        <div className="slide-buttons">
          <a
            class="carousel-control-prev"
            href="#carouselIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselIndicators"
            role="button"
            data-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
        )
    }
}

export default Body1;
