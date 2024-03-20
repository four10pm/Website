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

  return (
    <div className="app">
      <div className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
        <a className="scroll" href="#portfolio">
          <p className="scrollText"> Projects &nbsp; </p>
          <i className="scrollIcon"> {downIcon} </i>
        </a>
    </div>
  )
}

