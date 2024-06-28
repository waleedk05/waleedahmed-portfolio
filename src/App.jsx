import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Projects from './screens/Projects/Projects'
import Skill from './screens/Skills/Skill'
import Experiences from './screens/Experience/Experiences'
import Certificates from './components/Certificates'

import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {

  return (
    <div>

      <Header />

      <Banner />

      <About />

      <Projects />

      <Skill />

      <Experiences />

      <Certificates />



      <Contact />

      <Footer />
    </div>
  )
}

export default App