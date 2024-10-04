import { Link } from 'react-router-dom'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="social-media">
        <p>DISCOVER US ON SOCIAL MEDIA</p>
        <div className="sm-images">
          <a href="https://discord.gg/sWpjfHVuuT" target="_blank" rel = "noopener noreferrer">
            <img src="public/static/images/discord.svg" />
          </a>
          <a href="https://github.com/mtsac-cs" target="_blank" rel = "noopener noreferrer">
            <img src="public/static/images/github.svg" />
          </a>
          <a href="https://www.instagram.com/cs.mtsac/" target="_blank" rel = "noopener noreferrer">
            <img src="public/static/images/instagram.svg" />
          </a>
        </div>
      </div>

      <div className="direct-links">
        <div className="f-duckimg">
          <img src="public/static/images/rubber duck.png" alt="Rubber Duck" className="footer-image" />
          <h2>at Mt. SAC</h2>
        </div>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="#">Events</Link></li>
            <li><Link to="/about">Team</Link></li>
            <li><Link to="#">Open Source</Link></li>
            <li><Link to="#">Join Us</Link></li>
          </ul>
      </div>

    </footer>
  )
}

export default Footer;
