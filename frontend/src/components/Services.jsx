import { useState } from 'react'

const SERVICES = [
  {
    name: 'Deep Clean',
    teaser: 'A thorough clean inside and out, leaving your vehicle with that deeply fresh showroom feeling.',
    desc: 'This package does exactly what it says. Your vehicle is left with that deeply fresh cleanliness both inside and out. This package also allows you access to our maintenance scheme, for those looking to keep their pride and joy at showroom standard.',
    price: '£120',
  },
  {
    name: 'Maintenance Plan',
    teaser: 'Keep that freshly deep cleaned look with regular visits — available to deep clean clients.',
    desc: 'Available to any of our clients that have received a deep clean by us within the past 4 weeks. Allow us to maintain that freshly deep cleaned look with weekly or monthly visits to safely wash the exterior and clean the interior, meaning your car\'s appearance stays clean and protected all year round.',
    price: '£60',
  },
  {
    name: 'The Interior Reset',
    teaser: 'Reset your interior back to factory state — a deep sanitisation, not just a wipe down.',
    desc: 'This service is for those who want that fresh interior feeling. If your car has heavily stained upholstery, shiny and greasy leather, or there are odours lurking in your car. This package resets your interior back to factory state. This isn\'t just a wipe down. This is a deep sanitisation to the whole of your interior.',
    price: '£70',
  },
  {
    name: 'The Exterior Reset',
    teaser: 'A safe wash and decontamination process leaving your exterior spotless and paintwork gleaming.',
    desc: 'Are you after a freshen up of your weekend toy? Maybe you have a car that is ceramic coated and it needs unclogging? Or you simply just want your paintwork to be popping. This is for vehicles that don\'t require any interior work. Our safe wash and decontamination process will leave your exterior spotless and your paintwork gleaming.',
    price: '£50',
  },
]

export default function Services() {
  const [expanded, setExpanded] = useState(null)
  const toggle = (name) => setExpanded(expanded === name ? null : name)

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <div className="section-rule" />
          <p className="section-lead">
            Every service is completed by hand using professional-grade products.
            Prices shown are a guide — contact us for an exact quote based on your vehicle.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className="service-card" key={s.name}>
              <div className="service-num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.teaser}</p>
              <div className={`service-more${expanded === s.name ? ' open' : ''}`}>
                <p className="service-full-desc">{s.desc}</p>
              </div>
              <div className="service-footer">
                <p className="service-price">
                  <span className="service-price-from">from </span>{s.price}
                </p>
                <button className="service-toggle" onClick={() => toggle(s.name)}>
                  {expanded === s.name ? 'Show less ↑' : 'More info ↓'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
