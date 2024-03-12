import React, { useState } from "react";
import "../styles/homepage.css"
import "../styles/mobile.css"

export default function Homepage() {

    return (
        <div className="bio">
            <div className="bioStart">
                <div className="bioPhotoArea">
                    <img className="bioPhoto" alt="Paulina" src="public/images/Headshot.jpeg"/>
                </div>
                <div className="bioInfo" >
                    <h2> Paulina Fielek </h2>
                    <p> Portland, OR </p>
                    <p> Software Developer </p>
                    <p> <a class="LI" href="https://www.linkedin.com/in/paulina-sarah-fielek"> LinkedIn &#x27A1; </a> </p>
                </div>
            </div>
            <div className="bioIntro">
                <p className="intro">
                    After spending five years as a Product Manager, I wanted to refocus on software development. <br />
                    I love coding for accessible and enjoyable user experience, visual appeal, and easy collaboration. <br />
                    My PM background allows me to tackle project planning and ticket writing with a deeper understanding of
                    business needs.
                </p>
            </div>
            <div className="bioPets">
                <h3 class="sectionHeader" id="petsHeader"> Meet My Dogs </h3>
                <div className="petColumns">
                    <div class="petPhoto">
                        <h4 class="petName"> Ellie </h4>
                        <img alt="Ellie" src="public/images/Ellie.jpeg"/>
                    </div>
                    <div class="petPhoto">
                        <h4 class="petName"> Acadia </h4>
                        <img alt="Acadia" src="public/images/Acadia.jpeg" />
                    </div>
                </div>
                <div className="styling bottom">

                </div>
            </div>
        </div>
    )
}