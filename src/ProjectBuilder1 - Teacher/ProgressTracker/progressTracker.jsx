import React, { Component } from 'react';
import './progressTracker.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import StudentOne from './Group 1.png';
import StudentTwo from './Group 2.png';
import StudentThree from './Group 3.png';
import StudentFour from './Group 4.png';

export class progressTracker extends Component {
    render() {
        return (
            <IconContext.Provider value={{ size: '22px'}}>
            <div className="project">
                <div className="background-layer">
            <div classname="main-heading">
                <br></br>
                <h2>BEGINNER COURSE</h2>
                <p><FaIcons.FaFileExport/>{' '} EXPORT AS SPREADSHEET</p>
            </div>
            <img class="student-image"
                 src={StudentOne}
                 alt="student-1"/>
            <img class="student-image"
                 src={StudentTwo}
                 alt="student-1"/>
            <img class="student-image"
                 src={StudentThree}
                 alt="student-1"/>
            <img class="student-image"
                 src={StudentFour}
                 alt="student-1"/>
                 </div>
                 </div>
                    </IconContext.Provider>
        );
    }
}

export default progressTracker
