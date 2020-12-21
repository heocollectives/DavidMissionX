import React from 'react';
import './header.css';
import Buttons from '../Buttons';
import StarLogo from './Star Logo 07-3.png';
import MaoriFlag from './Maori flag.png';
import NZFlag from './NZ Flag.png';

function Header() {
    return(
        <div>
        <div className="header-main">
            <img class="starLogo" src={StarLogo} alt="logo"/>
            <div className="buttons">
       <Buttons />
        </div>
        <div className="flags">
            <img class="maoriFlag" src={MaoriFlag} alt="logo2"/>
            <img class="nzFlag" src={NZFlag} alt="logo3"/>
            </div>
            </div>  
        </div>
    );
}

export default Header; 