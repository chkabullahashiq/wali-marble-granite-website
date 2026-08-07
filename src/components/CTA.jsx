import { NavLink } from 'react-router-dom'
import { company } from '../data/company.js'
import '../styles/CTA.css'

export default function CTA() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <span className="label label--light">Let Us Quote Your Project</span>
          <h2>Send drawings, photos or an area figure — we'll return material options and pricing.</h2>
        </div>
        <div className="cta-actions">
          <NavLink to="/contact" className="btn btn-gold">Request a Quote</NavLink>
          <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">WhatsApp Us</a>
        </div>
      </div>
    </section>
  )
}
