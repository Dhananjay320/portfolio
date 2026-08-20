// A project's cover image. Uses the real screenshot when the project has one
// (`shot` in data.js); otherwise falls back to a generated monogram card.
// Phone captures (`shotPortrait`) are contained on the card ground rather than
// cropped to the frame.
const initials = (title) =>
  title
    .replace(/[^A-Za-z\s&]/g, '')
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')

export default function ProjectVisual({ project, ratio = '4x3', className = '' }) {
  if (project.shot) {
    return (
      <div className={`shot shot-${ratio} ${project.shotPortrait ? 'shot-portrait' : ''} ${className}`}>
        <img src={project.shot} alt={`${project.title} — ${project.subtitle}`} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`visual visual-${ratio} ${className}`} aria-hidden="true">
      <div className="visual-top">{project.platforms}</div>
      <div>
        <div className="visual-mark">{initials(project.title)}</div>
        <div className="visual-title">{project.subtitle}</div>
      </div>
    </div>
  )
}
