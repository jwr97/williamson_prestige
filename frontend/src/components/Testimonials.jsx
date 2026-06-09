const GOOGLE_URL = 'https://www.google.com/maps/place/Williamson+Prestige/@52.7215916,0.1669921,12.75z/data=!4m16!1m9!3m8!1s0xc9dbe9ce8beb2fd:0xaa7535ed1a470f95!2sWilliamson+Prestige!8m2!3d52.7743704!4d0.257313!9m1!1b1!16s%2Fg%2F11nhq7t9gw!3m5!1s0xc9dbe9ce8beb2fd:0xaa7535ed1a470f95!8m2!3d52.7743704!4d0.257313!16s%2Fg%2F11nhq7t9gw'

const REVIEWS = [
  {
    text: 'Fabulous deep clean service by Williamson Prestige on my car - it looked like brand new! So very impressed by the service provided, i am now on the monthly maintenance plan to give my car that special new look every month! 100% recommend the deep clean and monthly plan!',
    author: 'Bridget Taylor',
    initials: 'BT',
    date: 'May 2026',
  },
  {
    text: "I used Williamson Prestige's Exterior Reset for the first time yesterday and I was VERY impressed. Very punctual and soon set up the necessary kit. My car has never been as clean from tyres to roof. The alloy wheels look like new. The whole car is absolutely perfect. Really good value for money. I will be making another booking quite soon.",
    author: 'David Wright',
    initials: 'DW',
    date: 'May 2026',
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
            Real reviews from real customers — verified on Google.
          </p>
        </div>

        <div className="reviews-rating-bar">
          <div className="google-g">G</div>
          <div>
            <div className="reviews-rating-score">5.0</div>
            <div className="reviews-rating-stars">★★★★★</div>
            <div className="reviews-rating-count">2 reviews on Google</div>
          </div>
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-rating-link"
          >
            View on Google Maps ↗
          </a>
        </div>

        <div className="testimonials-grid">
          {REVIEWS.map((r) => (
            <div className="testimonial-card" key={r.author}>
              <div className="testimonial-avatar">{r.initials}</div>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{r.text}"</p>
              <p className="testimonial-author">{r.author}</p>
              <p className="testimonial-vehicle">{r.date} · Google review</p>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            See all reviews on Google
          </a>
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            ★ Leave a review
          </a>
        </div>
      </div>
    </section>
  )
}
