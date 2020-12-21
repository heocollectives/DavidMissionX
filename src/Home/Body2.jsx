// eslint-disable-next-line
import React from 'react';
import '../Home/HomeCSS/Body2.css';
import MainImage from './Body2Images/Group 1.png';


function Body2() {
        return (
            <div>
                 <div className="teach-body">
            <h3 className="upper-title">Teaching kids programming and digital skills is <em>MORE</em> than just writing code.</h3>

            <div className="flexContainer">
                <div className="kids-image"> 
                    <img className="MainImage" src={MainImage} alt="logo"/>
                    <h2 className="bottom-title">How our programme helps teachers and schools</h2>
                </div>
            </div>
            </div>
            </div>
        )
    }

export default Body2;
