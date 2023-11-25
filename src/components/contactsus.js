import React from 'react'
import "./home.css";
export default function Contact(){

return(<>
<div id="contact">
    <h1 class="eduhead" style={{textAlign: "center",paddingTop: "20px"}}>GET IN TOUCH</h1>
    <div class="contact">
        <div class="condiv">
            <h2>Follow me</h2>
            <ul>
                <li><a href="https://linkedin.com/in/raghvendra-tiwari-bb7637224"><i class="fa fa-linkedin-square"> /raghvendra-tiwari-bb7637224</i></a></li>
                <li><a href="https://instagram.com/raghav_1482"> <i class="fa fa-instagram"> /raghav_1482</i></a></li>
                <li><a href="https://www.facebook.com/raghvendra.tiwari.7737769"><i class="fa fa-facebook-f"> /raghvendra.tiwari.7737769</i></a></li>
            </ul>
        </div>
        <div class="condiv">
            <h2>CONTACT ME DIRECTLY</h2>
            <ul>
                <li>Raghvendra Tiwari</li>
                <li>Sultanpur , UP</li>
                <li><a href="mailto:raghvendra1482002@gmail.com" style={{color:"aqua"}}>raghvendra1482002@gmail.com</a></li>
            </ul>
        </div>
        <div class="footer">Made with <img src="https://media.tenor.com/NRtK5xTyAEsAAAAi/heart-red.gif" style={{width: "14px"}}/> by Raghvendra Tiwari</div>
    </div>
</div>
</>)
}