import React,{useState} from 'react';
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {

    const [showLink, setShowLink] = useState(false);

    return (
        <nav>
            <div className="upper-nav">
                <div className="nav-left-area">
                    PRAKHAR <span>VARSHNEY</span>
                </div>

                <div className="nav-right-area">
                    <div className="contact-info">
                        <a href="https://prakhar10varshney.netlify.app/index.html" target = "_blank" rel="noreferrer"><i className="fa fa-globe" id = "website1" aria-hidden="true"></i>
                        </a>
                        <a href="https://twitter.com/Prakhar10V" target = "_blank" rel="noreferrer"><i className="fa fa-twitter" id="twitter1" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/PrakharV10" target = "_blank" rel="noreferrer"><i className="fa fa-github" id="git1" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/prakhar-varshney-6b3a92181/" target = "_blank" rel="noreferrer"><i className="fa fa-linkedin" id = "linkedin1" aria-hidden="true"></i>
                        </a>
                        <FontAwesomeIcon icon={showLink ? faTimesCircle : faBars} style={{color : "white", transition : "all .5s"}} size ='lg' onClick={() => setShowLink(!showLink)} id="ham" />
                    </div>
                </div>
            </div>
            <div className={showLink ? "nav-links" : "nav-links-hide"}>
                <div className="nav-link-inner" onClick={() => setShowLink(!showLink)}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#project">Project</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
