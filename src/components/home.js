import React from 'react'

import "./home.css";
import me from "../images/me.png";
import Navbar from './navbar';
import About from './about';
import Education from './educ';
import Skills from './skills';
import Projects from './projects';
import Contact from './contactsus';
import Experience from './experience';
export default function Home(){
    return(<>
    <Navbar/>
    <section className='sectionhead'>
    <div id="bg">
        <div class="head">
            <h1>Hi ! There</h1>
            <p style={{textAlign:"justify"}}>I'm Raghvendra ,<br/>MERN Stack Developer</p>
            <h2><a href="https://drive.google.com/file/d/1u6N3BY2rUM3Oj-6meyJY5lg_92Vk0-ky/view?usp=sharing">Resume</a></h2>
        </div>
    </div>
    <div id="me"><img src={me}/></div>
    </section>
    <About/>
    <Experience/>
    {/* <Education/> */}
    <Skills/>
    <Projects/>
    <Contact/>
    </>);
}
