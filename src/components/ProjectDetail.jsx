import { profile } from '../data.js'
import ProjectVisual from './ProjectVisual.jsx'

export default function ProjectDetail({ project, onHome }) {
  return (
    <div className="detail">
      <button type="button" className="detail-back" onClick={onHome}>
        ← All work
      </button>
      <div className="detail-sub mono">{project.subtitle}</div>
      <h1>{project.title}</h1>
      <div className="rule" />

      <div className="detail-grid">
        <div>
          <p className="detail-lead">{project.description}</p>
          <div className="detail-label mono">Highlights</div>
          <div>
            {project.highlights.map((h, i) => (
              <div className="detail-highlight" key={h}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
          <div className="tag-row">
            {project.tags.map((t) => (
              <span className="pill" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <ProjectVisual project={project} className="detail-visual" />
          <div className="detail-cards">
            <div className="detail-card">
              <div className="detail-card-label">Platforms</div>
              <div className="detail-card-value">{project.platforms}</div>
            </div>
            <div className="detail-card">
              <div className="detail-card-label">Status</div>
              <div className="detail-card-value accent">{project.status}</div>
            </div>
          </div>
          {project.link && (
            <a className="btn btn-primary" href={project.link} target="_blank" rel="noreferrer">
              View project ↗
            </a>
          )}
        </div>
      </div>

      <div className="detail-footer">
        <button type="button" className="detail-back" onClick={onHome}>
          ← All work
        </button>
        <a href={`mailto:${profile.email}`}>Discuss this project →</a>
      </div>
    </div>
  )
}
