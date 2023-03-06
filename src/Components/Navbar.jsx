import React from 'react'
import airbnbLogo from '../assets/airbnb 1.png'
import '../../styles.css'

export default function Navbar() {
  return (
      <nav>
        <img src={airbnbLogo} className="nav-img"/>
      </nav>
  )
}