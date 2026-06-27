import { useEffect } from 'react'

// 1. Go to https://lightwidget.com and connect @williamson.prestige
// 2. Customise the grid layout, then copy the widget ID from the embed code
// 3. Paste it below — the feed will appear immediately
const WIDGET_ID = 'd83bf06feb735b98b2856d067b8f4062'

export default function Instagram() {
  useEffect(() => {
    if (!WIDGET_ID) return
    const script = document.createElement('script')
    script.src = '//cdn.lightwidget.com/widgets/lightwidget.plugin.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
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

        {WIDGET_ID ? (
          <div className="instagram-feed">
            <iframe
              src={`//lightwidget.com/widgets/${WIDGET_ID}.html`}
              scrolling="no"
              allowTransparency="true"
              className="lightwidget-widget"
              style={{ width: '100%', border: 0, overflow: 'hidden', minHeight: 420 }}
              title="Instagram feed — @williamson.prestige"
            />
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
