import { NavLink } from 'react-router-dom'
import { company } from '../data/company.js'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-mark">W</span>
            <span className="logo-text">WALI <em>Marble &amp; Granite</em></span>
          </div>
          <p>{company.tagline}. Marble, granite, onyx and travertine installation, inlay work, mosaic medallions and facades — under one platform. {company.location}. Import and export worldwide.</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><NavLink to="/materials">Materials</NavLink></li>
            <li><NavLink to="/craftsmanship">Craftsmanship</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>{company.phone}</li>
            <li>{company.email}</li>
            <li>{company.address}</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow</h4>
          <ul>
            <li><a href={`https://${company.youtube}`} target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>Established {company.established} · Lahore, Pakistan</span>
      </div>
    </footer>
  )
}
