import React from 'react'
import './Hero.css'
import handIcon from '../assets/hand_icon.png'
import arrowIcon from '../assets/arrow.png'
import heroImg from '../assets/hero_image.png'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-texts">
                <h4>new arrivals only</h4>
                <h1>new <img src={handIcon} alt="" /> collections for everyone</h1>
                <button className='hero-btn'>Latest Collection <img src={arrowIcon} alt="" /></button>
            </div>

            <div className="hero-img">
                <img src={heroImg} alt="" />
            </div>

        </div>
    )
}
