import React from 'react'

function Contact() {
    return (
        <section id="contact" className="section6">
            <div className="head-wrapper">
                <div className="heading">
                    Get In Touch
                    <div className="underline"></div>
                </div>

                <div className="backhead">
                    CONTACT
                </div>
            </div>
            <div className="contact-content">
                <div className="contact-left-area">
                    <h4>ADDRESS</h4>
                    <p>61-C, Gayatri Nagar-B, Maharani Farm, Durgapura, Jaipur</p>
        
                    <h4>FOLLOW ME</h4>
                    <div className="contact-contact-info">
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

                <form name="contact" className="contact-right-area">
                    <h4>SEND ME A NOTE</h4>
                    <div>
                        <div className="contact-first-input">
                            <input name="name" type="text" placeholder="Name" className="name-input" required/>
                            <input name="email" type="text" placeholder="Email" className="mail-input" required/> 
                        </div>
                        <textarea name="message" placeholder="Type Something" className="text-input" required></textarea>
                        <p className="center">
                            <button type="submit">Send Message</button>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
