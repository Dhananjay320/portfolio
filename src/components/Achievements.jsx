import { achievements } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="achievement-card">
                <div className="achievement-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
