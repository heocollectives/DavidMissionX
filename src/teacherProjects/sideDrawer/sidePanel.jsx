import React from 'react';
import './sideDrawer.css';
import SideBar from './SideBar';
import ActivityType from './activityType';
import YearLevel from './yearLevel';
import SubjectMatter from './subjectMatter';

function sidePanel() {
    return (
        <div className="sidePanel">
        <SideBar />
        <ActivityType />
        <YearLevel />
        <SubjectMatter />
        </div>
    );
}

export default sidePanel;