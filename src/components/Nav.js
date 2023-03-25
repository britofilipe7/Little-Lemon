import React from 'react';
import Logo from "../components/assets/Logo.svg"
import "../components/styles/Nav.css"

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="Little lemon logo"/>
            <ul className="nav-links">
                <li><a href="www.google.pt">Home</a></li>
                <li><a href="www.google.pt">About</a></li>
                <li><a href="www.google.pt">Menu</a></li>
                <li><a href="www.google.pt">Reservations</a></li>
                <li><a href="www.google.pt">Order Online</a></li>
                <li><a href="www.google.pt">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav