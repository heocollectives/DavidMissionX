/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './teacherProjects.css';
import Image1 from './scratch-images-teacher/row3/Project 03.png';
import Image2 from './scratch-images-teacher/row3/Project 06.png';
import Image3 from './scratch-images-teacher/row3/Project 09.png';
import Image4 from './scratch-images-teacher/row3/Project 12.png';
import Image5 from './scratch-images-teacher/row3/Project 14.2.png';

function scratchImage3() {
    return (
        <div className="third-row-images">
            <div className="scratch-image">
            <img class="image" src={Image1} alt="first-image" />
            <h2>10 Block Challenge</h2>
            <p>BEGINNER | Animation</p>
            </div>
            <div className="scratch-image">
            <img class="image" src={Image2} alt="second-image" />
            <h2>Debugging</h2>
            <p>BEGINNER | Animation</p>
            </div>
            <div className="scratchImage">
            <img class="image" src={Image3} alt="third-image" />
            <h2>Funny faces</h2>
            <p>BEGINNER | Animation</p>
            </div>
            <div className="scratch-image">
            <img class="image" src={Image4} alt="fourth-image" />
            <h2>Time Travel</h2>
            <p>BEGINNER | Animation</p>
            </div>
            <div className="scratch-image">
            <img class="image" src={Image5} alt="fifth-image" />
            <h2>The Lion and the</h2>
            <p>BEGINNER | Animation</p>
            </div>
        </div>
    );
}

export default scratchImage3;