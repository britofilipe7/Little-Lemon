import React from 'react';
import HeroImage from "../../assets/restaurant chef B.jpg"
import "../../styles/Hero.css"

const Hero = () => {
    return (
        <div className='container'>
            <div className='Hero'>
                <div className='text'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <div className='food_image'>
                    <img id='chef_photo' src={HeroImage} alt='plate of food'></img>
                </div>
            </div>
        </div>
    )
}

export default Hero