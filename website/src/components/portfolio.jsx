import React, { useState } from "react";
import { projects } from "./projects"
import "../styles/portfolio.css"
import "../styles/mobile.css"

export default function Portfolio() {
    const [carouselNum, setCarouselNum] = useState(0)
    const [carousel, setCarousel] = useState("")

    return (
        <div className="portfolio">
            {projects.map((project) => {
                const slideshowNext = () => {
                    setCarousel(project.title)
                    if (carouselNum === project.images.length-1) {
                        setCarouselNum(0)
                    } else {setCarouselNum(carouselNum+1)}
                }
                const slideshowPrevious = () => {
                    if (carouselNum === 0) {
                        setCarouselNum(project.images.length-1)
                    } else {setCarouselNum(carouselNum-1)}
                }
                return (
                    <div className="project" id={project.title}>
                        <div className="projectCarousel" >
                            {project.images.map((image) => {
                                if (image.id === carouselNum && carousel === project.title) {
                                    return (
                                        <div className={`carouselImage ${project.title}`} id={`${image.id}`}>
                                            <button className="previous" onClick={()=>{slideshowPrevious()}}> &#10094; </button>
                                            <img className="projectImage" src={image.src} alt={`${project.title} image`} />
                                            <button className="next" onClick={()=>{slideshowNext()}}> &#10095; </button>
                                            <p className="projectCaption"> {image.caption} </p>
                                        </div>
                                    )} else if (image.id === 0 && carousel !== project.title) {
                                        return (
                                            <div className={`carouselImage ${project.title}`} id={`${image.id}`}>
                                            <button className="previous" onClick={()=>{slideshowPrevious()}}> &#10094; </button>
                                            <img className="projectImage" src={image.src} alt={`${project.title} image`} />
                                            <button className="next" onClick={()=>{slideshowNext()}}> &#10095; </button>
                                            <p className="projectCaption"> {image.caption} </p>
                                        </div>
                                        )
                                    }
                                }
                            )}
                        </div>
                        <div className="projectInfo">
                            <h3 className="projectName"> {project.title} </h3>
                            <p className="projectDescription"> {project.description} </p>
                            <a className="projectURL" href={project.link}> {project.title} &#x27A1; </a> <br />
                            <a className="projectGithub" href={project.github}> Github &#x27A1; </a>
                            <div className="projectLists">
                                <ul className="projectStack">
                                    <p className="listName"> Tech stack: </p>
                                    {project.stack.map((stackItem) => {
                                        return <li> {stackItem} </li>
                                    })}
                                </ul>
                                <ul className="projectSkills">
                                    <p className="listName"> Used skills: </p>
                                    {project.skills.map((skill) => {
                                        return <li> {skill} </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="styling bottom">
            </div>
        </div>
    )
}