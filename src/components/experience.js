import React from 'react'
import "./exp.css";


export default function Experience(){

return(<>
<div style={{paddingLeft:"10vw"}} className='expdiv' id='exp'>
<p style={{color:" white",textAlign: "start",marginBottom:"0"}}>WHAT I HAVE DONE SO FAR</p>
<h1 className='exph1' data-aos="fade-right">Work Experience</h1>
<div class="page" data-uia-timeline-skin="3" data-uia-timeline-adapter-skin-3="ui-card-skin-#1">
  <div class="uia-timeline">
    <div class="uia-timeline__container">
      <div class="uia-timeline__line"></div>
      <div class="uia-timeline__annual-sections">
        <span class="uia-timeline__year" aria-hidden="true">2023</span>
        <div class="uia-timeline__groups">
          <section class="uia-timeline__group" aria-labelledby="timeline-demo-1-heading-1">
            <div class="uia-timeline__point uia-card" data-uia-card-skin="1" data-aos="fade-right"> 
              <div class="uia-card__container" >
                <div class="uia-card__intro">
                  <span class="uia-card__time">
                    <time datetime="2008-02-02">
                      <span class="uia-card__day">2</span>
                      <span>Feb</span>
                    </time>
                  </span>
                    <span class="exphead">WEB DEVELOPMENT ASST. @CESMMMUT</span>
                </div>
                <div class="uia-card__body" >
                  <div class="uia-card__description" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000">
                    <p><ul style={{textAlign:"justify"}}>
                        <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                        <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products</li>
                        <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                        </ul></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  </div>
  </div>
</>)

}