import { education, certifications, languages, profile } from '../data.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <h2>About</h2>
      <div className="about-grid">
        <Reveal>
          <p className="about-lead">
            I take features from architecture to production: data models, APIs, authentication, real-time sync, and the
            interfaces on top of them — shipped to web, desktop, and mobile from a shared codebase strategy.
          </p>
          <div className="about-cols">
            <div>
              <div className="about-label mono">Education</div>
              <div className="about-line">{education.degree}</div>
              <div className="about-sub">
                {education.school}
                <br />
                {education.location} · {education.period}
              </div>
            </div>
            <div>
              <div className="about-label mono">Certifications</div>
              <div className="about-list">
                {certifications.map((c) => (
                  <div key={c}>{c}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="about-label mono">Languages</div>
              <div className="about-list">
                {languages.map((l) => (
                  <div key={l.name}>
                    {l.name} — {l.level}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="about-portrait">
          <div className="visual visual-4x5" aria-hidden="true">
            <div className="visual-top">{profile.location}</div>
            <div>
              <div className="visual-mark">DA</div>
              <div className="visual-title">
                {profile.role} · {profile.subRole}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
