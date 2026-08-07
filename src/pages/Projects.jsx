import { NavLink } from 'react-router-dom'
import villaFacade from '../assets/photos/villa-facade.jpg'
import villaGate from '../assets/photos/villa-gate-project.jpg'
import staircase from '../assets/photos/staircase-project.jpg'
import heroStaircase from '../assets/photos/hero-staircase.jpg'
import floorMedallion from '../assets/photos/floor-medallion.jpg'
import backlitOnyx from '../assets/photos/backlit-onyx-counter.jpg'
import pietraDura from '../assets/photos/pietra-dura-inlay.jpg'
import workshopTable from '../assets/photos/workshop-mosaic-table.jpg'
import '../styles/Projects.css'

const projects = [
  { image: villaFacade, title: 'Classical Villa Elevation', category: 'Facade & Cladding', text: 'Full elevation cladding, cornice moulding and carved capitals for a private residence in Lahore.' },
  { image: heroStaircase, title: 'Curved Staircase, Book-Matched', category: 'Staircases', text: 'A sweeping marble staircase finished with brass balustrade detailing.' },
  { image: floorMedallion, title: 'Entrance Hall Medallion', category: 'Mosaic & Medallions', text: 'Pictorial mosaic medallion, dry-laid to the exact room dimension before installation.' },
  { image: backlitOnyx, title: 'Backlit Onyx Reception', category: 'Backlit Onyx', text: 'Continuous lit onyx counter front for a commercial lobby, built frame-and-stone as one surface.' },
  { image: pietraDura, title: 'Mughal-Style Inlay Panel', category: 'Inlay & Pietra Dura', text: 'Hand-cut floral pietra dura panel — coloured marble and semi-precious stone, weeks in the making.' },
  { image: villaGate, title: 'Entrance Monument & Gate', category: 'Facade & Cladding', text: 'Stone entrance piers and monument cladding, set out ahead of ironwork installation.' },
  { image: staircase, title: 'Residential Staircase', category: 'Staircases', text: 'Beige marble treads and risers, polished on site to a mirror finish.' },
  { image: workshopTable, title: 'Bespoke Mosaic Console', category: 'Designed Furniture', text: 'A one-off console table in mixed marble mosaic, cut and assembled at our Raiwind Road workshop.' },
]

export default function Projects() {
  return (
    <>
      <section className="section-tight projects-hero">
        <div className="container">
          <span className="label">Selected Work</span>
          <h1>Ten Projects, Shown One at a Time</h1>
          <p className="lead">Villas, halls, staircases, murals and floors delivered across Lahore — every photograph on the following pages was produced by Wali Marble &amp; Granite.</p>
        </div>
      </section>

      <section className="section-tight projects-grid-section">
        <div className="container projects-grid">
          {projects.map((p) => (
            <div className="project-card card" key={p.title}>
              <div className="project-img">
                <img src={p.image} alt={p.title} />
                <span className="project-cat">{p.category}</span>
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight projects-cta">
        <div className="container projects-cta-inner">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Send us drawings, photographs, or simply an area figure — we'll return material options and an itemised quotation.</p>
          </div>
          <NavLink to="/contact" className="btn btn-gold">Start Your Project</NavLink>
        </div>
      </section>
    </>
  )
}
