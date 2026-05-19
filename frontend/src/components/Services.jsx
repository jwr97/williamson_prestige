const SERVICES = [
  {
    name: 'Mini Valet',
    desc: 'Exterior hand wash and dry, interior vacuum, dashboard and console wipe, and glass clean. Perfect for regular maintenance.',
    price: '£45',
  },
  {
    name: 'Full Valet',
    desc: 'Everything in the Mini Valet plus a deep interior clean, door shuts, tyre and trim dressing, and a hand-applied wax for lasting protection.',
    price: '£120',
  },
  {
    name: 'Interior Detail',
    desc: 'Deep extraction and steam clean, leather conditioning or fabric shampoo, odour neutralisation, and a pristine cabin finish throughout.',
    price: '£150',
  },
  {
    name: 'Paint Correction',
    desc: 'Machine polishing to remove swirl marks, light scratches, and oxidation. Restores true depth, gloss, and clarity to your paintwork.',
    price: '£280',
  },
  {
    name: 'Ceramic Coating',
    desc: 'Professional nano-ceramic coating providing 2–5 years of hydrophobic paint protection, UV resistance, and a permanent high-gloss finish.',
    price: '£450',
  },
  {
    name: 'Pre-Sale Detail',
    desc: 'Full valet with targeted paint enhancement and a showroom-level finish — maximise your vehicle\'s presentation and achieve the best sale price.',
    price: '£175',
  },
]

export default function Services() {
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
              <p className="service-desc">{s.desc}</p>
              <p className="service-price">
                <span className="service-price-from">from </span>{s.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
