import React, { useEffect } from 'react';
import './App.css';
import "animate.css/animate.min.css";
import Header from './components/sidebar/header';
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills"
import Project from './components/project/project';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init({ duration : 1000 });
  }, []);

  return (
    <div className="main-wrapper">
      <Navbar />
      <Header />

      <main>
        <Home />
        <About />
        <Skills />
        <Project />
        <Blogs />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
