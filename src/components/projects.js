import React from 'react'
import "./skillsproj.css";
import proj1 from "../images/proj1.png";
import proj2 from "../images/proj2.png";
import proj3 from "../images/proj3.png";
export default function Projects(){

    const myproj=[
        [proj1,'ChatIt:MERN Chat APP','https://github.com/raghav1482/Chatit','https://chatit-gs2u.onrender.com','Chat It is a feature-rich chat application that provides a dynamic and interactive platform for real-time communication. Leveraging a robust technology stack, including Express, MongoDB, React, and Socket.io',['#MongoDB',' #react',' #Express',' #bootstrap',' #Socket.io' , '#JWT']] , 
        [proj2,'MovieAdda','https://github.com/raghav1482/MvADDA','https://movieadda-tan.vercel.app/',"Movie Adda, a MERN stack project, offers a seamless platform for users to explore, organize, and curate their favorite movies. Login, access detailed movie information from an external API, and effortlessly manage your film collection.","#reactjs #nodejs #expressjs #mongoDB #bcryptjs"]  ,
         [proj3,'BLogit','https://github.com/raghav1482/blogit','https://rgblogit.vercel.app/',"Blogit is built to simplify the process of creating and sharing blogs. It offers a user-friendly interface for writing, formatting, and publishing articles. With integrated features for user authentication and content management, Prompt ensures a smooth blogging experience for both writers and readers.","#react #Next.js #MongoDB #bootstrap"],];

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
