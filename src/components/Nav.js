import React from 'react';
import Logo from "../components/assets/Logo.svg"
import "../components/styles/Nav.css"

import { Link as SmoothLink } from "react-scroll";
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className='navbar'>
                <img src={Logo} alt="Little lemon logo" id='Logo'/>
                <ul className="navbarLinks">
                    <li key={"Home"}><Link className="links" to="/">Home</Link></li>
                    <li key={"About"}><SmoothLink className="links" to="About" spy={true} smooth={true} duration={1000} offset={-64}>About</SmoothLink></li>
                    <li key={"Menu"}><SmoothLink className="links" to="Menu" spy={true} smooth={true} duration={1000}>Menu</SmoothLink></li>
                    <li key={"Reservations"}><Link className="links" to="/booking">Reservations</Link></li>
                    <li key={"OrderOnline"}><SmoothLink className="links" to="OrderOnline" spy={true} smooth={true} duration={1000}>Order Online</SmoothLink></li>
                    <li key={"Login"}><SmoothLink className="links" to="Login" spy={true} smooth={true} duration={1000}>Login</SmoothLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav