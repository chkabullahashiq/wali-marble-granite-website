import { NavLink } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import PhotoShowcase from '../components/PhotoShowcase.jsx'
import WhyUs from '../components/WhyUs.jsx'
import CTA from '../components/CTA.jsx'
import { craftDisciplines, materials } from '../data/company.js'
import villaFacade from '../assets/photos/villa-facade.jpg'
import pietraDura from '../assets/photos/pietra-dura-inlay.jpg'
import backlitOnyx from '../assets/photos/backlit-onyx-counter.jpg'
import breccia from '../assets/photos/breccia-marble-slab.jpg'
import '../styles/Home.css'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="section">
        <div className="container gallery-stack">
          <PhotoShowcase
            image={villaFacade}
            tagline="Signature Work"
            title="Villas, Facades &amp; Complete Elevations"
            text="From classical cladding and cornice moulding to entrance monuments and balustrades, our facade work is fixed on stainless-steel clamps and anchors — a ventilated cavity, controlled joints and panels that can be removed individually."
          >
            <NavLink to="/projects" className="btn btn-dark">View Selected Work</NavLink>
          </PhotoShowcase>

          <PhotoShowcase
            image={pietraDura}
            tagline="Craft Disciplines"
            title="Hand-Cut Inlay &amp; Pietra Dura"
            text="Every element is cut by hand from coloured marble, onyx and semi-precious stone, filed to fit and polished flat. A single Mughal-style panel can take our craftsmen weeks to complete."
            reverse
          >
            <NavLink to="/craftsmanship" className="btn btn-dark">Explore Our Craft</NavLink>
          </PhotoShowcase>

          <PhotoShowcase
            image={backlitOnyx}
            tagline="Signature Material"
            title="Backlit Onyx"
            text="Onyx is translucent. Lit from behind, a 20mm panel turns its veining into a light source. We build the frame, the LED cavity and the stone together so it reads as one continuous surface."
          >
            <NavLink to="/materials" className="btn btn-dark">See Our Materials</NavLink>
          </PhotoShowcase>

          <PhotoShowcase
            image={breccia}
            tagline="Export Stock"
            title="Slab Inventory, Ready for Container"
            text="Our stock yard holds imported and locally quarried slabs in book-matched bundles — marble, granite, onyx, quartzite and travertine in white, grey, beige, green, blue, gold and black families."
            reverse
          >
            <NavLink to="/contact" className="btn btn-dark">Request Slab Photographs</NavLink>
          </PhotoShowcase>
        </div>
      </section>

      <section className="section-tight materials-preview">
        <div className="container">
          <span className="label">Materials We Handle</span>
          <h2>Stone selected slab by slab</h2>
          <p className="lead">The main marble, onyx and granite belts run through Balochistan, KPK, Gilgit-Baltistan and Punjab. We buy direct and select at block and slab level.</p>

          <div className="materials-preview-grid">
            {materials.map((m) => (
              <div className="material-chip card" key={m.name}>
                <h3>{m.name}</h3>
                <p>{m.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight craft-preview">
        <div className="container">
          <span className="label">Craft Disciplines</span>
          <h2>Machine precision, finished by hand</h2>

          <div className="craft-preview-grid">
            {craftDisciplines.map((c) => (
              <div className="craft-chip" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <CTA />
    </>
  )
}
