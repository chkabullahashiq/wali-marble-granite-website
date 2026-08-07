import { whyUs } from '../data/company.js'
import '../styles/WhyUs.css'

export default function WhyUs() {
  return (
    <section className="section why-us-section">
      <div className="container">
        <span className="label">Why Wali Marble &amp; Granite</span>
        <h2>What you get by working with us</h2>

        <div className="why-grid">
          {whyUs.map((w, i) => (
            <div className="why-card card" key={w.title}>
              <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
