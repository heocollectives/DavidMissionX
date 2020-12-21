import React, { Component } from 'react'
import '../ProgressTracker/progressTracker.css';
import StudentSubmission from './Group 4.png';
//Externl Imports
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavbarSidebar from '../SideBar/NavbarSidebar';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';

export class ProjectSubmissions extends Component {
    render() {
        return (
            <IconContext.Provider value={{ size: '28px' }}>
            <div className="project">
                <Header />
            <div className="sidebar">
                <NavbarSidebar />
            </div>
            <div className="body">
                <div className="background-layer">
                    <h2>PROJECT SUBMISSIONS</h2>
                    <p classname="sidetext"><IoIcons.IoCheckmarkSharp/> MARK AS COMPLETE PROJECT </p>
                    <p classname="sidetext"><MdIcons.MdFileDownload/> DOWNLOAD FILES</p>
                <img class="students"
                     src={StudentSubmission}
                     alt="student-submission"/>
                </div>      
                </div>
            <div className="foooter">
                <Footer />
            </div>
            </div>
            </IconContext.Provider>
        )
    }
}

export default ProjectSubmissions;
