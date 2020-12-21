import React from 'react';
import CheckBox from './checkBox';
import './sideDrawer.css';

function sideBar() {
    return (
        <div className="sidebar">
        <div className="title">
            <h1>SUBSCRIPTION</h1>
            <hr></hr>
        <div className="checkbox">
        <CheckBox/><p className="label">Free</p>
        </div>
        <div className="checkbox">
        <CheckBox/><p className="label">Premium</p>
        </div>
    </div>
</div>
    );
}

export default sideBar;