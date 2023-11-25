import React, { useEffect, useState } from 'react'
import "./home.css";
export default function Navbar(){


return(<>
    <nav class="navbar navbar1">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#exp">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <nav class="navbar navbar2" >
        <ul>
            <li><a href="#"><img width="32" height="32" src="https://img.icons8.com/puffy/32/000000/experimental-home-puffy.png" alt="experimental-home-puffy" className='navicon'/></a></li>
            <li><a href="#about"><img width="32" height="32" src="https://img.icons8.com/ios-glyphs/30/person-male.png" alt="person-male" className='navicon'/></a></li>
            <li><a href="#exp"><img width="32" height="32" src="https://img.icons8.com/ios-filled/32/customer-insight.png" alt="customer-insight" className='navicon'/></a></li>
            <li><a href="#skills"><img width="32" height="32" src="https://img.icons8.com/ios/50/transformation-skill.png" alt="transformation-skill" className='navicon'/></a></li>
            <li><a href="#projects"><img width="32" height="32" src="https://img.icons8.com/material-rounded/24/group-of-projects.png" alt="group-of-projects" className='navicon'/></a></li>
            <li><a href="#contact"><img width="32" height="32" src="https://img.icons8.com/material-rounded/24/contact-card.png" alt="contact-card" className='navicon'/></a></li>
        </ul>
    </nav>
</>);
}