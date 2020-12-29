import React, {useState} from 'react'
import {blogList} from './blogList';

function Blogs() {

    var blogHead = Object.keys(blogList);
    const [current, setCurrent] = useState("one");
    const [ind, setInd] = useState(0);

    function clickHandler(title,i){
        setCurrent(title);
        setInd(i);
    }

    return (
        <section id="blog" className="section5">
            <div className="blogs-heading">
                My Blogs
                <div className="underline"></div>
            </div>

            <div className="blogs-backhead">
                WRITINGS
            </div>

            <div className="blogs-content">
                <div className="blogs-box">
                    {
                        blogList[current].map((title,index) => {
                           return(
                            <div key={index} className="one-blog">
                                <div className="blog-head">{title.Head}</div>
                                <div className="blog-date">{title.Date}</div>
                                <div className="blog-desc">{title.Desc}</div>
                                <a href={title.Link} target="_blank" rel="noreferrer">Read More</a>
                            </div>
                        )
                        })
                    }
                </div>

                <div className="blog-selector">
                    {
                        blogHead.map((title, i) => {
                            return(
                                <div key={i} className = {i === ind ? "circle circle-active" : "circle"} onClick = {() => clickHandler(title,i)}></div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Blogs
