import React from 'react';
import Logo from "./assets/Logo.svg";
import "./styles/Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className='section'>
                <img src={Logo} alt="Little lemon logo" id='footer_logo'></img>
            </div>
            
            <div className='footer-section' id="stacked">
                <p class="footer-section-title">Doormat Navigation</p>
                <p class="footer-section-text">Home</p>
                <p class="footer-section-text">About</p>
                <p class="footer-section-text">Menu</p>
                <p class="footer-section-text">Reservations</p>
                <p class="footer-section-text">Order online</p>
                <p class="footer-section-text">Login</p>
            </div>

            <div className='footer-section' id="stacked">
                <p class="footer-section-title">Contact</p>
                <p class="footer-section-text">Adress</p>
                <p class="footer-section-text">phone number</p>
                <p class="footer-section-text">email</p>
            </div>

            <div className='footer-section' id="stacked">
                <p class="footer-section-title">Social Media Links</p>
                <p class="footer-section-text">Facebook</p>
                <p class="footer-section-text">Instagram</p>
            </div>
            
        </footer>
    )
}

export default Footer