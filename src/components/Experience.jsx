import { experience } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Career</p>
          <h2 className="section-title">Work Experience</h2>
        </Reveal>
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 60}>
              <div className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-card">
                  <div className="timeline-head">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="timeline-company">{job.company}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-period">{job.period}</span>
                      <span className="timeline-location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="timeline-points">
                    {job.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                  <div className="project-tags">
                    {job.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
