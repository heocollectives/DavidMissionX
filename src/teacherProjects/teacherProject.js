import React from 'react';
import './teacherProjects.css';
import NavBar from '../ProjectBuilder1 - Teacher/Header/Header';
import Footer from '../Home/Footer'
import Contents from './scratchGrid';



function teacherProjects() {
    return (
        <div>
        <div section id="Main">
            <NavBar />
            </div>
            <div className="body">
            <h1 className="projects">PROJECTS</h1>
            <p className="library">
            Welcome to the project. You can use the filters on the right to help you search for specific projects.
            </p>
            <div className="projects-content">
            <Contents />
            </div>
            </div>
            <div className="Footer">
            <Footer />
            </div>
            </div>
    );
}
export default teacherProjects;