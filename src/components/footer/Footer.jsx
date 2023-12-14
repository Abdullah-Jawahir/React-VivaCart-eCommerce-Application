import React from 'react'
import './Footer.css'
import footerLogo from '../assets/vivacart-logo-small.png'
import insta from '../assets/instagram_icon.png'
import pinterest from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'


export const Footer = () => {

    const date = new Date();
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-logo">
                        <Link to='/'><img src={footerLogo} alt="" /></Link>
                    </div>
                    <nav className="footer-navbar">
                        <span className="nav-item">Company</span>
                        <span className="nav-item">Products</span>
                        <span className="nav-item">Offices</span>
                        <span className="nav-item">About</span>
                        <span className="nav-item">Contact</span>
                    </nav>

                    <div className="social-links">
                        <img src={insta} alt="" />
                        <img src={pinterest} alt="" />
                        <img src={whatsapp} alt="" />
                    </div>

                </div>

                <hr />

                <div className="footer-bottom">
                    <p>&copy; Copyright {date.getFullYear()}. All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}
