import { profile } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const year = new Date().getFullYear()
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let's Build Something</h2>
            <p className="contact-text">
              Open to full-stack and application development opportunities. The fastest way to
              reach me is email — I usually reply within a day.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                {profile.phone}
              </a>
            </div>
            <div className="contact-links">
              <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
              <span>·</span>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <span>·</span>
              <a href={profile.links.playstore} target="_blank" rel="noreferrer">Play Store</a>
            </div>
          </div>
        </Reveal>
        <footer className="footer">
          <p>© {year} {profile.name} · Built with React, deployed on Vercel</p>
        </footer>
      </div>
    </section>
  )
}
