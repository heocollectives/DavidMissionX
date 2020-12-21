import React, { useState } from 'react';
import './sidebar.css';
//External Imports
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './sidebar.css';
import { IconContext } from 'react-icons';


function NavbarSidebar() {
    const [sidebar, setSidebar] = useState(false); //false = not showing

    const showSidebar = () => setSidebar(!sidebar); //reverse true/false values when onClick runs

    return (
        <div>
            <IconContext.Provider value={{ color: '#ffff' }}>
            <div className="sidebar-active">
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> 
                <ul className='nav-menu-items' onClick={showSidebar}>
                 {SidebarData.map((SidebarItem, index) => {
                    return (
                <li key={index} className={SidebarItem.cName}>   
                         {SidebarItem.profile}
                <Link to={SidebarItem.path}>
                         {SidebarItem.icon}
                        <span>{SidebarItem.title}</span>
                </Link>
                </li>
                );
            })}
            <div className="toggleArrowLeft">
                <Link to='#' className='menu-bars'>
            <IconContext.Provider value={{ color:"#F92D8E", size: '4rem'}}>
                <IoIcons.IoMdArrowDropleft />
            </IconContext.Provider>
                </Link>
            </div>
            <div className="footerIcons-active">
                    <IconContext.Provider value={{ color:"#ffff", size:'15px'}}>
                    <div className="footer-holder">
                        <CgIcons.CgProfile />
                        <h1>Profile</h1>
                    </div>
                    <div className="footer-holder">
                        <RiIcons.RiSettings3Fill />
                        <h1>Settings</h1>
                    </div>
                    <div className="footer-holder">
                        <FiIcons.FiLogOut />
                        <h1>Log out</h1>
                    </div>
                        </IconContext.Provider>
                    </div>
                </ul>
            </nav>
            <div className="sidepanel">
                 {SidebarData.map((SidebarItem, index) => {
                     return (
                 <li key={index} className={SidebarItem.altName}>
                     {SidebarItem.profile}
                 <Link to={SidebarItem.path}>
                    {SidebarItem.icon}
                </Link>
                </li>
                );
            })}
            </div>
            <div className="toggleArrow">
            <Link to='#' className='menu-bars'>
            <IconContext.Provider value={{ color:"#F92D8E", size: '4rem'}}>
                <IoIcons.IoMdArrowDropright onClick={showSidebar}/>
            </IconContext.Provider>
            </Link>
            </div>
            <div className="footerIcons">
                <IconContext.Provider value={{ color:"#ffff", size:'20px'}}>
                <CgIcons.CgProfile /><br></br>
                <RiIcons.RiSettings3Fill /><br></br>
                <FiIcons.FiLogOut /><br></br>
            </IconContext.Provider>
                </div>
            </div>
            </IconContext.Provider>
        </div>
        
    );
}

export default NavbarSidebar;

