import { education, certifications, languages } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Background</p>
          <h2 className="section-title">Education & Certifications</h2>
        </Reveal>
        <div className="edu-grid">
          <Reveal>
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <h3>{education.degree}</h3>
              <p className="edu-school">{education.school}</p>
              <p className="edu-meta">
                {education.period} · {education.location}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="edu-card">
              <div className="edu-icon">📜</div>
              <h3>Certifications</h3>
              <ul className="cert-list">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="edu-card">
              <div className="edu-icon">🗣️</div>
              <h3>Languages</h3>
              <ul className="cert-list">
                {languages.map((l) => (
                  <li key={l.name}>
                    {l.name} — {l.level}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
