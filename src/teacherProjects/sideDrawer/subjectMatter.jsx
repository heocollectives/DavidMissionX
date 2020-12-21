import React from 'react';
import './sideDrawer.css';
import CheckBox from './checkBox';

function subjectMatter() {
    return (
        <div className="subjectMatter">
        <div className="title">
            <h1>SUBJECT MATTER</h1>
        <hr></hr>
        </div>
        <div className="checkbox">
            <CheckBox/><p className="label">Computer Science</p>
        </div>
        <div className="checkbox">
            <CheckBox/><p className="label">Maths</p>
        </div>
        <div className="checkbox">
            <CheckBox/><p className="label">Science</p>
        </div>
        <div className="checkbox">
            <CheckBox/><p className="label">Language</p>
        </div>
        <div className="checkbox">
            <CheckBox/><p className="label">Art</p>
        </div>
        <div className="checkbox">
            <CheckBox/><p className="label">Music</p>
        </div>
    </div>
    );
}

export default subjectMatter;