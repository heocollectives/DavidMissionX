import React from 'react';
import './sideDrawer.css';
import CheckBox from './checkBox';

function actityType() {
    return(
        <div className="activity-type">
        <div className="title">
            <h1>ACTIVITY TYPE</h1>
            <hr></hr>
        </div>
        <div className="checkbox">
        <CheckBox/><p className="label">Animation</p>
        </div>
        <div className="checkbox">
        <CheckBox/><p className="label">Game</p>
        </div>
        <div className="checkbox">
        <CheckBox/><p className="label">Chatbot</p>
        </div>
        <div className="checkbox">
        <CheckBox/><p className="label">Augmented Reality</p>
        </div>
    </div>
    );
}

export default actityType;