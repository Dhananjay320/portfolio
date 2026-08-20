import { useEffect, useState } from 'react'
import { projects } from './data.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Work from './components/Work.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'

export default function App() {
  const [route, setRoute] = useState('home')
  const detail = projects.find((p) => p.key === route) || null

  // Scroll after the new route has painted, so the browser doesn't restore
  // the old offset once the page height changes.
  useEffect(() => {
    if (route !== 'home') window.scrollTo({ top: 0 })
  }, [route])

  const open = (key) => setRoute(key)

  const goHome = () => setRoute('home')

  return (
    <>
      <Nav onHome={goHome} />
      {detail ? (
        <ProjectDetail project={detail} onHome={goHome} />
      ) : (
        <main id="top">
          <Hero />
          <Stats />
          <Work onOpen={open} />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </main>
      )}
    </>
  )
}
