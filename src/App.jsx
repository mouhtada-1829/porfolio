import { NavRail } from './components/NavRail/NavRail'
import { Hero } from './components/Hero/Hero'
import { Senguichet } from './components/Senguichet/Senguichet'
import { Projects } from './components/Projects/Projects'
import { Certifications } from './components/Certifications/Certifications'
import { Security } from './components/Security/Security'
import { Journey } from './components/Journey/Journey'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <NavRail />
      <main id="main">
        <Hero />
        <Senguichet />
        <Projects />
        <Certifications />
        <Security />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
