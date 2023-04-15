import React from 'react';
import Logo from "../components/assets/Logo.svg"
import "../components/styles/Nav.css"

import { useRef } from 'react';

import {FaBars, FaTimes} from "react-icons/fa";



const Nav = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <img class="logo" src={Logo} alt="Little lemon logo"></img>
            <nav ref={navRef}>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Menu</a>
                <a href="/booking">Reservations</a>
                <a href="/">Order Online</a>
                <a href="/">Login</a>
                
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Nav