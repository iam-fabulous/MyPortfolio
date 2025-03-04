import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero.jsx'
import Contact from './components/Contact/Contact.jsx'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Contact/>
    </main>
  )
}

export default App