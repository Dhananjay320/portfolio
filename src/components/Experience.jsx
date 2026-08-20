import { experience } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section exp-section">
      <h2>Experience</h2>
      {experience.map((e) => (
        <Reveal className="exp-item" key={e.company}>
          <div>
            <div className="exp-period">{e.period}</div>
            <div className="exp-company">{e.company}</div>
            <div className="exp-location">{e.location}</div>
          </div>
          <div className="exp-body">
            <h3>{e.role}</h3>
            <div className="exp-points">
              {e.points.map((pt) => (
                <div className="exp-point" key={pt}>
                  <span className="exp-bullet">·</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
            <div className="tag-row">
              {e.tags.map((t) => (
                <span className="pill" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
