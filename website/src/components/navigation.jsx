import React, { useState } from "react"
import { Link } from "react-router-dom"
// import "../styles/navigation.css"
import "../styles/mobile.css"

export default function Navigation() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const navbar = () => {
        return (
            <nav>
                <div className="navbar">
                    <button onClick={() => { setNavbarOpen(false) }}>
                        <i class="fa-solid fa-circle-chevron-up"></i>
                        Menu
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
                <button onClick={() => { setNavbarOpen(true) }}>
                    <i class="fa-solid fa-circle-chevron-down"></i>
                    Menu
                </button>)
            }
        </>
    )
}