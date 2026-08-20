import { profile } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Stats() {
  return (
    <section className="stats">
      {profile.stats.map((s, i) => (
        <Reveal className="stat" key={s.label} delay={i * 60}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label mono">{s.label}</div>
        </Reveal>
      ))}
    </section>
  )
}
