// eslint-disable-next-line
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Home/HomeCSS/LoginSignup.css';
// Internal Imports
import studentSection from './LoginSignupImages/Students.png';
import teacherSection from './LoginSignupImages/teacher.png';
// External Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const Teacher = ({ handleClose, handleClick }) => {

    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [email, setEmail] = useState("");

    const signup = () => {
        var formData = new FormData();
        formData.append('userName', userName);
        formData.append('passWord', passWord);
        formData.append('email', email);
        const url = "http://localhost:3001/register"

        fetch(url, {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }


    return (
        <div className="modal-wrapper">
            <div className="modal-leftside">
                <img className="loginPic" src={studentSection} alt="signinPic" />
                <h1 className="modal-title">STUDENTS</h1>
                <h3 className="modal-context-inactive" onClick={handleClick}>LOG IN</h3>
                <h3 className="modal-context-active">SIGN UP</h3>
                <form>
                    <input className="modal-input" type="text" name="fullName" placeholder="FullName" />
                    <br />
                    <input className="modal-input" type="emailaddress" name="email" placeholder="Email Address" />
                    <br />
                    <input className="modal-input" type="password" name="password" placeholder="Password" />
                    <br />
                    <input className="modal-input" type="confirm password" name="confirm" placeholder="Confirm Password" />
                </form>

                <button className="signinButton" variant="contained">SIGN UP</button>
            </div>
            <div className="modal-rightside">
                <FontAwesomeIcon onClick={handleClose} className="fontAwesomeCross" icon={faTimes} size="2x" />
                <img className="loginPic" src={teacherSection} alt="signinPic" />
                <h1 className="modal-title">TEACHER</h1>
                <h3 className="modal-context-inactive" onClick={handleClick}>LOG IN</h3>
                <h3 className="modal-context-active">SIGN UP</h3>

                <form>
                    <input className="modal-input" type="text"
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                        name="fullName" placeholder="FullName" />
                    <br />
                    <input className="modal-input" type="emailaddress" name="email" placeholder="Email Address" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                    <br />
                    <input className="modal-input" type="password"
                        onChange={(e) => {
                            setPassWord(e.target.value);
                        }}
                        name="password" placeholder="Password" />
                    <br />
                    <input className="modal-input" type="confirm password" name="confirm" placeholder="Confirm Password" />
                </form>

                <button onClick={signup} className="signinButton" variant="contained">SIGN UP</button>

            </div>
        </div>
    )
}

const Student = ({ handleClose, handleClick }) => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassWord, setLoginPassWord] = useState("");

    const login = () => {
        var formData = new FormData();
        formData.append('email', loginEmail);
        formData.append('passWord', loginPassWord);
        const url = "http://localhost:3001/register"

        fetch(url, {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }


    return (

        <div className="modal-wrapper">
            <div className="modal-leftside">
                <img className="loginPic" src={studentSection} alt="signinPic" />
                <h1 className="modal-title">STUDENTS</h1>
                <h3 className="modal-context-active2">LOG IN</h3>
                <h3 className="modal-context-inactive" onClick={handleClick}>SIGN UP</h3>
                <form>
                    <input className="modal-input" type="emailaddress" name="email" placeholder=" Email Address" />
                    <br />
                    <input className="modal-input" type="password" name="password" placeholder=" Password" />
                    <br />
                </form>

                <button className="signinButton" variant="contained">LOG IN</button>
            </div>
            <div className="modal-rightside">
                <FontAwesomeIcon onClick={handleClose} className="fontAwesomeCross" icon={faTimes} size="2x" />
                <img className="loginPic" src={teacherSection} alt="signinPic" />
                <h1 className="modal-title">TEACHER</h1>
                <h3 className="modal-context-active2">LOG IN</h3>
                <h3 className="modal-context-inactive" onClick={handleClick}>SIGN UP</h3>

                <form>
                    <input className="modal-input" type="emailaddress" name="email" placeholder="EmailAddress" onChange={(e) => {
                        setLoginEmail(e.target.value);
                    }} />
                    <br />
                    <input className="modal-input" type="password" name="password" placeholder="Password" onChange={(e) => {
                        setLoginPassWord(e.target.value);
                    }} />
                    <br />
                </form>

                <NavLink to="/teacherside"><button className="signinButton" variant="contained" onClick={login}>LOG IN</button></NavLink>

            </div>
        </div>
    )
}

export { Teacher, Student };
