import React from "react"
import { Link } from "react-router-dom"
import "../styles/navigation.css"
import "../styles/mobile.css"

export default function Navigation() {

    return (
        <nav>
            <div className="navbar">
                <Link to={"/"} className="navItem"> About </Link>
                <Link to={"/experience"} className="navItem"> Experience </Link>
                <Link to={"/portfolio"} className="navItem"> Portfolio </Link>
            </div>
        </nav>
    )
}