import React, { useState } from "react";
import { projects } from "./projects"
import "../styles/portfolio.css"
import "../styles/mobile.css"

export default function Portfolio() {
    const [carouselNum, setCarouselNum] = useState(0)
    const [carousel, setCarousel] = useState("")
    const [pantryPartyNum, setPantryPartyNum] = useState(0)
    const [dateNightNum, setDateNightNum] = useState(0)

    return (
        <div className="portfolio" id="portfolio">
            {projects.map((project) => {
                const slideshowNext = () => {
                    setCarousel(project.title)
                    if (carouselNum === project.images.length - 1) {
                        setCarouselNum(0)
                    } else if (carouselNum > project.images.length - 1) {
                        setCarouselNum(1)
                    } else {
                        setCarouselNum(carouselNum + 1)
                    }
                    if (carousel === "Pantry Party") {
                        setPantryPartyNum(carouselNum)
                    }
                    if (carousel === "Date Night") {
                        setDateNightNum(carouselNum)
                    }
                }
                const slideshowPrevious = () => {
                    setCarousel(project.title)
                    if (carouselNum === 0) {
                        setCarouselNum(project.images.length - 1)
                    } else { setCarouselNum(carouselNum - 1) }
                    if (carousel === "Pantry Party") {
                        setPantryPartyNum(carouselNum)
                    }
                    if (carousel === "Date Night") {
                        setDateNightNum(carouselNum)
                    }
                }
                return (
                    <div className="project" id={project.title}>
                        <div className="projectInfo">
                            <h4 className="projectName"> {project.title} </h4>
                            <p className="projectDescription"> {project.description} </p>
                            <a className="projectURL" href={project.link}> {project.title} &#x27A1; </a> <br />
                            <a className="projectGithub" href={project.github}> Github &#x27A1; </a>
                        </div>
                        <div className="projectCarousel" >
                            {project.images.map((image) => {
                                if (carousel === project.title) {
                                    if (image.id === carouselNum) {
                                        return (
                                            <div className={`carouselImage ${project.title}`} id={`${image.id}`}>
                                                <div className="projectImageArea">
                                                    <img className="projectImage" src={image.src} style={{ display: "inline-block" }} alt={`${project.title} image`} />
                                                    <p className="projectCaption"> {image.caption} </p>
                                                </div>
                                                <button className="previous" onClick={() => { slideshowPrevious() }}> &#10094; </button>
                                                <button className="next" onClick={() => { slideshowNext() }}> &#10095; </button>
                                            </div>
                                        )
                                    } else {
                                        return <img className="projectImage" src={image.src} />
                                    }
                                } else if (carousel !== project.title) {

                                    if (
                                        (project.id === "dateNight" && image.id === dateNightNum)
                                        ||
                                        (project.id === "pantryParty" && image.id === pantryPartyNum)) {
                                        return (
                                            <div className={`carouselImage ${project.title}`} id={`${image.id}`}>
                                                <div className="projectImageArea">
                                                    <img className="projectImage" src={image.src} style={{ display: "inline-block" }} alt={`${project.title} image`} />
                                                    <p className="projectCaption"> {image.caption} </p>
                                                </div>
                                                <button className="previous" onClick={() => { slideshowPrevious() }}> &#10094; </button>
                                                <button className="next" onClick={() => { slideshowNext() }}> &#10095; </button>
                                            </div>
                                        )
                                    } else {
                                        return (<img className="projectImage" src={image.src} />)
                                    }
                                }
                            }
                            )}
                        </div>
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
                )
            })}
        </div>
    )
}