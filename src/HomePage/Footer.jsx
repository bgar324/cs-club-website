import { Link } from 'react-router-dom'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <h2>FIND US ON SOCIAL MEDIA</h2>
        <img src="public/static/images/rubber duck.png" alt="Rubber Duck" className="footer-image" />
        <h2>at Mt. SAC</h2>
        <ul className="footer-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="#">Events</Link></li>
          <li><Link to="/about">Team</Link></li>
          <li><Link to="#">Projects</Link></li>
          <li><Link to="#">Join Us</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
