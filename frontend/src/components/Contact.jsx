import { useState } from 'react'

const SERVICES = [
  'Mini Valet',
  'Full Valet',
  'Interior Detail',
  'Paint Correction',
  'Ceramic Coating',
  'Pre-Sale Detail',
  "Not sure — I'd like some advice",
]

const EMPTY = { name: '', email: '', phone: '', vehicle: '', service: '', date: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState(null)
  const [feedback, setFeedback] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setFeedback(data.message)
        setForm(EMPTY)
      } else {
        setStatus('error')
        setFeedback(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setFeedback('Unable to send your message. Please check your connection and try again.')
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-layout">

          <div className="contact-info">
            <p className="section-eyebrow">Get in Touch</p>
            <h2 className="contact-info-title">Book Your Detail</h2>
            <div className="section-rule" />
            <p className="contact-info-text">
              Ready to give your vehicle the care it deserves? Fill in the form and we'll
              get back to you with a personalised quote — usually within a few hours.
            </p>
            <ul className="contact-details">
              <li>
                <span className="contact-detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </span>
                <span>Mobile service — we come to you. Covering [Your Area] and surrounding regions.</span>
              </li>
              <li>
                <span className="contact-detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.16 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </span>
                <span>07xxx xxxxxx</span>
              </li>
              <li>
                <span className="contact-detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <span>hello@williamsonprestige.co.uk</span>
              </li>
              <li>
                <span className="contact-detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <span>Monday – Saturday, 8am – 6pm</span>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input id="name" type="text" value={form.name} onChange={set('name')} required placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" value={form.email} onChange={set('email')} required placeholder="your@email.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="07xxx xxxxxx" />
              </div>
              <div className="form-group">
                <label htmlFor="vehicle">Vehicle</label>
                <input id="vehicle" type="text" value={form.vehicle} onChange={set('vehicle')} placeholder="e.g. BMW 3 Series" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="service">Service</label>
                <select id="service" value={form.service} onChange={set('service')}>
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input id="date" type="date" value={form.date} onChange={set('date')} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                value={form.message}
                onChange={set('message')}
                required
                placeholder="Any additional details about your vehicle or requirements…"
              />
            </div>

            <button type="submit" className="btn btn-gold form-submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
            </button>

            {feedback && (
              <div className={`form-feedback ${status}`}>{feedback}</div>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}
