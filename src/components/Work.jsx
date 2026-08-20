import { projects } from '../data.js'
import Reveal from './Reveal.jsx'
import ProjectVisual from './ProjectVisual.jsx'

const niyoq = projects.find((p) => p.key === 'niyoq')
const featured = projects.filter((p) => p.featured && p.key !== 'niyoq')
const others = projects.filter((p) => !p.featured)

function Flagship({ onOpen }) {
  return (
    <section id="work" className="section flagship-section">
      <div className="section-head">
        <h2>Flagship</h2>
        <span className="meta mono">Lead developer · In production</span>
      </div>

      <Reveal
        as="article"
        className="flagship"
        role="button"
        tabIndex={0}
        onClick={() => onOpen(niyoq.key)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onOpen(niyoq.key))}
      >
        <div className="flagship-glow" aria-hidden="true" />
        <div className="flagship-grid">
          <div>
            <div className="mono accent">01 — {niyoq.subtitle}</div>
            <h3>{niyoq.title}</h3>
            <p>{niyoq.description}</p>
            <div className="tag-row">
              {niyoq.tags.map((t) => (
                <span className="pill" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="link-arrow">Read case study →</div>
          </div>
          <div>
            <div className="logo-frame">
              <img src="/niyoq-logo.png" alt="Niyoq logo" />
            </div>
            <div className="facts">
              <div>
                <div className="facts-label">Platforms</div>
                {niyoq.platforms}
              </div>
              <div>
                <div className="facts-label">Status</div>
                <span className="accent">{niyoq.status}</span>
              </div>
              <div>
                <div className="facts-label">Role</div>
                Lead developer
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Featured({ onOpen }) {
  return (
    <section className="section featured-section">
      <div className="section-head">
        <h2>Featured work</h2>
        <span className="meta mono">Case studies</span>
      </div>

      {featured.map((p, i) => (
        <Reveal
          as="article"
          className="featured-item"
          key={p.key}
          role="button"
          tabIndex={0}
          onClick={() => onOpen(p.key)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onOpen(p.key))}
        >
          <span className="featured-num">{String(i + 2).padStart(2, '0')}</span>
          <div>
            <div className="featured-sub mono">{p.subtitle}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tag-row">
              {p.tags.map((t) => (
                <span className="pill" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="link-arrow">Read case study →</div>
          </div>
          <div>
            <ProjectVisual project={p} />
            <div className="featured-facts">
              <div>
                <div className="facts-label">Platforms</div>
                {p.platforms}
              </div>
              <div>
                <div className="facts-label">Status</div>
                <span className="accent">{p.status}</span>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}

function AllWork({ onOpen }) {
  return (
    <section className="section allwork-section">
      <div className="section-head">
        <h2>All work</h2>
        <span className="meta mono">{String(others.length).padStart(2, '0')} more projects</span>
      </div>
      <div className="allwork-grid">
        {others.map((p, i) => (
          <Reveal
            as="article"
            className="work-card"
            key={p.key}
            delay={i * 70}
            role="button"
            tabIndex={0}
            onClick={() => onOpen(p.key)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onOpen(p.key))}
          >
            <div className="work-card-top">
              <span>{p.platforms}</span>
              <span className="accent">{p.status}</span>
            </div>
            <h3>{p.title}</h3>
            <div className="work-card-sub mono">{p.subtitle}</div>
            <p>{p.description}</p>
            <div className="tag-row">
              {p.tags.map((t) => (
                <span className="pill pill-soft" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default function Work({ onOpen }) {
  return (
    <>
      <Flagship onOpen={onOpen} />
      <Featured onOpen={onOpen} />
      <AllWork onOpen={onOpen} />
    </>
  )
}
