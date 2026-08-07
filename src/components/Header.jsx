import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/materials', label: 'Materials' },
  { to: '/craftsmanship', label: 'Craftsmanship' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <NavLink to="/" className="logo" onClick={close}>
          <span className="logo-mark">W</span>
          <span className="logo-text">WALI <em>Marble &amp; Granite</em></span>
        </NavLink>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className="nav-link" onClick={close}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-gold nav-cta" onClick={close}>Get a Quote</NavLink>
        </nav>

        <button className={`menu-toggle ${open ? 'is-open' : ''}`} aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
