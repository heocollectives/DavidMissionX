import React, { Component } from 'react'
import '../ProgressTracker/progressTracker.css';
//External Imports
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavbarSidebar from '../SideBar/NavbarSidebar';
import StudentProfile from './Group 2.png';

export class studentProfiles extends Component {
    render() {
        return (
            <div className="project">
                <Header />
            <div className="sidebar">
                <NavbarSidebar />
            </div>
            <div className="body">
                <div className="background-layer">
                <img class="student-profiles"
                 src={StudentProfile}
                 alt="profileImage" />
                </div>
                </div>
            <div className="footer">
                <Footer />
            </div>
            </div>
        )
    }
}

export default studentProfiles
