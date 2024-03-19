import React, { useState } from "react";
import { software, product, education, volunteer, skills, hobbies } from "./data"
import { softwareExperienceIcon, pmExperienceIcon, educationExperienceIcon, volunteerExperienceIcon, skillsExperienceIcon, hobbiesExperienceIcon } from "../assets/icons";
import "../styles/experience.css"
import "../styles/mobile.css"

export default function Experience() {
    const [display, setDisplay] = useState(false)

    return (
        <div className="experience grid">
            {/* <div className="softwareArea">
                <h3 className="sectionHeader">
                    Software Development Experience
                </h3> */}
            {software.map((sw) => {
                return (
                    <div className="softwareExperience">
                        {display !== sw.org &&
                            <button className="experienceDisplay" onClick={() => { setDisplay(sw.org) }}>
                                {softwareExperienceIcon} <br/> {sw.org}
                            </button>
                        }
                        {display === sw.org &&
                            <div className="software section" id={sw.org} onClick={() => setDisplay("")}>
                                <h4> {sw.org} </h4>
                                <p> {sw.position} </p>
                                <p> {sw.time} </p>
                                <p className="desc"> {sw.description} </p>
                                <ul>
                                    {sw.bullets.map((bullet) => {
                                        return (
                                            <li> {bullet} </li>
                                        )
                                    })}
                                </ul>
                            </div>}
                    </div>
                )
            })}
            {/* </div> */}
            {/* <div className="productRole"> */}
            {/* <h3 className="sectionHeader">
                    {pmExperienceIcon} &nbsp;
                    Product Management Experience </h3> */}

            {product.map((pm) => {
                return (<div className="pmExperience">
                    {display !== pm.org &&
                        <button className="experienceDisplay" onClick={() => { setDisplay(pm.org) }}>
                            {pmExperienceIcon} <br/> {pm.org}
                        </button>
                    }
                    {display === pm.org &&
                        <div className="product section" id={pm.org} onClick={() => setDisplay("")}>
                            <h4> {pm.org} </h4>
                            <p> {pm.position} </p>
                            <p> {pm.time} </p>
                            <p className="desc"> {pm.description} </p>
                            <ul>
                                {pm.bullets.map((bullet) => {
                                    return (
                                        <li> {bullet} </li>
                                    )
                                })}
                            </ul>
                        </div>
                    }
                </div>
                )
            })}
            {/* </div> */}
            {/* <div className="educationarea"> */}
            {/* <h3 className="sectionHeader">
                    {educationExperienceIcon} &nbsp;
                    Education </h3> */}
            {/* <div className="educationlist"> */}
            {education.map((edu) => {
                return (
                    <div className="educationExperience">
                        {display !== edu.org &&
                            <button className="experienceDisplay" onClick={() => { setDisplay(edu.org) }}>
                                {educationExperienceIcon} <br/> {edu.org}
                            </button>
                        }
                        {display === edu.org &&
                            <div className="education section " id={edu.org} onClick={() => { setDisplay("") }}>
                                <h4> {edu.org} </h4>
                                <p> {edu.type} </p>
                                <p> {edu.time} </p>
                            </div>
                        }
                    </div>
                )
            })}
            {/* </div>

            <div className="volunteerskillsarea"> */}
            {/* <div className="volunteerArea">
                    <h3 className="sectionHeader volunteer">
                        {volunteerExperienceIcon} &nbsp;
                        Volunteer Experience </h3> */}

            {volunteer.map((vol) => {
                return (
                    <div className="volunteerExperience">
                        {display !== vol.org &&
                            <button className="experienceDisplay" onClick={() => { setDisplay(vol.org) }}>
                                {volunteerExperienceIcon} <br/> {vol.org}
                            </button>
                        }
                        {display === vol.org &&
                            <div className="volunteer section" id={vol.org} onClick={() => { setDisplay("") }}>
                                <h4> {vol.org} </h4>
                                <p> {vol.type} </p>
                                <p> {vol.time} </p>
                                <p className="desc"> {vol.description} </p>
                            </div>}
                    </div>
                )
            })}
            {/* </div> */}
            {/* <div className="skillsArea">
                    <h3 className="sectionHeader skills">
                        {skillsExperienceIcon} &nbsp;
                        Skills </h3>
                    <div className="skills section"> */}
            {skills.map((skill) => {
                return (
                    <div className="skillsExperience">
                        {display !== skill.group &&
                            <button className="experienceDisplay" onClick={() => { setDisplay(skill.group) }}>
                                {skillsExperienceIcon} <br/> {skill.group}
                            </button>
                        }
                        {display === skill.group &&
                            <span className="skills subsection" id={skill.group} onClick={() => { setDisplay("") }}>
                                <h4> {skill.group} </h4>
                                <ul>
                                    {skill.skillset.map((bullet) => {
                                        return <li> {bullet} </li>
                                    })}
                                </ul>
                            </span>
                        }
                    </div>
                )
            })}
            <div className="hobbiesExperience">
                {display !== "hobbies" &&
                    <button className="experienceDisplay" onClick={() => { setDisplay("hobbies") }}>
                        {hobbiesExperienceIcon} <br/> Hobbies 
                    </button>}
                {display === "hobbies" &&
                    <span className="hobbies subsection" onClick={() => { setDisplay("") }}>
                        <h4> Hobbies </h4>
                        <ul>
                            <li> Reading </li>
                            <li> Bullet journaling </li>
                            <li> Baking </li>
                            <li> Hiking </li>
                        </ul>
                    </span>}
            </div>
        </div>
        // </div>

        // {/* <div className="hobbiesarea">
        //             <h3 className="sectionHeader"> Hobbies </h3>
        //             <div className="hobbies">
        //             {hobbies.map((hobby) => {
        //                 return (
        //                     <div className="hobby section" id={hobby.org}>
        //                         <h4> {hobby.name} </h4>
        //                         <img src={hobby.photo} alt={hobby.name} />
        //                         <p className="desc"> {hobby.description} </p>
        //                     </div>
        //                 )
        //             })}
        //             </div> */}

    )
}