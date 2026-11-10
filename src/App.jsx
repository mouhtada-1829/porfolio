import { NavRail } from './components/NavRail/NavRail'
import { Intro } from './components/Intro/Intro'
import { Hero } from './components/Hero/Hero'
import { Senguichet } from './components/Senguichet/Senguichet'
import { Projects } from './components/Projects/Projects'
import { Ticker } from './components/Ticker/Ticker'
import { Certifications } from './components/Certifications/Certifications'
import { Security } from './components/Security/Security'
import { Journey } from './components/Journey/Journey'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { useScrollMotion } from './hooks/useScrollMotion'
import './App.css'

export default function App() {
  useScrollMotion()

  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <Intro />
      <NavRail />
      <main id="main">
        <Hero />
        <Senguichet />
        <Projects />
        <Ticker />
        <Certifications />
        <Security />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
