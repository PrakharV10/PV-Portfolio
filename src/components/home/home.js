import React from 'react'

function Home() {
    return (
        <section id="home" className="section">
            <div className="hero-wrap">
                <div className="hero-mask opacity-8 bg-dark"></div>
                <div className="hero-bg"></div>

                <div className="hero-content">
                    {/* <h2 className="hero-heading">Hello! I am</h2> */}
                    <div className="hero-heading2">Prakhar Varshney</div>
                    <div className="hero-subhead">A Beginner Web-Developer, An Intermediate Graphics Designer & An Expert learner.</div>
                    <a href="contact" className="hero-btn">Hire Me</a>
                </div>
            </div>
        </section>
    )
}

export default Home
