import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/navigation.css"
import "../styles/mobile.css"
import { downIcon, upIcon } from "../assets/icons"

export default function Navigation() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const navbar = () => {
        return (
            <nav>
                <div className="navBar">
                    <button className="navButton" onClick={() => { setNavbarOpen(false) }} >
                        {upIcon}
                        &nbsp; Menu
                    </button>
                    <Link to={"/"} className="navItem" onClick={() => { setNavbarOpen(false) }}> About </Link>
                    <Link to={"/experience"} className="navItem" onClick={() => { setNavbarOpen(false) }}> Experience </Link>
                    <Link to={"/portfolio"} className="navItem" onClick={() => { setNavbarOpen(false) }}> Portfolio </Link>
                </div>
            </nav>
        )
    }

    return (
        <>
            {navbarOpen && navbar()}
            {!navbarOpen && (
                <button className="navButton" onClick={() => { setNavbarOpen(true) }}>
                    {downIcon}
                    &nbsp; Menu
                </button>)
            }
        </>
    )
}