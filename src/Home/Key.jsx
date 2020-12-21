import React, { Component } from 'react';
import '../Home/HomeCSS/key.css';
import KeyComp from './HomeImages/Main/Group 3.png';

export class Key extends Component {
    render() {
        return (
            <div>
        <img className="key-comp" src={KeyComp} alt="header" />
            </div>
        )
    }
}

export default Key;
