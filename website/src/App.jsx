import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage'
import { downIcon, upIcon } from './assets/icons.jsx'
import './App.css'
import './styles/homepage.css'

export default function App() {
  const [scrollDown, setScrollDown] = useState(true)

  useEffect(
    () => {
      document.addEventListener('scroll', (event) => {
        if (scrollY < document.body.scrollHeight/3) {
          setScrollDown(true)
        } else if (scrollY >=document.body.scrollHeight/3) {
          setScrollDown(false)
        }
      }), []
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
        (<a className="scroll" href="#bio">
          <p className="scrollText"> Back to Top &nbsp; </p>
          <i className="scrollIcon"> {upIcon} </i>
        </a>)
      }

    </div>
  )
}

