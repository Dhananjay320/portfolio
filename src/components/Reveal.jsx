import { useEffect, useRef } from 'react'

// Renders one element that fades/slides in when scrolled into view.
// Extra props (onClick, id, role…) pass straight through, so it can be a grid
// child or a clickable card without an extra wrapper.
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Already on screen at mount (or above the fold) — show it immediately.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.94) {
      el.classList.add('revealed')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
