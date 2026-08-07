import { NavLink } from 'react-router-dom'
import heroImg from '../assets/photos/hero-staircase.jpg'
import { company } from '../data/company.js'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="Marble staircase installation by Wali Marble & Granite" className="hero-bg" />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <span className="label label--light">{company.tagline}</span>
        <h1>Marble &amp; Granite,<br />Carved for Lahore's<br />Finest Interiors</h1>
        <p>
          Wali Marble &amp; Granite runs eighteen stone trades under one roof — installation,
          gangsaw slabs, hand-cut inlay, mosaic medallions and mechanical facades — for
          homeowners, architects and developers. Import and export worldwide.
        </p>
        <div className="hero-actions">
          <NavLink to="/projects" className="btn btn-gold">View Our Projects</NavLink>
          <NavLink to="/contact" className="btn btn-outline-light">Request a Quote</NavLink>
        </div>
      </div>

      <div className="hero-scroll">Scroll</div>
    </section>
  )
}
