import React from 'react';
import './sideDrawer.css';
import CheckBox from './checkBox';

function yearLevel() {
    return (
        <div className="yearLevel">
        <div className="title">
            <h1>YEAR LEVEL</h1>
            <hr></hr>
        </div>
        <div className="checkbox">
        <CheckBox/><p className="label">1 - 4</p>
        </div>
        <div className="checkbox">
        <CheckBox/><p className="label">5 - 6</p>
        </div>
        <div className="checkbox">
        <CheckBox/><p className="label">7 - 8</p>
        </div>
        <div className="checkbox">
        <CheckBox/><p className="label">9 - 13</p>
        </div>
    </div>


    );
}
export default yearLevel;