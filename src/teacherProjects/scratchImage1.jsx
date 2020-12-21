/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './teacherProjects.css';
import Image1 from './scratch-images-teacher/row1/Project01.png';
import Image2 from './scratch-images-teacher/row1/Project04.png';
import Image3 from './scratch-images-teacher/row1/Project07.png';
import Image4 from './scratch-images-teacher/row1/Project10.png';
import Image5 from './scratch-images-teacher/row1/Project13.png';

function scratchImage() {
    return (
        <div className="first-row-images">
            <div className="scratch-image">
            <img class="image" src={Image1} alt="first-image" />
            <h2>Introduction</h2>
            <p>BEGINNER | Animation</p>
            </div>
            <div className="scratch-image">
            <img class="image" src={Image2} alt="second-image" />
            </div>
            <h2>Build a brand</h2>
            <p>BEGINNER | Animation</p>
            <div className="scratch-Image">
            <img class="image" src={Image3} alt="third-image" />
            </div>
            <h2>About Me</h2>
            <p>BEGINNER | Animation</p>
            <div className="scratch-image">
            <img class="image" src={Image4} alt="fourth-image" />
            </div>
            <h2>It tickles!</h2>
            <p>BEGINNER | Animation</p>
            <div className="scratch-image">
            <img class="image" src={Image5} alt="fifth-image" />
            <h2>Birthday Card</h2>
            <p>BEGINNER | Animation</p>
            </div>
            </div>

    );
}

export default scratchImage;