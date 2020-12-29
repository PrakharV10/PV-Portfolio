import React, {useState} from 'react'
import {projectList} from './projectList';

function Project() {

    const [current, setCurrent] = useState("CLI App");
    const [ind, setInd] = useState(0);

    var projectHead = Object.keys(projectList);

    function clickHandler(title,i){
        setCurrent(title);
        setInd(i);
    }

    return (
        <section id="project" className="section4">
            <div className="project-heading">
                My Work
                <div className="underline"></div>
            </div>

            <div className="project-backhead">
                PROJECTS
            </div>
            <div className="project-content">
                <ul>
                    {
                        projectHead.map((title, i) => {
                            return(<li key={i} className = {i === ind ? "active" : null} onClick = {() => clickHandler(title,i)}>{title}</li>)
                        })
                    }
                </ul>
            <div className="project-info">
                {
                    projectList[current].map((title, index) => {
                        return(
                            <div key={index} className="project-card">

                                <div className="right-area">
                                    <div className="project-head">{title.Name}</div>
                                    <div className="project-date">{title.Date}</div>
                                    <div className="project-desc">{title.Description}</div>
                                    <div className="project-link1"><a href ={title.Link1} target="_blank" rel="noreferrer">VISIT LIVE</a></div>
                                    <div className="project-link2"><a href={title.link2} target="_blank" rel="noreferrer">VIEW CODE ON GITHUB</a></div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default Project
