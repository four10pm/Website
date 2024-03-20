import React, { useState } from "react";
import { software, product, education, volunteer, skills, hobbies } from "./data"
import { softwareExperienceIcon, pmExperienceIcon, educationExperienceIcon, volunteerExperienceIcon, codeExperienceIcon, toolsExperienceIcon, languagesExperienceIcon, hobbiesExperienceIcon } from "../assets/icons";
import "../styles/experience.css"
import "../styles/mobile.css"

export default function Experience() {
    const [display, setDisplay] = useState("")

    return (
        <div className="experience">
            {software.map((sw) => {
                return (
                    <div className="softwareExperience">
                        {display !== sw.org &&
                            <div className="experienceDisplay" onClick={() => { setDisplay(sw.org) }}>
                                {softwareExperienceIcon} &nbsp; {sw.org}
                            </div>
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
            {product.map((pm) => {
                return (<div className="pmExperience">
                    {display !== pm.org &&
                        <div className="experienceDisplay" onClick={() => { setDisplay(pm.org) }}>
                            {pmExperienceIcon} &nbsp; {pm.org}
                        </div>
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
            {education.map((edu) => {
                return (
                    <div className="educationExperience">
                        {display !== edu.org &&
                            <div className="experienceDisplay" onClick={() => { setDisplay(edu.org) }}>
                                {educationExperienceIcon} &nbsp; {edu.org}
                            </div>
                        }
                        {display === edu.org &&
                            <div className="education subsection " id={edu.org} onClick={() => { setDisplay("") }}>
                                <h4> {edu.org} </h4>
                                <p> {edu.type} </p>
                                <p> {edu.time} </p>
                            </div>
                        }
                    </div>
                )
            })}
            {volunteer.map((vol) => {
                return (
                    <div className="volunteerExperience">
                        {display !== vol.org &&
                            <div className="experienceDisplay" onClick={() => { setDisplay(vol.org) }}>
                                {volunteerExperienceIcon} &nbsp; {vol.org}
                            </div>
                        }
                        {display === vol.org &&
                            <div className="volunteer subsection" id={vol.org} onClick={() => { setDisplay("") }}>
                                <h4> {vol.org} </h4>
                                <p> {vol.type} </p>
                                <p> {vol.time} </p>
                                <p className="desc"> {vol.description} </p>
                            </div>}
                    </div>
                )
            })}
            {skills.map((skill) => {
                return (
                    <div className="skillsExperience">
                        {display !== skill.group && skill.group !== "Languages" &&
                            <div className="experienceDisplay" onClick={() => { setDisplay(skill.group) }}>
                                {codeExperienceIcon} &nbsp; {skill.group}
                            </div>
                        }
                        {display !== skill.group && skill.group === "Languages" &&
                            <div className="experienceDisplay" onClick={() => { setDisplay(skill.group) }}>
                                {languagesExperienceIcon} &nbsp; {skill.group}
                            </div>
                        }
                        {display === skill.group && skill.group !== "Languages" &&
                            <div className="skills subsection" id={skill.group} onClick={() => { setDisplay("") }}>
                                <h4> {skill.group} </h4>
                                <ul>
                                    {skill.skillset.map((bullet) => {
                                        return <li> {codeExperienceIcon} {bullet} </li>
                                    })}
                                </ul>
                            </div>
                        }
                        {display === skill.group && skill.group === "Languages" &&
                            <div className="skills subsection" id={skill.group} onClick={() => { setDisplay("") }}>
                                <h4> {skill.group} </h4>
                                <ul>
                                    {skill.skillset.map((bullet) => {
                                        return <li> {languagesExperienceIcon} {bullet} </li>
                                    })}
                                </ul>
                            </div>
                        }
                        
                    </div>
                )
            })}
            <div className="hobbiesExperience">
                {display !== "hobbies" &&
                    <div className="experienceDisplay" onClick={() => { setDisplay("hobbies") }}>
                        {hobbiesExperienceIcon} &nbsp; Hobbies
                    </div>}
                {display === "hobbies" &&
                    <div className="hobbies subsection" onClick={() => { setDisplay("") }}>
                        <h4> Hobbies </h4>
                        <ul>
                            <li> {hobbiesExperienceIcon} Reading </li>
                            <li> {hobbiesExperienceIcon} Bullet journaling </li>
                            <li> {hobbiesExperienceIcon} Baking </li>
                            <li> {hobbiesExperienceIcon} Hiking </li>
                            <li> {hobbiesExperienceIcon} Piano </li> 
                        </ul>
                    </div>}
            </div>
        </div>

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