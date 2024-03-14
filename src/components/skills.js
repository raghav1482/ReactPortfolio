import React from 'react'
import "./skillsproj.css";
export default function Skills(){

    const myskills = [ 'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=avif&w=256'  , 'https://cdn.iconscout.com/icon/free/png-512/free-bootstrap-226077.png?f=avif&w=256' , 'https://cdn.iconscout.com/icon/free/png-512/free-html5-2038876-1720089.png?f=avif&w=256','https://cdn.iconscout.com/icon/free/png-512/free-css3-8-1175200.png?f=avif&w=256' , 'https://img.icons8.com/color/48/git.png','https://cdn.iconscout.com/icon/free/png-512/free-react-4-1175110.png?f=avif&w=256','https://cdn.iconscout.com/icon/free/png-512/free-mongodb-5-1175140.png?f=webp&w=256','https://cdn.iconscout.com/icon/free/png-512/free-node-js-3-1174937.png?f=avif&w=256','https://img.icons8.com/ios/50/express-js.png','https://miro.medium.com/v2/resize:fit:1258/1*okiCUvTUJLtOqJv1dMzwpA.png'];

return(<>
    <div id="skills">
        <p>What i am good at</p>
        <h1 className='h1'>My SKILLS</h1>
        <div style={{display: "flex",flexWrap: "wrap",width: "80%",justifyContent: "center"}} class="skillcontain">
            {myskills.map((skill)=>{return <div className='skillbox' data-aos="flip-left" data-aos-duration={Math.floor(Math.random() * 10)*100}><img src={skill}/></div>})}
        </div>
    </div>
</>);
}
