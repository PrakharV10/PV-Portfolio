import React from 'react'
import '../../App.css'
import 'font-awesome/css/font-awesome.min.css';
import profilePic from '../images/IMG_20200224_205539.jpg';

const Header = () => {
    return (
        <div className="sidebar">
            <div className="contents">
                <center>
                    <img src={profilePic} alt="Profile-Pic" id="profile-pic" />
                    <h3>Prakhar <span>Varshney</span></h3>
                </center>
                <div className= "headings">
                    <a href="#home"><i clas="fa fa-home" aria-hidden="true"></i><span>Home</span></a>
                    <a href="#about"><i clas="fa fa-user" aria-hidden="true"></i><span>About Me</span></a>
                    <a href="#skills"><i clas="fa fa-file-code-o" aria-hidden="true"></i><span>Skills</span></a>
                    <a href="#project"><i clas="fa fa-briefcase" aria-hidden="true"></i><span>Projects</span></a>
                    <a href="#blog"><i clas="fa fa-book" aria-hidden="true"></i><span>Blogs</span></a>
                    <a href="#contact"><i clas="fa fa-phone" aria-hidden="true"></i><span>Contact</span></a>
                </div>
            </div>

            <div className="contact-info">
                <a href="https://prakhar10varshney.netlify.app/index.html" target = "_blank" rel="noreferrer"><i className="fa fa-globe" id = "website" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/Prakhar10V" target = "_blank" rel="noreferrer"><i className="fa fa-twitter" id="twitter" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/PrakharV10" target = "_blank" rel="noreferrer"><i className="fa fa-github" id="git" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/prakhar-varshney-6b3a92181/" target = "_blank" rel="noreferrer"><i className="fa fa-linkedin" id = "linkedin" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}

export default Header
