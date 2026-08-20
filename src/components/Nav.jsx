import { profile } from '../data.js'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
]

export default function Nav({ onHome }) {
  return (
    <header className="header">
      <a href="#top" className="header-brand" onClick={onHome}>
        <span className="header-dot" />
        {profile.name}
      </a>
      <nav className="header-nav">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={onHome}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="header-cta" onClick={onHome}>
          Contact
        </a>
      </nav>
    </header>
  )
}
