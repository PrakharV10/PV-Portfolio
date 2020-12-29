import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { faCode, faMarker, faCube, faFeatherAlt, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons"

function Skills() {
    return (
        <section id="skills" className="section3">
            <div className = "head-wrapper">
                <div className="heading">
                    What I do?
                    <div className="underline"></div>
                </div>

                <div className="backhead2">
                    SKILLS
                </div>
            </div>
            <div className= "skill-content">
                <div className="info-card">
                    <div><FontAwesomeIcon className="card-icon" icon={faCode} size='2x'/></div>
                    <div className="card-content">
                        <h4>HTML, CSS & JS</h4>
                        <p>The essential components of every website. Love creating UI-designs using Vanilla CSS from scratch. </p>
                    </div>
                </div>
                <div className="info-card">
                    <div><FontAwesomeIcon className="card-icon" icon={faReact} size = '2x'/></div>
                    <div className="card-content">
                        <h4>ReactJs</h4>
                        <p>Learnt React Function components, React Hooks and React Router. Worked on basic projects involving React.</p>
                    </div>
                </div>
                <div className="info-card">
                    <div><FontAwesomeIcon className="card-icon" icon={faMarker} size='2x'/></div>
                    <div className="card-content">
                        <h4>Blog Writing</h4>
                        <p>I love writing Blogs for Beginners, to get them started in JavaScript, GitHub etc.Wrote step-by-step procedures of some of my basic projects.</p>
                    </div>
                </div>
                <div className="info-card">
                    <div><FontAwesomeIcon className="card-icon" icon={faCube} size='2x'/></div>
                    <div className="card-content">
                        <h4>3D Modelling</h4>
                        <p>Created 3D-Models using Blender, as a hobby. Worked on Animations involving these models.</p>
                    </div>
                </div>
                <div className="info-card">
                    <div><FontAwesomeIcon className="card-icon" icon={faFeatherAlt} size='2x'/></div>
                    <div className="card-content">
                        <h4>Motion Graphics</h4>
                        <p>Used Adobe After-Effects for creating 2D Animations and Adobe Media Encoder for rendering the output.</p>
                    </div>
                </div>
                <div className="info-card">
                    <div><FontAwesomeIcon className="card-icon" icon={faPalette} size='2x'/></div>
                    <div className="card-content">
                        <h4>Logo Designing</h4>
                        <p>Created Logos Professionally for companies, using Adobe Photoshop & Adobe Illustrator.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
