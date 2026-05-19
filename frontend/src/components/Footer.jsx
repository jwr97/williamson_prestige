const LINKS = [
  ['services', 'Services'],
  ['why-us', 'Why Us'],
  ['testimonials', 'Reviews'],
  ['contact', 'Contact'],
]

export default function Footer() {
  const nav = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo navbar-logo">
              <span className="logo-top">Williamson</span>
              <span className="logo-main">Prestige</span>
            </div>
            <p className="footer-tagline">Professional Mobile Valeting &amp; Detailing</p>
          </div>
          <ul className="footer-links">
            {LINKS.map(([id, label]) => (
              <li key={id}>
                <button onClick={() => nav(id)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} <span>Williamson Prestige</span>. All rights reserved.
          </p>
          <p className="footer-copy">Fully insured &bull; Professional-grade products</p>
        </div>
      </div>
    </footer>
  )
}
