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
                <div className="pet">
                    <img alt="Ellie" src="/images/Ellie.jpeg" className="petPhoto" />
                    <h4 className="petName"> Ellie </h4>
                </div>
                <p>
                    <i className="pawPrintLeft"> {pawPrintLeft} </i>
                    You found us!
                    <i className="pawPrintRight"> {pawPrintRight} </i>
                </p>
                <div className="pet">
                    <img alt="Acadia" src="/images/Acadia.jpeg" className="petPhoto" />
                    <h4 className="petName"> Acadia </h4>
                </div>
            </div>
        )
    }

    return (
        <div className="bio" id="bio">
            <span className="bioPets">
                <img src="/images/Ellie.jpeg" />
                <img src="/images/Acadia.jpeg" />
            </span>
            <div className="bioStart">
                {!bioInfo && (
                    <div className="bioPhotoArea">
                        <img className="bioPhoto" alt="Paulina" src="/images/Headshot.jpeg" onClick={() => (setBioInfo(true))} />
                        <div className="bioInfo">
                            <h1> Paulina Fielek </h1>
                            <p> Portland, OR </p>
                            <p> Software Developer </p>
                            <p> <a className="LI" href="https://www.linkedin.com/in/paulina-sarah-fielek" target="_blank" title="https://www.linkedin.com/in/paulina-sarah-fielek"> LinkedIn &#x27A1; </a> </p>
                            <p> <a className="LI" href="https://www.github.com/four10pm" target="_blank" title="https://www.github.com/four10pm"> Github &#x27A1; </a> </p>
                            <p> <a className="LI" href="mailto:paulinasfielek@gmail.com" target="_blank" title="paulinasfielek@gmail.com"> Email &#x27A1; </a> </p>
                        </div>
                    </div>
                )}
                {bioInfo && pets()}
            </div>
            <div className="bioIntro">
                <h3> About Me </h3>
                <p className="intro">
                    After spending five years as a Product Manager, I wanted to refocus on software development. <br />
                    I love coding for accessible and enjoyable user experience, visual appeal, and easy collaboration. <br />
                    My PM background allows me to tackle project planning and ticket writing with a deeper understanding of
                    business needs.
                </p>
            </div>
            <Experience />
            <Portfolio />
            <div className="secretArea"> 
            <p> Did you meet my dogs? </p>
            </div>
        </div>
    )
}