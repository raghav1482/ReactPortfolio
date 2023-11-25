import React from 'react'
import "./home.css";
export default function Education(){

return(<>
    <div id="education">
        <h1 class="eduhead">MY EDUCATION</h1>
        <div class="myedu">
        <ul>
            <li>
                <div class="eduli" data-aos="flip-left"><img src="https://qph.cf2.quoracdn.net/main-qimg-0f6d4dd05cfc046e7faebf784ad26114-lq"/>
                    <div>
                        <h1 style={{fontSize:"1.8vw" , color: "rgb(0, 19, 112)"}}>Bachelor Of Technology (Computer Science & Engg.)</h1>
                        <p style={{fontSize:"1.3vw"}}>MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY</p>
                        <p style={{color: "rgb(0, 74, 131)" ,fontSize: "1.2vw", fontWeight: "bolder"}}>2021-2025 | Persuing</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="eduli" data-aos="flip-right"><img src="https://content.jdmagicbox.com/comp/mumbai/x1/9999p5362.5362.180815033418.r6x1/catalogue/saraswati-vidya-mandir-senior-secondry-school-sultanpur-city-sultanpur-schools-bzbsqzo746.jpg?clr="/>
                    <div>
                        <h1 style={{fontSize:"1.8vw" , color: "rgb(0, 19, 112)"}}>Intermediate (Percentage: 97.4%)</h1>
                        <p style={{fontSize:"1.3vw"}}>SARASWATI VIDYA MANDIR SR. SEC. SCHOOL</p>
                        <p style={{color: "rgb(0, 74, 131)" ,fontSize: "1.2vw", fontWeight: "bolder"}}>2021 | Completed</p>
                    </div>
                </div>
            </li>
        </ul>
        </div>
    </div>
</>)

}