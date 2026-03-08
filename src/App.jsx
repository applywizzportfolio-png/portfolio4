import React from 'react'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'
import Contact from './components/Contact'
import {Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'
import HomePage from './pages/HomePage'
import NotExists from './pages/NotExists'
const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotExists />} />
        <Route path='' element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
     </BrowserRouter>
  )
}

export default App