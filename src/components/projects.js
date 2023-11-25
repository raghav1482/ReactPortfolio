import React from 'react'
import "./skillsproj.css";
import proj1 from "../images/proj1.png";
import proj2 from "../images/proj2.png";
import proj3 from "../images/proj3.png";
export default function Projects(){

    const myproj=[
        [proj1,'Ennnexus:2k23','https://github.com/raghav1482/Ennexus-2023','https://cesennexus2k23.netlify.app/','The Ennexus official website offers a Winners Section spotlighting excellence and event triumphs. Allows us to dive into detailed accounts of all events, gaining insights into each immersive experience. Navigate effortlessly through a user-friendly interface designed to enhance your exploration of innovation and celebration',['#react',' #bootstrap']] , 
        [proj2,'MovieAdda','https://github.com/raghav1482/MvADDA','https://movieadda-tan.vercel.app/',"Movie Adda, a MERN stack project, offers a seamless platform for users to explore, organize, and curate their favorite movies. Login, access detailed movie information from an external API, and effortlessly manage your film collection.","#reactjs #nodejs #expressjs #mongoDB #bcryptjs"]  ,
         [proj3,'Text Utils','https://github.com/raghav1482/TEXTUTILS_','https://textutilsraghav.netlify.app/',"I've developed a user-friendly tool allowing you to effortlessly edit text. Paste your content and explore features like case conversion, binary transformation, and more.","#react #bootstrap"],];

return(<>
    <div id="projects" data-aos="fade-up">
        <p>MY WORK</p>
        <h1 className='h1'>PROJECTS</h1>
        <p >Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
        <div style={{display: "flex",flexWrap: "wrap",width: "80%",justifyContent: "center"}} class="skillcontain">
            {myproj.map((projects)=>{
                return <div className='projbox' data-aos="flip-left">
                        <img src={projects[0]}/>
                        <h1>{projects[1]}</h1>
                        <p data-aos="fade-zoom-in">{projects[4]}</p>
                        <div className='links'>
                            <a href={projects[3]} className='live'>Live</a>
                            <a href={projects[2]} className='repo'>Repo</a>
                        </div>
                        <div className='tags'>
                            <span style={{color:"cyan"}}>{projects[5]}</span>
                        </div>
                    </div>
                })}
        </div>
    </div>
</>);
}