import { useEffect, useRef, useState } from 'react'
import { profile, projects, skills, experience, education } from './data.js'

// Accent hue (oklch). Lime 135 · Amber 70 · Cyan 210 · Violet 295
const HUE = 135
const STATUS_CMD = 'npm run status'
const STATUS_OUT = '200 OK · niyoq in production · web · desktop · mobile'

function themeVars(dark) {
  const v = dark
    ? { bg: '#0d0e0c', surface: '#131411', fg: '#e7e8e2', muted: '#8b8e85', line: '#262822', accent: `oklch(0.84 0.17 ${HUE})`, onAccent: '#0d0e0c' }
    : { bg: '#f4f4f0', surface: '#fafaf7', fg: '#151613', muted: '#5f625a', line: '#dcddd5', accent: `oklch(0.52 0.15 ${HUE})`, onAccent: '#fafaf7' }
  const vars = {}
  Object.entries(v).forEach(([k, val]) => (vars['--' + k] = val))
  vars['--accentSoft'] = v.accent.replace(')', ' / .2)')
  vars['--accent2'] = dark ? `oklch(0.8 0.12 ${(HUE + 150) % 360})` : `oklch(0.5 0.14 ${(HUE + 150) % 360})`
  return vars
}

function initialMode() {
  try {
    return localStorage.getItem('mode') || 'dark'
  } catch {
    return 'dark'
  }
}

const hostOf = (url) => url.replace(/^https?:\/\/(www\.)?/, '').split(/[/?]/).slice(0, 3).join('/')

export default function App() {
  const [mode, setMode] = useState(initialMode)
  const [typed, setTyped] = useState('')
  const [output, setOutput] = useState('')
  const rootRef = useRef(null)
  const progressRef = useRef(null)
  const spotRef = useRef(null)
  const dark = mode === 'dark'

  useEffect(() => {
    try {
      localStorage.setItem('mode', mode)
    } catch {}
    document.body.style.background = dark ? '#0d0e0c' : '#f4f4f0'
  }, [mode, dark])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(STATUS_CMD)
      setOutput(STATUS_OUT)
      return
    }

    let i = 0
    let typer
    const start = setTimeout(() => {
      typer = setInterval(() => {
        i++
        setTyped(STATUS_CMD.slice(0, i))
        if (i >= STATUS_CMD.length) {
          clearInterval(typer)
          setTimeout(() => setOutput(STATUS_OUT), 350)
        }
      }, 70)
    }, 900)

    const els = rootRef.current.querySelectorAll('[data-reveal]')
    els.forEach((el) => el.classList.add('reveal'))
    const io = new IntersectionObserver(
      (entries) => {
        let n = 0
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.style.transitionDelay = n++ * 90 + 'ms'
          e.target.classList.add('in')
          io.unobserve(e.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      progressRef.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`
    }
    const onMove = (e) => {
      const s = spotRef.current
      s.style.opacity = '1'
      s.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
    }
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('pointermove', onMove, { passive: true })

    return () => {
      clearTimeout(start)
      clearInterval(typer)
      io.disconnect()
      removeEventListener('scroll', onScroll)
      removeEventListener('pointermove', onMove)
    }
  }, [])

  const { links } = profile
  const handle = profile.name.toLowerCase().replace(/\s+/g, '-')
  const first = profile.name.split(' ')[0].toLowerCase()

  const codeLines = [
    <span className="muted">// profile.ts — updated 2026-10</span>,
    <><span className="acc">export const</span> {first} = {'{'}</>,
    <>  role: <span className="str">"{profile.role}"</span>,</>,
    <>  location: <span className="str">"{profile.location} · UTC+5:30"</span>,</>,
    <>  stack: [<span className="str">"react"</span>, <span className="str">"react-native"</span>, <span className="str">"node"</span>],</>,
    <>  db: <span className="str">"mongodb"</span>,</>,
    <>  focus: [<span className="str">"real-time"</span>, <span className="str">"offline-first"</span>],</>,
    <>  shipping: <span className="acc">true</span>,</>,
    <>{'}'} <span className="acc">satisfies</span> Engineer;</>,
  ]

  return (
    <div style={themeVars(dark)}>
      <div ref={rootRef} className="page">
        <div ref={progressRef} className="progress" />
        <div ref={spotRef} className="spot" />
        <header className="topbar mono">
          <div className="wrap topbar-inner">
            <a href="#top" className="brand">
              <span className="acc">~/</span>
              <span>{handle}</span>
            </a>
            <div className="topbar-right">
              <nav>
                <a href="#work">work</a>
                <a href="#stack">stack</a>
                <a href="#experience">log</a>
                <a href="#contact">contact</a>
              </nav>
              <button className="mode-btn" onClick={() => setMode(dark ? 'light' : 'dark')} aria-label="Toggle theme">
                <span className="dot" />
                {mode}
              </button>
            </div>
          </div>
        </header>

        <div className="wrap">
          <section id="top" className="hero">
            <div className="hero-copy">
              <div data-reveal className="status mono">
                <span className="dot pulse" />
                open to full-stack / react roles — {profile.location}
              </div>
              <h1 data-reveal>
                I build cross‑platform apps and the <span className="acc">real‑time</span> systems behind them.
              </h1>
              <p data-reveal className="lede">
                Full-stack &amp; application developer, ~2 years in production. I work across React, React Native,
                Electron and Node.js/MongoDB — currently leading Niyoq end to end at Avadeti Media.
              </p>
              <div data-reveal className="ctas mono">
                <a href="#work" className="btn btn-primary">view work →</a>
                <a href={links.github} target="_blank" rel="noreferrer" className="btn">github ↗</a>
                <a href={links.resume} target="_blank" rel="noreferrer" className="btn">resume.pdf</a>
              </div>
            </div>

            <div data-reveal className="term mono">
              <div className="term-bar">
                <div className="lights"><span /><span /><span /></div>
                <span>~/{first}/profile.ts</span>
                <span>TS</span>
              </div>
              <div className="term-code">
                {codeLines.map((line, i) => (
                  <div key={i} className="code-line">
                    <span className="ln">{i + 1}</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
              <div className="term-out">
                <div className="prompt">
                  <span className="acc">❯</span>
                  <span>{typed}</span>
                  <span className="caret" />
                </div>
                <div className="muted">{output}</div>
              </div>
            </div>
          </section>

          <section id="work" className="section">
            <div data-reveal className="section-head">
              <h2>Selected work</h2>
              <span className="mono muted small">// 2024 — 2026</span>
            </div>
            <div className="work-grid">
              {projects.map((p) => {
                const Card = p.link ? 'a' : 'div'
                const cardProps = p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {}
                return (
                  <div data-reveal key={p.key} className="grid">
                    <Card className="card" {...cardProps}>
                      <div className={'shot' + (p.shotPortrait ? ' portrait' : '')}>
                        {p.shot ? <img src={p.shot} alt={`${p.title} screenshot`} loading="lazy" /> : <span>{p.subtitle}</span>}
                      </div>
                      <div className="card-head">
                        <div className="card-title">
                          <div className="title">{p.title}</div>
                          <div className="sub">{p.subtitle}</div>
                        </div>
                        <span className="mono muted small nowrap">{p.platforms}</span>
                      </div>
                      <p className="desc">{p.description}</p>
                      <div className="card-meta mono">
                        <span>{p.link ? hostOf(p.link) + ' ↗' : 'private repo'}</span>
                        <span>{p.status}</span>
                      </div>
                      <div className="tags mono">
                        {p.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>
          </section>

          <section id="stack" className="section stack">
            <div data-reveal className="stack-intro">
              <h2>Stack</h2>
              <p className="muted">Tools I reach for daily — across web, mobile and desktop. Comfortable picking up whatever the problem needs.</p>
            </div>
            <div className="stack-grid">
              {skills.map((s) => (
                <div data-reveal key={s.group} className="stack-cell">
                  <div className="mono acc small">{s.group.toLowerCase()}</div>
                  <div className="items">{s.items.join(', ')}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="section">
            <h2 data-reveal>Experience</h2>
            <div className="grid">
              {experience.map((j) => (
                <div data-reveal key={j.company} className="job">
                  <div className="mono muted small">{j.period}</div>
                  <div className="role">
                    {j.role} <span className="muted">@ {j.company}</span>
                  </div>
                  <div className="muted note">{j.note}</div>
                </div>
              ))}
              <div data-reveal className="job">
                <div className="mono muted small">{education.period}</div>
                <div className="role">
                  {education.degree} <span className="muted">@ {education.school}</span>
                </div>
                <div className="muted note">{education.location}</div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact">
            <div data-reveal className="mono muted small">
              <span className="acc">$</span> ping {first}
            </div>
            <a data-reveal href={`mailto:${profile.email}`} className="email">
              {profile.email}
            </a>
            <div data-reveal className="contact-links mono muted small">
              <a href={links.github} target="_blank" rel="noreferrer">github ↗</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">linkedin ↗</a>
              <a href={links.playstore} target="_blank" rel="noreferrer">play store ↗</a>
              <a href={links.resume} target="_blank" rel="noreferrer">resume.pdf ↗</a>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
            </div>
          </section>

          <footer className="footer mono">
            <div>
              <span><span className="acc">●</span> main</span>
              <span>v5.0.0</span>
              <span>react + vite</span>
            </div>
            <div>
              <span>© 2026 {profile.name}</span>
              <span>UTF-8</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
