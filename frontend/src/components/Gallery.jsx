const BA_PAIRS = [
  {
    left:  { src: '/images/range-rover-after.jpeg',    alt: 'Range Rover Sport — exterior' },
    right: { src: '/images/range-rover-interior.jpeg', alt: 'Range Rover Sport — interior' },
    label: 'Maintenance Plan — Deep clean service for half the price, every month.',
  },
  {
    left:  { src: '/images/corsa-before.jpeg', alt: 'Vauxhall Corsa interior — before', badge: 'Before' },
    right: { src: '/images/corsa-after.jpeg',  alt: 'Vauxhall Corsa interior — after',  badge: 'After' },
    label: 'THE INTERIOR RESET — A full scrub and steam from roof lining to carpets. Freshly sanitised. Freshly cleaned. Freshly RESET.',
  },
  {
    left:  { src: '/images/defender-before.jpeg', alt: 'Land Rover Defender — heavily soiled', badge: 'Before' },
    right: { src: '/images/defender-after.jpeg',  alt: 'Land Rover Defender — exterior reset',  badge: 'After' },
    label: 'THE EXTERIOR RESET — An exterior safe wash and liquid decontamination, leaving your paintwork popping, no matter how dirty.',
  },
]

const GALLERY = [
  { src: '/images/porsche-macan.jpeg',            alt: 'Porsche Macan — exterior detail' },
  { src: '/images/porsche-panamera-interior.jpeg', alt: 'Porsche Panamera — interior detail' },
  { src: '/images/porsche-taycan-front.jpeg',     alt: 'Porsche Taycan 4S — front exterior' },
  { src: '/images/porsche-taycan-rear.jpeg',      alt: 'Porsche Taycan 4S — rear exterior' },
  { src: '/images/porsche-taycan-interior.jpeg',  alt: 'Porsche Taycan 4S — interior detail' },
  { src: '/images/exhaust-detail.jpeg',           alt: 'Exhaust pipe detail' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Our Work</p>
          <h2 className="section-title">Real Results</h2>
          <div className="section-rule" />
          <p className="section-lead">
            Every vehicle treated with the same meticulous care and professional-grade products — real customers, real transformations.
          </p>
        </div>

        <h3 className="gallery-subheading">Before &amp; After</h3>
        <div className="ba-pairs">
          {BA_PAIRS.map((pair) => (
            <div key={pair.label} className="ba-pair">
              <div className="ba-image">
                <img src={pair.left.src} alt={pair.left.alt} loading="lazy" />
                {pair.left.badge && <span className="ba-label ba-label-before">{pair.left.badge}</span>}
              </div>
              <div className="ba-image">
                <img src={pair.right.src} alt={pair.right.alt} loading="lazy" />
                {pair.right.badge && <span className="ba-label ba-label-after">{pair.right.badge}</span>}
              </div>
              <p className="ba-caption">{pair.label}</p>
            </div>
          ))}
        </div>

        <h3 className="gallery-subheading gallery-subheading--spaced">Recent Work</h3>
        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <div key={item.src} className="gallery-item">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
