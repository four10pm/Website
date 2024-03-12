import React from "react";
import { projects } from "./projects" 

export default function Portfolio() {

    return (
        <div className="portfolio">
            {projects.map((project)=>{
                return (
                <div className="project" id={project.title}>
                    <img className="projectImage" alt={project.title} src={project.photo} />
                    <div className="projectInfo"> 
                        <h3 className="projectName"> {project.title} </h3>
                        <p className="projectDescription"> {project.description} </p> 
                        <a className="projectURL" href={project.link}> {project.title} &#x27A1; </a>
                        <a className="projectGithub" href={project.github}> Github &#x27A1; </a>
                        <ul className="projectStack"> Tech stack: 
                            {project.stack.map((stackItem)=>{
                                return <li> {stackItem} </li>
                            })}
                        </ul>
                        <ul className="projectSkills"> Used skills:
                            {project.skills.map((skill)=>{
                               return <li> {skill} </li>
                            })}
                        </ul>
                    </div>
                </div> 
                )
            })}
            
        </div>
    )
}