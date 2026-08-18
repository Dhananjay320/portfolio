import { skills } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Toolbox</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </Reveal>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <div className="skill-card">
                <h3>{group.group}</h3>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
