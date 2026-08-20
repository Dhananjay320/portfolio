import { useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No backend here — hand the message to the visitor's mail client.
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = f.get('name') || ''
    const email = f.get('email') || ''
    const message = f.get('message') || ''
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-grid">
        <div>
          <span className="mono" style={{ color: 'var(--dim-45)' }}>
            Contact
          </span>
          <h2>
            Let&apos;s build
            <br />
            <span className="accent">something.</span>
          </h2>
          <div className="contact-lines">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </div>
          <div className="contact-socials">
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.links.playstore} target="_blank" rel="noreferrer">
              Play Store
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="What are you building?" required />
          </label>
          <button type="submit" className="btn btn-primary">
            {sent ? 'Opened in your mail app ✓' : 'Send message'}
          </button>
        </form>
      </div>

      <div className="footer mono">
        <span>
          {profile.name} — {profile.role}
        </span>
        <span>{profile.location} · 2026</span>
      </div>
    </section>
  )
}
