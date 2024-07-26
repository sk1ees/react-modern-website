import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'

const App = () => {
  return (
    <>
      <h1 className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
      </h1>
    </>
  )
}

export default App
