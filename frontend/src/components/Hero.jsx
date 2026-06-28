const STATS = [
  { number: '5★', label: 'Average Rating' },
  { number: '4+', label: 'Years Experience' },
]

export default function Hero() {
  const nav = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Vehicle,<br />
            Our <em>Obsession</em>
          </h1>
          <p className="hero-lead">
            Professional mobile valeting and detailing — we come to you at home or work.
            Showroom results, delivered to your door.
          </p>
          <div className="hero-actions">
            <button className="btn btn-gold" onClick={() => nav('contact')}>Get a Quote</button>
            <button className="btn btn-outline" onClick={() => nav('services')}>View Services</button>
          </div>

          <div className="hero-stats">
            {STATS.map((s, i) => (
              <>
                {i > 0 && <div key={`d-${i}`} className="hero-stat-divider" />}
                <div key={s.number}>
                  <div className="hero-stat-number">{s.number}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
