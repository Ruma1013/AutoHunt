import React from 'react'
import './Hero.css'

import arrow_icon from '../Assets/arrow_icon.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className ='hero'>
        <div className="hero-left">
            <p>Your dream car, just a click away.</p>
            <div className="hero-latest-btn"> Buy Now </div>
            </div>
        <div className="hero-right">
            <img src={hero_image} alt=""/>
        </div>
      
    </div>
  )
}

export default Hero
