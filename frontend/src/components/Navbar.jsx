import { useState, useEffect } from 'react'

const LINKS = [
  ['services', 'Services'],
  ['why-us', 'Why Us'],
  ['testimonials', 'Reviews'],
  ['contact', 'Contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <div className="navbar-logo" onClick={() => nav('hero')}>
          <span className="logo-top">Williamson</span>
          <span className="logo-main">Prestige</span>
        </div>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <button onClick={() => nav(id)}>{label}</button>
            </li>
          ))}
        </ul>

        <button className="btn btn-gold navbar-cta" onClick={() => nav('contact')}>
          Book Now
        </button>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
