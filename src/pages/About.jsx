import workshopTable from '../assets/photos/workshop-mosaic-table.jpg'
import { company } from '../data/company.js'
import '../styles/About.css'

const exportInfo = [
  ['Export', 'Blocks, slabs, cut-to-size tiles, medallions, mosaics, carved elements, furniture and complete project packages.'],
  ['Import', 'Italian, Turkish, Greek, Spanish and Brazilian marble, granite, onyx and quartzite held in stock.'],
  ['Container Loading', 'Bundled and crated to international standards, fumigated timber, palletised and shrink-wrapped where required.'],
  ['Documentation', 'Commercial invoice, packing list, certificate of origin and shipping papers prepared with our clearing agent.'],
  ['Samples', 'Sample sets couriered worldwide before order confirmation.'],
  ['Terms', 'FOB, CFR and CIF quoted from Karachi / Port Qasim on request.'],
]

export default function About() {
  return (
    <>
      <section className="section-tight about-hero">
        <div className="container">
          <span className="label">The Company</span>
          <h1>One Platform for Every Stone Trade</h1>
          <p className="lead">
            We deal in all kinds of marble and granite installation — flooring, gangsaw
            slabs, inlay work, mosaic medallions and facade work. We carry out
            mechanical dry cladding with stainless-steel clamps, and produce columns,
            cornice mouldings, CNC fluting, tree artwork and designer floors, finished
            with full polishing.
          </p>
          <p>
            We supply Italian and other imported material alongside our own
            quarry-sourced stone, and we handle epoxy, waterproofing and stone-care
            chemicals. Everything sits on one platform, so a project does not have to
            be split across five vendors. Our showroom and factory are at {company.address},
            where we hold our own slab inventory, run our own cutting floor, and employ
            craftsmen who cut inlay, lay mosaic and carve relief by hand.
          </p>
        </div>
      </section>

      <section className="about-image-section">
        <img src={workshopTable} alt="Inside the Wali Marble & Granite workshop on Raiwind Road" />
      </section>

      <section className="section global-reach-section">
        <div className="container">
          <span className="label label--light">Global Reach</span>
          <h2>We Import and Export Worldwide</h2>
          <p className="lead">
            Pakistan holds some of the largest stone reserves in the world and we buy
            at the source — direct-from-origin pricing on Ziarat White, Badal Grey,
            Tavera, Michelangelo Black &amp; Gold and the full onyx range.
          </p>

          <div className="export-grid">
            {exportInfo.map(([t, d]) => (
              <div className="export-item" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight quality-section">
        <div className="container quality-grid">
          <div>
            <span className="label">Quality Control</span>
            <h2>Checked before it leaves the workshop</h2>
          </div>
          <div className="quality-steps">
            <div><h4>Block &amp; Slab</h4><p>Inspected for cracks, patching, resin fill and colour deviation before cutting.</p></div>
            <div><h4>Cutting</h4><p>Thickness, squareness and edge profile checked against the cutting list at each stage.</p></div>
            <div><h4>Pattern Work</h4><p>Medallions, mosaics and inlay panels dry-laid complete and photographed for client approval.</p></div>
            <div><h4>Packing</h4><p>Each piece numbered to the laying drawing, edge-protected and braced before the crate is closed.</p></div>
            <div><h4>Site</h4><p>Final polish, joint and level check after installation, followed by clean-down and handover.</p></div>
          </div>
        </div>
      </section>
    </>
  )
}
