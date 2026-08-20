import { skills } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((g, i) => (
          <Reveal className="skill-card" key={g.group} delay={i * 70}>
            <div className="skill-group mono">{g.group}</div>
            <div className="tag-row">
              {g.items.map((item) => (
                <span className="skill-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
