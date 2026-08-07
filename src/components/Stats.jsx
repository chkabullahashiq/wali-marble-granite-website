import { stats } from '../data/company.js'
import '../styles/Stats.css'

export default function Stats() {
  return (
    <section className="stats-strip">
      <div className="container stats-grid">
        {stats.map(([n, l]) => (
          <div key={l} className="stat">
            <span className="stat-num">{n}</span>
            <span className="stat-label">{l}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
