import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/navigation'
import Homepage from './components/homepage'
import Experience from './components/experience'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import './App.css'

export default function App() {
  
  return (
    <>
    <Navigation /> 
      <div className="main">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/portfolio" element={<Portfolio />} /> 
            </Routes>
        </div>
        <Contact /> 
    </>
  )
}

