import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_d7eolao', 'template_oezh9io', e.target, 'user_tMIM9t9G2wAYMXPbnZvnA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Your Email is sent successfully!!");
      e.target.reset()
    }

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
                        <a href="https://prakhar10-blog.netlify.app/" target = "_blank" rel="noreferrer" ><i className="fa fa-globe" id = "website" aria-hidden="true" ></i>
                        </a>
                        <a href="https://twitter.com/Prakhar10V" target = "_blank" rel="noreferrer" ><i className="fa fa-twitter" id="twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/PrakharV10" target = "_blank" rel="noreferrer" ><i className="fa fa-github" id="git" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/prakhar-varshney-6b3a92181/" target = "_blank" rel="noreferrer" ><i className="fa fa-linkedin" id = "linkedin" aria-hidden="true" ></i>
                        </a>
                    </div>
                </div>

                <form name="contact" className="contact-right-area" onSubmit={sendEmail}>
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
