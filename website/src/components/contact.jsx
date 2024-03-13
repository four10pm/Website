import React, {useState} from "react";
import "../styles/contact.css"
import "../styles/mobile.css"

export default function Contact() {
const [submission, setSubmission] = useState(false)

    return (

        <div className="contactForm">
            <h4 className="formIntro"> Reach out! </h4>
            {!submission && (
            <form onSubmit={() => {setSubmission(!submission)}}>
                <label> Name: &nbsp;
                    <input name="name" placeholder="First Last" required></input>
                </label>
                <label> Email: &nbsp;
                    <input name="name" placeholder="Email Address" required></input>
                </label>
                <label> Message: &nbsp;
                    <input name="name" placeholder="Say hi!" required></input>
                </label>
                <button type="submit"> Submit </button>
            </form>)}
            {submission && <p className="ty"> Thank you for your message! </p>}
        </div>
    )
}