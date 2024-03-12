import React from "react";
import { software, product, education, volunteer, skills, hobbies } from "./data"
import "../styles/experience.css"

export default function Experience() {

    return (
        <div className="experience">
            <div className="softwareArea">
                <h3 className="sectionHeader"> Software Development Experience </h3>
                {software.map((sw) => {
                    return (
                        <div className="software section" id={sw.org}>
                            <h4> {sw.org} </h4>
                            <p> {sw.type} </p>
                            <p> {sw.time} </p>
                            <p className="desc"> {sw.description} </p>
                            <ul>
                                {sw.bullets.map((bullet) => {
                                    return (
                                        <li> {bullet} </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className="productRole">
                <h3 className="sectionHeader"> Product Management Experience </h3>
                {product.map((pm) => {
                    return (
                        <div className="product section" id={pm.org}>
                            <h4> {pm.org} </h4>
                            <p> {pm.type} </p>
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
                    )
                })}
            </div>
            <div className="educationarea">
                <h3 className="sectionHeader"> Education </h3>
                <div className="educationlist">
                    {education.map((edu) => {
                        return (
                            <div className="education section " id={edu.org}>
                                <h4> {edu.org} </h4>
                                <p> {edu.type} </p>
                                <p> {edu.time} </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="volunteerskillsarea">
                <div className="volunteerArea">
                    <h3 className="sectionHeader volunteer"> Volunteer Experience </h3>
                    {volunteer.map((vol) => {
                        return (
                            <div className="volunteer section" id={vol.org}>
                                <h4> {vol.org} </h4>
                                <p> {vol.type} </p>
                                <p> {vol.time} </p>
                                <p className="desc"> {vol.description} </p>
                            </div>
                        )
                    })}
                </div>
                <div className="skillsArea">
                    <h3 className="sectionHeader skills"> Skills </h3>
                    <div className="skills section">
                    {skills.map((skill) => {
                        return (
                            <span className="skills subsection" id={skill.group}>
                                <h4> {skill.group} </h4>
                                <ul>
                                    {skill.skillset.map((bullet) => {
                                        return <li> {bullet} </li>
                                    })}
                                </ul>
                            </span>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className="hobbiesarea">
                <h3 className="sectionHeader"> Hobbies </h3>
                <div className="hobbies">
                {hobbies.map((hobby) => {
                    return (
                        <div className="hobby section" id={hobby.org}>
                            <h4> {hobby.name} </h4>
                            <img src={hobby.photo} alt={hobby.name} />
                            <p className="desc"> {hobby.description} </p>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}