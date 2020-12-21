/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './teacherProjects.css';
import Image1 from './scratch-images-teacher/row2/Project 02.png';
import Image2 from './scratch-images-teacher/row2/Project 05.png';
import Image3 from './scratch-images-teacher/row2/Project 08.png';
import Image4 from './scratch-images-teacher/row2/Project 11.png';
import Image5 from './scratch-images-teacher/row2/Project 14.1.png';

function scratchImage2() {
    return (
        <div className="second-row-images">
            <div className="scratch-image">
            <img class="image" src={Image1} alt="first-image" />
            <h2>My Birthday</h2>
            <p>BEGINNER | Animation</p>
            </div>
            <div className="scratch-image">
            <img class="image" src={Image2} alt="second-image" />
            <h2>The bear and the monkey</h2>
            <p>BEGINNER | Animation</p>
            </div>
            <div className="scratchImage">
            <img class="image" src={Image3} alt="third-image" />
            <h2>I am here!</h2>
            <p>BEGINNER | Animation</p>
            </div>
            <div className="scratch-image">
            <img class="image" src={Image4} alt="fourth-image" />
            <h2>Penguin in a Desert</h2>
            <p>BEGINNER | Animation</p>
            </div>
            <div className="scratch-image">
            <img class="image" src={Image5} alt="fifth-image" />
            <h2>The Lion and the <br></br>
                Mouse Part 1</h2>
            <p>BEGINNER | Animation</p>
            </div>
            </div>

        
    );
}

export default scratchImage2;