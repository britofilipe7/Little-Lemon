import React from 'react';
import Logo from "./assets/Logo.svg";
import "./styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className='logo-section'>
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
                <p className="footer-section-text">2395 Maldove Way,</p>
                <p className="footer-section-text">Chicago Illinois</p>
                <p className="footer-section-text">(629)-243-6827</p>
                <p className="footer-section-text"><a href="mailto: info@littlelemon.com" target="_blank" rel="noreferrer">info@littlelemon.com</a></p>
            </div>

            <div className='footer-section' id="stacked">
                <p className="footer-section-title">Social Media Links</p>
                <p className="footer-section-text"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#1E3050,"}} /></a></p>
                <p className="footer-section-text"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#1E3050,"}} /></a></p>
                <p className="footer-section-text"><a href="https://www.coursera.com/" target="_blank" rel="noreferrer">Join us!</a></p>
            </div>
        </footer>
    )
}

export default Footer