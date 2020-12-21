import React from 'react'
import * as IoIcons from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import '../ProgressTracker/progressTracker.css';
import StudentHelp from './Group 3.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavbarSidebar from '../SideBar/NavbarSidebar';


function helpRequest() {
        return (
            <IconContext.Provider value={{ size: '28px' }}>
            <div className="project">
                <Header />
            <div className="sidebar">
                <NavbarSidebar />
            </div>
            <div className="body">
                <div className="background-layer">
                    <h2>HELP REQUESTS</h2>
                    <p classname="sidetext"><IoIcons.IoCheckmarkSharp/> MARK AS DONE</p> 
                    <p classname="sidetext"><IoIcons.IoArrowUndoSharp/> REPLY</p>
                <img class="students"
                     src={StudentHelp}
                     alt="student-assist"/>
                </div>  
                </div>
            <div className="footer">
                <Footer />
                </div>    
            </div>
            </IconContext.Provider>
         
        );
}
export default helpRequest;