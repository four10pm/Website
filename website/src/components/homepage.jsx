import React, { useState } from "react";
import "../styles/homepage.css"
import "../styles/mobile.css"

export default function Homepage() {
    const [bioInfo, setBioInfo] = useState(false)

    return (
        <div className="bio">
            <div className="bioStart">
            <h2> Paulina Fielek </h2>
                {!bioInfo && (
                    <div className="bioPhotoArea">
                        
                        <img className="bioPhoto" alt="Paulina" src="public/images/Headshot.jpeg" onClick={() => (setBioInfo(true))} />
                    </div>
                )}
                {bioInfo && (
                    <div className="bioInfo" onClick={() => (setBioInfo(false))}>
                        
                        <p> Portland, OR </p>
                        <p> Software Developer </p>
                    </div>
                )}
            </div>
            <div className="bioIntro">
           
                <p className="intro">
                    After spending five years as a Product Manager, I wanted to refocus on software development. <br />
                    I love coding for accessible and enjoyable user experience, visual appeal, and easy collaboration. <br />
                    My PM background allows me to tackle project planning and ticket writing with a deeper understanding of
                    business needs.
                </p>
                <a class="LI" href="https://www.linkedin.com/in/paulina-sarah-fielek"> LinkedIn &#x27A1; </a> &nbsp; 
                <a class="LI" href="mailto:paulinasfielek@gmail.com" name="paulinasfielek@gmail.com"> Email &#x27A1; </a>

            </div>
            <div className="bioPets">
                <h3 class="sectionHeader" id="petsHeader"> Meet My Dogs </h3>
                <div className="petColumns">
                    <div class="petPhoto">
                        <h4 class="petName"> Ellie </h4>
                        <img alt="Ellie" src="public/images/Ellie.jpeg" className="bioPhoto" />
                    </div>
                    <div class="petPhoto">
                        <h4 class="petName"> Acadia </h4>
                        <img alt="Acadia" src="public/images/Acadia.jpeg" className="bioPhoto" />
                    </div>
                </div>
            </div>
        </div>
    )
}