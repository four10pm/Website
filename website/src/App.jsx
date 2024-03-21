import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage'
import Experience from './components/experience'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import { downIcon, upIcon } from './assets/icons.jsx'
import './App.css'
import './styles/homepage.css'

export default function App() {
  const [scrollDown, setScrollDown] = useState(true)

  document.addEventListener("DOMContentLoaded", function(){

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
        console.log("hi")
        }
      })
      }

    const target = document.querySelector(".portfolio")

    const observer = new IntersectionObserver(callback);
    observer.observe(target)
})
  
  return (
    <div className="app">
      <div className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
      {scrollDown &&
        (<a className="scroll" href="#portfolio">
          <p className="scrollText"> Projects &nbsp; </p>
          <i className="scrollIcon"> {downIcon} </i>
        </a>)
      }
      {!scrollDown &&
        (<a className="scroll" href="#portfolio">
          <p className="scrollText"> Projects &nbsp; </p>
          <i className="scrollIcon"> {upIcon} </i>
        </a>)
      }

    </div>
  )
}

