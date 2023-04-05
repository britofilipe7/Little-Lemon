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
                <p className="footer-section-title">Doormat Navigation</p>
                <p className="footer-section-text">Home</p>
                <p className="footer-section-text">About</p>
                <p className="footer-section-text">Menu</p>
                <p className="footer-section-text">Reservations</p>
                <p className="footer-section-text">Order online</p>
                <p className="footer-section-text">Login</p>
            </div>

            <div className='footer-section' id="stacked">
                <p className="footer-section-title">Contact</p>
                <p className="footer-section-text">Adress</p>
                <p className="footer-section-text">phone number</p>
                <p className="footer-section-text">email</p>
            </div>

            <div className='footer-section' id="stacked">
                <p className="footer-section-title">Social Media Links</p>
                <p className="footer-section-text">Facebook</p>
                <p className="footer-section-text">Instagram</p>
            </div>
        </footer>
    )
}

export default Footer