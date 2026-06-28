import { useEffect } from 'react'

// 1. Create a free feed at https://behold.so and connect @williamson.prestige
//    (Instagram must be a Business/Creator account linked to a Facebook Page)
// 2. Copy the feed ID from your Behold dashboard and paste it below
const FEED_ID = ''

export default function Instagram() {
  useEffect(() => {
    if (!FEED_ID) return
    const id = 'behold-widget-script'
    if (document.getElementById(id)) return
    const script = document.createElement('script')
    script.id = id
    script.type = 'module'
    script.src = 'https://w.behold.so/widget.js'
    document.body.appendChild(script)
  }, [])

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

        {FEED_ID ? (
          <div className="instagram-feed">
            <behold-widget feed-id={FEED_ID}></behold-widget>
          </div>
        ) : (
          <div className="instagram-setup">
            <div className="instagram-setup-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </div>
            <p className="instagram-setup-text">
              Instagram feed coming soon — follow us at{' '}
              <a href="https://www.instagram.com/williamson.prestige" target="_blank" rel="noopener noreferrer">
                @williamson.prestige
              </a>
            </p>
          </div>
        )}

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
