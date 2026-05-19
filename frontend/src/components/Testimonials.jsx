const REVIEWS = [
  {
    text: 'Jack completely transformed my BMW M3. The paint correction removed years of swirl marks I genuinely thought were permanent. Incredible work — it looked better than the day I bought it.',
    author: 'James T.',
    vehicle: 'BMW M3 Competition',
  },
  {
    text: 'Had the Full Valet on my Range Rover Sport. Arrived on time, professional throughout, and the results were showroom standard. Exactly the kind of service you hope for.',
    author: 'Sarah M.',
    vehicle: 'Range Rover Sport',
  },
  {
    text: 'Used Williamson Prestige for a pre-sale detail on my Porsche 911. It sold within a week at the full asking price. The presentation made all the difference.',
    author: 'Marcus R.',
    vehicle: 'Porsche 911 Carrera',
  },
  {
    text: 'Booked the ceramic coating and I\'m delighted with the result. The car beads water like nothing I\'ve seen before. Absolutely worth every penny for long-term protection.',
    author: 'David K.',
    vehicle: 'Audi RS6 Avant',
  },
  {
    text: 'As a busy professional I really value the mobile service. They came to my office while I was in meetings and the car was immaculate when I got back. Completely seamless.',
    author: 'Emma L.',
    vehicle: 'Mercedes-AMG C43',
  },
  {
    text: 'The interior detail on our family SUV was incredible. Two kids and a dog had done serious damage — they made it look brand new. Highly recommend to anyone.',
    author: 'Paul & Gill W.',
    vehicle: 'Volkswagen Touareg',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Customer Reviews</p>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="section-rule" />
          <p className="section-lead">
            Don't take our word for it. Here's what our customers say about Williamson Prestige.
          </p>
        </div>
        <div className="testimonials-grid">
          {REVIEWS.map((r) => (
            <div className="testimonial-card" key={r.author}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{r.text}"</p>
              <p className="testimonial-author">{r.author}</p>
              <p className="testimonial-vehicle">{r.vehicle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
