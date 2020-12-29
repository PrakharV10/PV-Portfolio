import React, {useState} from 'react'
import '../../App.css'
import 'font-awesome/css/font-awesome.min.css';
import profilePic from '../images/IMG_20200224_205539.jpg';
import {headerList} from './headerList';

const Header = () => {

    const [ind, setInd] = useState(0);

    function clickHandler(heading,index){
        setInd(index);
        console.log(ind);
        console.log(`https://relaxed-wright-b63d33.netlify.app/${heading.link}`);
        console.log(window.location.href);
    }

    return (
        <div className="sidebar">
            <div className="contents">
                <center>
                    <img src={profilePic} alt="Profile-Pic" id="profile-pic" />
                    <h3>Prakhar <span>Varshney</span></h3>
                </center>
                <div className= "headings">
                    {
                        headerList.map((heading,i) => {
                            return(
                            <a 
                                key={i} 
                                href = {heading.link}
                                className = {window.location.href === `https://relaxed-wright-b63d33.netlify.app/${heading.link}`}
                                onClick = {() => clickHandler(heading,i)}
                                >
                                    <span>
                                        {heading.title}
                                    </span>
                            </a>
                            )
                        })
                    }
                    {/* <a href="#home"><span>Home</span></a>
                    <a href="#about"><span>About Me</span></a>
                    <a href="#skills"><span>Skills</span></a>
                    <a href="#project"><span>Projects</span></a>
                    <a href="#blog"><span>Blogs</span></a>
                    <a href="#contact"><span>Contact</span></a> */}
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
