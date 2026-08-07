import PhotoShowcase from '../components/PhotoShowcase.jsx'
import CTA from '../components/CTA.jsx'
import { craftDisciplines, services } from '../data/company.js'
import pietraDura from '../assets/photos/pietra-dura-inlay.jpg'
import floorMedallion from '../assets/photos/floor-medallion.jpg'
import cncCarving from '../assets/photos/cnc-carving.jpg'
import backlitOnyx from '../assets/photos/backlit-onyx-counter.jpg'
import workshopTable from '../assets/photos/workshop-mosaic-table.jpg'
import '../styles/Craftsmanship.css'

export default function Craftsmanship() {
  return (
    <>
      <section className="section-tight craft-hero">
        <div className="container">
          <span className="label">Craft Disciplines</span>
          <h1>Machine Precision, Finished by Hand</h1>
          <p className="lead">
            Machine cutting gives repeatability; hand assembly gives the pattern its
            life. Most of our floor, screen and fluting work uses both — and our
            inlay, mosaic and relief work is genuinely hand-made, not printed or cast.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container gallery-stack">
          <PhotoShowcase
            image={pietraDura}
            tagline={craftDisciplines[0].title}
            title="Inlay &amp; Pietra Dura"
            text={craftDisciplines[0].text}
          />
          <PhotoShowcase
            image={floorMedallion}
            tagline={craftDisciplines[1].title}
            title="Mosaic &amp; Floor Medallions"
            text={craftDisciplines[1].text}
            reverse
          />
          <PhotoShowcase
            image={cncCarving}
            tagline={craftDisciplines[2].title}
            title="CNC, Waterjet &amp; Fluting"
            text={craftDisciplines[2].text}
          />
          <PhotoShowcase
            image={backlitOnyx}
            tagline={craftDisciplines[4].title}
            title="Backlit Onyx"
            text={craftDisciplines[4].text}
            reverse
          />
          <PhotoShowcase
            image={workshopTable}
            tagline="Inside the Workshop"
            title="Dry-Laid and Approved Before It's Packed"
            text="Patterned floors, medallions and carved elements are drawn, approved, dry-laid and photographed in our Raiwind Road workshop before anything is crated for site."
          />
        </div>
      </section>

      <section className="section-tight services-list-section">
        <div className="container">
          <span className="label">What We Deal In</span>
          <h2>Eighteen trades, one platform</h2>
          <p className="lead">All of it produced and installed by our own teams.</p>

          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-item" key={s.title}>
                <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
