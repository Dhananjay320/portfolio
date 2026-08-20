import { profile } from '../data.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-kicker mono">
        <span>
          {profile.role} · {profile.subRole}
        </span>
        <span>
          <span className="hero-live-dot" />
          {profile.location} — Available
        </span>
      </div>
      <h1>
        Building software
        <br />
        that ships to
        <br />
        <span className="accent">web, desktop &amp; mobile.</span>
      </h1>
      <div className="rule" />
      <div className="hero-bottom">
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            Selected work
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
