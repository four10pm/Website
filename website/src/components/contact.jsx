import React from "react";
import "../styles/contact.css"
import "../styles/mobile.css"

export default function Contact() {

    return (
        <div className="contactForm">
            <h4 className="formIntro"> Reach out! </h4>
            <form>
                <label> Name: &nbsp;
                    <input name="name" placeholder="First Last"></input>
                </label>
                <label> Email: &nbsp;
                    <input name="name" placeholder="Email Address"></input>
                </label>
                <label> Message: &nbsp;
                    <input name="name" placeholder="Say hi!"></input>
                </label>
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}