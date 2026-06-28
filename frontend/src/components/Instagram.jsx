export default function Instagram() {
  return (
    <section className="section instagram" id="instagram">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Follow Along</p>
          <h2 className="section-title">On Instagram</h2>
          <div className="section-rule" />
          <p className="section-lead">
            See our latest details, paint corrections, and ceramic coatings on Instagram.
          </p>
        </div>

        <a
          href="https://www.instagram.com/williamson.prestige"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-screenshot"
          aria-label="View @williamson.prestige on Instagram"
        >
          <img
            src="/images/instagram-feed.webp"
            alt="Williamson Prestige Instagram feed — recent posts"
            loading="lazy"
          />
        </a>

        <div className="instagram-cta">
          <a
            href="https://www.instagram.com/williamson.prestige"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Follow @williamson.prestige
          </a>
        </div>
      </div>
    </section>
  )
}
