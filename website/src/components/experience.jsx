import React, { useState } from "react";
import { software, product, education, volunteer, skills, hobbies } from "./data"
import { softwareExperienceIcon, pmExperienceIcon, educationExperienceIcon, volunteerExperienceIcon, codeExperienceIcon, toolsExperienceIcon, languagesExperienceIcon, hobbiesExperienceIcon, xIcon } from "../assets/icons";
import "../styles/experience.css"
import "../styles/mobile.css"

export default function Experience() {
    const [display, setDisplay] = useState("")

    const softwareList = () => {
        return (
            software.map((sw) => {
                return (
                    <div className="softwareExperience">
                        {display !== sw.org &&
                            <div className="experienceDisplay" onClick={() => { setDisplay(sw.org) }}>
                                {softwareExperienceIcon} &nbsp; {sw.org}
                            </div>
                        }
                        {display === sw.org &&
                            <div className="software section" id={sw.org} >
                                <div className="sectionHeader">
                                    <h4> {sw.org} </h4>
                                    <i className="close" onClick={() => setDisplay("")}> {xIcon} </i>
                                </div>
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
            })
        )
    }

    const productList = () => {
        return (
            product.map((pm) => {
                return (<div className="pmExperience">
                    {display !== pm.org &&
                        <div className="experienceDisplay" onClick={() => { setDisplay(pm.org) }}>
                            {pmExperienceIcon} &nbsp; {pm.org}
                        </div>
                    }
                    {display === pm.org &&
                        <div className="product section" id={pm.org} >
                            <div className="sectionHeader">
                                <h4> {pm.org} </h4>
                                <i className="close" onClick={() => setDisplay("")}> {xIcon} </i>
                            </div>
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
            })
        )
    }

    const educationList = () => {
        return (
            education.map((edu) => {
                return (
                    <div className="educationExperience">
                        {display !== edu.org &&
                            <div className="experienceDisplay" onClick={() => { setDisplay(edu.org) }}>
                                {educationExperienceIcon} &nbsp; {edu.org}
                            </div>
                        }
                        {display === edu.org &&
                            <div className="education subsection " id={edu.org} >
                                <div className="sectionHeader">
                                    <h4> {edu.org} </h4>
                                    <i className="close" onClick={() => { setDisplay("") }}> {xIcon} </i>
                                </div>
                                <p> {edu.type} </p>
                                <p> {edu.time} </p>
                            </div>
                        }
                    </div>
                )
            })
        )
    }

    const volunteerList = () => {
        return (
            volunteer.map((vol) => {
                return (
                    <div className="volunteerExperience">
                        {display !== vol.org &&
                            <div className="experienceDisplay" onClick={() => { setDisplay(vol.org) }}>
                                {volunteerExperienceIcon} &nbsp; {vol.org}
                            </div>
                        }
                        {display === vol.org &&
                            <div className="volunteer subsection" id={vol.org} >
                                <div className="sectionHeader">
                                    <h4> {vol.org} </h4>
                                    <i className="close" onClick={() => { setDisplay("") }}> {xIcon} </i>
                                </div>
                                <p> {vol.type} </p>
                                <p> {vol.time} </p>
                                <p className="desc"> {vol.description} </p>
                            </div>}
                    </div>
                )
            })
        )
    }

    const skillsList = () => {
        return (
            skills.map((skill) => {
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
                            <div className="skills subsection" id={skill.group} >
                                <div className="sectionHeader">
                                    <h4> {skill.group} </h4>
                                    <i className="close" onClick={() => { setDisplay("") }}> {xIcon} </i>
                                </div>
                                <ul>
                                    {skill.skillset.map((bullet) => {
                                        return <li> {codeExperienceIcon} {bullet} </li>
                                    })}
                                </ul>
                            </div>
                        }
                        {display === skill.group && skill.group === "Languages" &&
                            <div className="skills subsection" id={skill.group} >
                                <div className="sectionHeader">
                                    <h4> {skill.group} </h4>
                                    <i className="close" onClick={() => { setDisplay("") }}> {xIcon} </i>
                                </div>
                                <ul>
                                    {skill.skillset.map((bullet) => {
                                        return <li> {languagesExperienceIcon} {bullet} </li>
                                    })}
                                </ul>
                            </div>
                        }

                    </div>
                )
            })
        )
    }

    const hobbiesList = () => {
        return (
            <div className="hobbiesExperience">
                {display !== "hobbies" &&
                    <div className="experienceDisplay" onClick={() => { setDisplay("hobbies") }}>
                        {hobbiesExperienceIcon} &nbsp; Hobbies
                    </div>}
                {display === "hobbies" &&
                    <div className="hobbies subsection">
                        <div className="sectionHeader">
                            <h4> Hobbies </h4>
                            <i className="close" onClick={() => { setDisplay("") }}> {xIcon} </i>
                        </div>
                        <ul>
                            <li> {hobbiesExperienceIcon} Reading </li>
                            <li> {hobbiesExperienceIcon} Bullet journaling </li>
                            <li> {hobbiesExperienceIcon} Baking </li>
                            <li> {hobbiesExperienceIcon} Hiking </li>
                            <li> {hobbiesExperienceIcon} Piano </li>
                        </ul>
                    </div>}
            </div>
        )
    }

    return (
        <div className="experience">
            <h3 className="experienceTitle"> Experience </h3>
            <div className="experienceList">
                {softwareList()}
                {productList()}
                {educationList()}
                {volunteerList()}
                {skillsList()}
                {hobbiesList()}
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