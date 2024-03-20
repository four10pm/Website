import React, { useState } from "react";
import Experience from "./experience";
import "../styles/homepage.css"
import "../styles/mobile.css"
import { pawPrintLeft, pawPrintRight } from '../assets/icons.jsx'
import Portfolio from "./portfolio.jsx";

export default function Homepage() {
    const [bioInfo, setBioInfo] = useState(false)

    const pets = () => {
        return (
            <div className="easterEgg bioPhotoArea" onClick={() => { setBioInfo(false) }}>
                <div class="pet">
                    <img alt="Ellie" src="public/images/Ellie.jpeg" className="petPhoto" />
                    <h4 class="petName"> Ellie </h4>
                </div>
                <p>
                    <i className="pawPrintLeft"> {pawPrintLeft} </i>
                    You found us!
                    <i className="pawPrintRight"> {pawPrintRight} </i>
                </p>
                <div class="pet">
                    <img alt="Acadia" src="public/images/Acadia.jpeg" className="petPhoto" />
                    <h4 class="petName"> Acadia </h4>
                </div>
            </div>
        )
    }

    return (
        <div className="bio">
            <span className="bioPets">
                <img src="public/images/Ellie.jpeg" />
                <img src="public/images/Acadia.jpeg" />
            </span>
            <div className="bioStart">
                {!bioInfo && (
                    <div className="bioPhotoArea">
                        <img className="bioPhoto" alt="Paulina" src="public/images/Headshot.jpeg" onClick={() => (setBioInfo(true))} />
                        <div className="bioInfo">
                            <h1> Paulina Fielek </h1>
                            <p> Portland, OR </p>
                            <p> Software Developer </p>
                            <p> <a class="LI" href="https://www.linkedin.com/in/paulina-sarah-fielek"> LinkedIn &#x27A1; </a> </p>
                            <p> <a class="LI" href="https://www.github.com/four10pm"> Github &#x27A1; </a> </p>
                            <p> <a class="LI" href="mailto:paulinasfielek@gmail.com" name="paulinasfielek@gmail.com"> Email &#x27A1; </a> </p>
                        </div>
                    </div>
                )}
                {bioInfo && pets()}
            </div>
            <div className="bioIntro">
                <h4> About Me </h4>
                <p className="intro">
                    After spending five years as a Product Manager, I wanted to refocus on software development. <br />
                    I love coding for accessible and enjoyable user experience, visual appeal, and easy collaboration. <br />
                    My PM background allows me to tackle project planning and ticket writing with a deeper understanding of
                    business needs.
                </p>
            </div>
            <Experience />
            <Portfolio />
            <p> Did you meet my dogs? </p>
        </div>
    )
}