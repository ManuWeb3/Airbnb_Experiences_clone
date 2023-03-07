// import reactLogo from './assets/react.svg' -- syntax to render the image on the page
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'

export default function App() {
  return (
      <div>
        <Navbar />
        <Hero />
        <Card />
      </div>
  )
}
