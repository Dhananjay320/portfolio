import { projects } from '../data.js'
import Reveal from './Reveal.jsx'

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 3) * 80}>
      <article className={`project-card ${project.featured ? 'project-featured' : ''}`}>
        <div className="project-top">
          <div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
          <span className={`project-status ${project.status === 'In production' || project.status === 'Live on Play Store' ? 'status-live' : ''}`}>
            {project.status}
          </span>
        </div>

        <p className="project-desc">{project.description}</p>

        <ul className="project-highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="project-tags">
          {project.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        <div className="project-footer">
          <span className="project-platforms">{project.platforms}</span>
          {project.link ? (
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
              View ↗
            </a>
          ) : (
            <span className="project-private">Private — demo on request</span>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            Production platforms I've architected, built, and shipped — across web, desktop, and mobile.
          </p>
        </Reveal>
        <div className="projects-grid featured-grid">
          {featured.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.title} />
          ))}
        </div>
        <div className="projects-grid">
          {others.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
