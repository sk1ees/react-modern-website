import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'

const App = () => {
  return (
    <>
      <h1 className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar />
        <LandingPage />
        <Marquee />
      </h1>
    </>
  )
}

export default App
