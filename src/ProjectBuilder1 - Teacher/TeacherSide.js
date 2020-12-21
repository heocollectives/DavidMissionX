import React from 'react';
import ProgressTracker from './ProgressTracker/progressTracker';
import Header from './Header/Header'; 
import Footer from './Footer/Footer';
import NavbarSidebar from './SideBar/NavbarSidebar';

function TeacherSide() {
    return (
        <div className="project">
            <Header />
        <div className="sidebar">
            <NavbarSidebar />
        </div>
        <div className="body">
           <ProgressTracker />
        </div>
        <div className="footer">
            <Footer/>
            </div>
            </div>
    );
}

export default TeacherSide;
