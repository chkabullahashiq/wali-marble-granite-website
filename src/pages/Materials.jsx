import { NavLink } from 'react-router-dom'
import { materials } from '../data/company.js'
import whiteSlab from '../assets/photos/white-statuario-slab.jpg'
import brecciaSlab from '../assets/photos/breccia-marble-slab.jpg'
import blackWhiteSlab from '../assets/photos/black-white-marble-slab.jpg'
import blackGoldSlab from '../assets/photos/black-gold-marble-slab.jpg'
import blackOnyxSlab from '../assets/photos/black-onyx-exotic-slab.jpg'
import '../styles/Materials.css'

const slabPhotos = [whiteSlab, brecciaSlab, blackWhiteSlab, blackGoldSlab, blackOnyxSlab]

export default function Materials() {
  return (
    <>
      <section className="section-tight materials-hero">
        <div className="container">
          <span className="label">Materials</span>
          <h1>Stone Selected Slab by Slab</h1>
          <p className="lead">
            The main marble, onyx and granite belts run through Balochistan, KPK,
            Gilgit-Baltistan and Punjab. We buy direct and select at block and slab
            level — stone varies from block to block; that variation is the material,
            not a defect.
          </p>
        </div>
      </section>

      <section className="section-tight slab-gallery">
        <div className="container slab-grid">
          {slabPhotos.map((img, i) => (
            <div className="slab-photo" key={i}>
              <img src={img} alt="Marble and granite slab from Wali Marble & Granite export stock" />
            </div>
          ))}
        </div>
        <p className="slab-note">Slab photographs available on request — rashidali@walimarbles.com</p>
      </section>

      <section className="section materials-list-section">
        <div className="container">
          {materials.map((m, i) => (
            <div className="material-row" key={m.name}>
              <span className="material-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2>{m.name}</h2>
                <p>{m.items}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight materials-cta">
        <div className="container materials-cta-inner">
          <div>
            <h2>Where consistency matters</h2>
            <p>We reserve slabs from one block and lay them out for approval before cutting — so what you see is what reaches site.</p>
          </div>
          <NavLink to="/contact" className="btn btn-gold">Request a Quote</NavLink>
        </div>
      </section>
    </>
  )
}
