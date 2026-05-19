const IconMobile = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
)

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
)

const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const IconAward = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
  </svg>
)

const POINTS = [
  {
    Icon: IconMobile,
    title: 'We Come to You',
    desc: 'No drop-offs, no waiting around. We work at your home, office, or anywhere convenient — saving you time and effort.',
  },
  {
    Icon: IconShield,
    title: 'Fully Insured',
    desc: 'All work is fully insured for complete peace of mind. Your vehicle is in safe, professional hands throughout.',
  },
  {
    Icon: IconStar,
    title: 'Premium Products',
    desc: 'We use only professional-grade, industry-leading products — no shortcuts, no compromise on the finish we deliver.',
  },
  {
    Icon: IconAward,
    title: 'Trusted & Experienced',
    desc: 'Over a decade of automotive detailing experience with hundreds of satisfied customers and a five-star reputation.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us section">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">The Williamson Difference</p>
          <h2 className="section-title">Why Choose Us</h2>
          <div className="section-rule" />
          <p className="section-lead">
            We take pride in every vehicle we touch. Here's what sets Williamson Prestige apart.
          </p>
        </div>
        <div className="why-grid">
          {POINTS.map(({ Icon, title, desc }) => (
            <div className="why-card" key={title}>
              <div className="why-icon">
                <Icon />
              </div>
              <h3 className="why-title">{title}</h3>
              <p className="why-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
